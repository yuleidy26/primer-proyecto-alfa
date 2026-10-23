import { fail } from '@sveltejs/kit';
import { z } from 'zod';

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

		return { exito: true };
	}
};
