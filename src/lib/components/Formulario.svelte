<script>
  import { z } from 'zod';

  const esquemaContacto = z.object({
    nombre: z.string().trim().min(2, 'Ingresa tu nombre'),
    correo: z.email('Ingresa un correo válido'),
    tipo: z.string().trim().min(2, 'Indica el tipo de empresa o emprendimiento'),
    servicios: z.array(z.string()).min(1, 'Selecciona al menos un servicio'),
    proyecto: z.string().trim().min(10, 'Cuéntame un poco más sobre tu proyecto')
  });

  let enviado = $state(false);
  /** @type {string[]} */
  let servicios = $state([]);
  /** @type {Record<string, string[] | undefined>} */
  let errores = $state({});

  const opcionesServicio = ['Identidad visual', 'Papelería', 'Redes sociales'];

  /** @param {string} servicio */
  function alternarServicio(servicio) {
    servicios = servicios.includes(servicio)
      ? servicios.filter((s) => s !== servicio)
      : [...servicios, servicio];

    if (errores.servicios) {
      errores = { ...errores, servicios: undefined };
    }
  }

  /** @param {SubmitEvent} event */
  function manejarEnvio(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    const datos = new FormData(form);
    const resultado = esquemaContacto.safeParse({
      nombre: String(datos.get('nombre') ?? ''),
      correo: String(datos.get('correo') ?? ''),
      tipo: String(datos.get('tipo') ?? ''),
      servicios,
      proyecto: String(datos.get('proyecto') ?? '')
    });

    if (!resultado.success) {
      errores = resultado.error.flatten().fieldErrors;
      enviado = false;
      return;
    }

    errores = {};
    enviado = true;
    form.reset();
    servicios = [];
  }
</script>

<section id="Contacto" class="formulario bg-[#FCF8FE] text-slate-900 px-12 py-24">
  <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    <div class="max-w-2xl flex flex-col gap-4">
      <p class="text-[#0039C6] font-plusjack font-bold text-xs tracking-wider">CONTACTO</p>
      <h2 class="text-5xl lg:text-6xl font-playfair font-semibold leading-tight">
        ¿Tienes una visión<br> en mente?<br>
        Creemos algo <span class="text-[#0039C6] italic">extraordinario</span><br> juntos.
      </h2>
      <p class="font-plusjack text-sm md:text-base text-[#434656] leading-relaxed">
        Completa el formulario y me pondré en contacto contigo para darle vida a tu marca.
      </p>
    </div>

    {#if enviado}
      <div class="mt-12 lg:mt-0 lg:col-start-2 max-w-2xl border border-[#0039C6] bg-white p-8 flex flex-col gap-2">
        <p class="font-playfair text-2xl text-[#0039C6]">¡Gracias por escribirme!</p>
        <p class="font-plusjack text-sm text-[#434656]">
          Tu mensaje fue recibido. Pronto estaré en contacto contigo.
        </p>
        <button
          type="button"
          class="self-start mt-4 text-xs uppercase tracking-wider font-plusjack font-bold text-[#0039C6] hover:underline"
          onclick={() => (enviado = false)}
        >
          Enviar otro mensaje
        </button>
      </div>
    {:else}
      <form class="mt-12 lg:mt-0 lg:col-start-2 max-w-2xl flex flex-col gap-6" novalidate onsubmit={manejarEnvio}>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label for="nombre" class="font-plusjack font-bold text-xs tracking-wider uppercase text-[#434656]">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              placeholder="Tu nombre"
              aria-invalid={!!errores.nombre}
              class="bg-white border border-slate-300 px-4 py-3 font-plusjack text-sm outline-none focus:border-[#0039C6] focus:ring-1 focus:ring-[#0039C6] transition"
              class:border-red-500={!!errores.nombre}
            />
            {#if errores.nombre}
              <p class="font-plusjack text-xs text-red-600">{errores.nombre[0]}</p>
            {/if}
          </div>

          <div class="flex flex-col gap-2">
            <label for="correo" class="font-plusjack font-bold text-xs tracking-wider uppercase text-[#434656]">
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              required
              placeholder="tucorreo@ejemplo.com"
              aria-invalid={!!errores.correo}
              class="bg-white border border-slate-300 px-4 py-3 font-plusjack text-sm outline-none focus:border-[#0039C6] focus:ring-1 focus:ring-[#0039C6] transition"
              class:border-red-500={!!errores.correo}
            />
            {#if errores.correo}
              <p class="font-plusjack text-xs text-red-600">{errores.correo[0]}</p>
            {/if}
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="tipo" class="font-plusjack font-bold text-xs tracking-wider uppercase text-[#434656]">
            Tipo de empresa o emprendimiento
          </label>
          <input
            id="tipo"
            name="tipo"
            type="text"
            required
            placeholder="Ej: Emprendimiento, empresa, marca personal..."
            aria-invalid={!!errores.tipo}
            class="bg-white border border-slate-300 px-4 py-3 font-plusjack text-sm outline-none focus:border-[#0039C6] focus:ring-1 focus:ring-[#0039C6] transition"
            class:border-red-500={!!errores.tipo}
          />
          {#if errores.tipo}
            <p class="font-plusjack text-xs text-red-600">{errores.tipo[0]}</p>
          {/if}
        </div>

        <div class="flex flex-col gap-3">
          <span class="font-plusjack font-bold text-xs tracking-wider uppercase text-[#434656]">
            ¿En qué te puedo ayudar?
          </span>
          <div class="flex flex-wrap gap-3">
            {#each opcionesServicio as servicio}
              <button
                type="button"
                aria-pressed={servicios.includes(servicio)}
                onclick={() => alternarServicio(servicio)}
                class={`border px-6 py-3 font-plusjack font-bold text-xs uppercase tracking-wider transition ${
                  servicios.includes(servicio)
                    ? 'bg-[#0039C6] text-white border-[#0039C6]'
                    : 'bg-white text-[#434656] border-slate-300 hover:border-[#0039C6]'
                }`}
              >
                {servicio}
              </button>
            {/each}
          </div>
          {#if errores.servicios}
            <p class="font-plusjack text-xs text-red-600">{errores.servicios[0]}</p>
          {/if}
        </div>

        <div class="flex flex-col gap-2">
          <label for="proyecto" class="font-plusjack font-bold text-xs tracking-wider uppercase text-[#434656]">
            Cuéntame sobre tu proyecto
          </label>
          <textarea
            id="proyecto"
            name="proyecto"
            rows="5"
            required
            placeholder="Describe tu idea, tu marca y lo que necesitas..."
            aria-invalid={!!errores.proyecto}
            class="bg-white border border-slate-300 px-4 py-3 font-plusjack text-sm outline-none resize-none focus:border-[#0039C6] focus:ring-1 focus:ring-[#0039C6] transition"
            class:border-red-500={!!errores.proyecto}
          ></textarea>
          {#if errores.proyecto}
            <p class="font-plusjack text-xs text-red-600">{errores.proyecto[0]}</p>
          {/if}
        </div>

        <button
          type="submit"
          class="self-start inline-flex items-center gap-2 bg-[#0039C6] text-white px-8 py-4 font-plusjack font-bold text-xs uppercase tracking-wider hover:bg-blue-800 transition"
        >
          Enviar mensaje <span class="text-base">→</span>
        </button>
      </form>
    {/if}

  </div>
</section>
