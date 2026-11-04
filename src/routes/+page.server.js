import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$app/env/private';

const resend = new Resend(RESEND_API_KEY);

const esquemaContacto = z.object({
    nombre: z.string().trim().min(2, 'Ingresa tu nombre'),
    correo: z.email('Ingresa un correo válido'),
    tipo: z.string().trim().min(2, 'Indica el tipo de empresa o emprendimiento'),
    servicios: z.array(z.string()).min(1, 'Selecciona al menos un servicio'),
    proyecto: z.string().trim().min(10, 'Cuéntame un poco más sobre tu proyecto')
});

export const actions = {
    contacto: async ({ request }) => {
        const datos = await request.formData();

        const valores = {
            nombre: String(datos.get('nombre') ?? ''),
            correo: String(datos.get('correo') ?? ''),
            tipo: String(datos.get('tipo') ?? ''),
            servicios: datos.getAll('servicios').map(String),
            proyecto: String(datos.get('proyecto') ?? '')
        };

        const resultado = esquemaContacto.safeParse(valores);

        if (!resultado.success) {
            return fail(400, {
                errores: resultado.error.flatten().fieldErrors,
                valores
            });
        }

        try {
            const { data, error } = await resend.emails.send({
                from: 'Portafolio Yule <onboarding@resend.dev>',
                replyTo: valores.correo,
                to: ['yuleidyamaya2020@gmail.com'],
                subject: 'Nuevo mensaje desde mi portafolio',
                text: `
Nombre: ${valores.nombre}
Correo: ${valores.correo}
Tipo de empresa: ${valores.tipo}
Servicios: ${valores.servicios.join(', ')}

Descripción del proyecto:
${valores.proyecto}
                `
            });

            console.log('Resultado de Resend:', { data, error });

            if (error) {
                console.error('Error al enviar el correo:', error);
                return fail(500, { errorEnvio: 'No se pudo enviar el mensaje.' });
            }

            return { exito: true };

        } catch (error) {
            console.error('Error inesperado:', error);
            return fail(500, { errorEnvio: 'Ocurrió un error al enviar el mensaje.' });
        }
    }
};