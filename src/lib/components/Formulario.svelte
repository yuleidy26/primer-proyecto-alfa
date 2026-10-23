<script>
  import { enhance } from '$app/forms';

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

  /** @type {import('$app/forms').SubmitFunction} */
  const manejarEnvio = () => {
    return async ({ result, update }) => {
      await update();

      if (result.type === 'failure') {
        errores = result.data?.errores ?? {};
        enviado = false;
      } else if (result.type === 'success') {
        errores = {};
        enviado = true;
        servicios = [];
      } else {
        errores = {};
        enviado = false;
      }
    };
  };
</script>

<section id="Contacto" class="formulario bg-[#FCF8FE] text-slate-900 px-12 py-24">
  <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

    <div class="max-w-2xl flex flex-col gap-4">
      <p class="text-[#0039C6] font-plusjack font-bold text-xs tracking-wider">CONTACTO</p>
      <h2 class="text-5xl lg:text-6xl font-playfair font-semibold leading-tight">
        ¿Tienes una visión<br> en mente?<br>
        Creemos algo <span class="text-[#0039C6] italic">extraordinario</span><br> juntos.
      </h2>
      <p class="font-plusjack text-sm md:text-base text-[#434656] leading-relaxed">
        Desde identidades visuales memorables hasta sistemas de<br>
        redes sociales y publicaciones editoriales. Cuéntame<br>
        sobre tu próximo proyecto.
      </p>

      <div class="mt-6 flex flex-col gap-4 font-plusjack text-sm text-[#434656]">
        <div class="flex flex-col gap-1">
          <span class="font-bold text-xs uppercase tracking-wider text-[#0039C6]">Correo electrónico</span>
          <a href="mailto:yuleidyamaya2026@gmail.com" class="hover:text-[#0039C6] transition">
            yuleidyamaya2026@gmail.com
          </a>
        </div>

        <div class="flex flex-col gap-1">
          <span class="font-bold text-xs uppercase tracking-wider text-[#0039C6]">Teléfono / WhatsApp</span>
          <a href="https://wa.me/584129293832" target="_blank" rel="noopener noreferrer" class="hover:text-[#0039C6] transition">
            +58 412-9293832
          </a>
        </div>

        <div class="flex flex-col gap-1">
          <span class="font-bold text-xs uppercase tracking-wider text-[#0039C6]">Instagram</span>
          <a href="https://www.instagram.com/artby_yul/" target="_blank" rel="noopener noreferrer" class="hover:text-[#0039C6] transition">
            @artby_yul
          </a>
        </div>
      </div>
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
      <form
        class="mt-12 lg:mt-0 lg:col-start-2 max-w-2xl flex flex-col gap-6"
        method="POST"
        action="?/contacto"
        novalidate
        use:enhance={manejarEnvio}
      >
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
          {#each servicios as servicio}
            <input type="hidden" name="servicios" value={servicio} />
          {/each}
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
