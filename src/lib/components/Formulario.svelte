<script>
  import { enhance } from '$app/forms';
  import Icon from "@iconify/svelte";

  let enviado = $state(false);
  let errorEnvio = $state('');
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
            errorEnvio = result.data?.errorEnvio ?? '';
            enviado = false;

        } else if (result.type === 'success') {
            errores = {};
            errorEnvio = '';
            enviado = true;
            servicios = [];

        } else {
            errores = {};
            errorEnvio = '';
            enviado = false;
        }
    };
};
</script>

<section id="CONTACTO" class="formulario bg-white text-slate-900 px-5 sm:px-8 lg:px-12 py-16 md:py-20">
  <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

    <!-- Columna Izquierda: Títulos y Tarjetas de Contacto -->
    <div class="lg:col-span-5 flex flex-col gap-8">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-[2px] bg-[#0039C6]"></div>
          <p class="text-[#0039C6] font-plusjack font-bold text-xs tracking-wider">CONTACTO</p>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold leading-tight text-slate-900">
          ¿Tienes una visión<br class="hidden sm:block"> en mente?<br class="hidden sm:block">
          Creemos algo <span class="text-[#0039C6] italic">extraordinario</span><br class="hidden sm:block"> juntos.
        </h2>
      </div>

      <p class="font-plusjack text-sm md:text-base text-[#434656] leading-relaxed">
        Desde identidades visuales memorables hasta sistemas de redes sociales y publicaciones editoriales. Cuéntame sobre tu próximo proyecto.
      </p>

      <!-- Tarjetas de contacto de la izquierda con Iconify -->
      <div class="flex flex-col gap-4 font-plusjack">
        
        <!-- Correo -->
        <a href="mailto:yuleidyamaya2026@gmail.com" class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between gap-3 hover:border-[#0039C6] transition group">
          <div class="flex items-center gap-4 min-w-0">
            <div class="w-10 h-10 shrink-0 rounded-lg bg-blue-50 text-[#0039C6] flex items-center justify-center">
              <Icon icon="akar-icons:envelope" width="20" />
            </div>
            <div class="min-w-0">
              <span class="font-bold text-[10px] uppercase tracking-wider text-[#0039C6] block mb-0.5">Correo electrónico</span>
              <span class="text-sm font-medium text-slate-800 break-all">yuleidyamaya2026@gmail.com</span>
            </div>
          </div>
          <span class="text-slate-400 shrink-0 group-hover:text-[#0039C6] group-hover:translate-x-1 transition">→</span>
        </a>

        <!-- Teléfono / WhatsApp -->
        <a href="https://wa.me/584129293832" target="_blank" rel="noopener noreferrer" class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between gap-3 hover:border-[#0039C6] transition group">
          <div class="flex items-center gap-4 min-w-0">
            <div class="w-10 h-10 shrink-0 rounded-lg bg-blue-50 text-[#0039C6] flex items-center justify-center">
              <Icon icon="akar-icons:whatsapp-fill" width="20" />
            </div>
            <div class="min-w-0">
              <span class="font-bold text-[10px] uppercase tracking-wider text-[#0039C6] block mb-0.5">Teléfono / WhatsApp</span>
              <span class="text-sm font-medium text-slate-800 break-words">+58 412-9293832</span>
            </div>
          </div>
          <span class="text-slate-400 shrink-0 group-hover:text-[#0039C6] group-hover:translate-x-1 transition">→</span>
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/artby_yul/" target="_blank" rel="noopener noreferrer" class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between gap-3 hover:border-[#0039C6] transition group">
          <div class="flex items-center gap-4 min-w-0">
            <div class="w-10 h-10 shrink-0 rounded-lg bg-blue-50 text-[#0039C6] flex items-center justify-center">
              <Icon icon="akar-icons:instagram-fill" width="20" />
            </div>
            <div class="min-w-0">
              <span class="font-bold text-[10px] uppercase tracking-wider text-[#0039C6] block mb-0.5">Instagram</span>
              <span class="text-sm font-medium text-slate-800 break-words">@artby_yul</span>
            </div>
          </div>
          <span class="text-slate-400 shrink-0 group-hover:text-[#0039C6] group-hover:translate-x-1 transition">→</span>
        </a>

        <!-- Ubicación -->
        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between gap-3">
          <div class="flex items-center gap-4 min-w-0">
            <div class="w-10 h-10 shrink-0 rounded-lg bg-blue-50 text-[#0039C6] flex items-center justify-center">
              <Icon icon="akar-icons:location" width="20" />
            </div>
            <div class="min-w-0">
              <span class="font-bold text-[10px] uppercase tracking-wider text-[#0039C6] block mb-0.5">Ubicación</span>
              <span class="text-sm font-medium text-slate-800 block break-words">Valencia, Carabobo, Venezuela</span>
              <span class="text-xs text-slate-500">Disponible para proyectos presenciales y remotos</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Columna Derecha: Formulario Libre (Sin cuadro) -->
    <div class="lg:col-span-7 flex flex-col gap-6">
      
      <!-- Cabecera interna libre -->
      <div class="flex flex-wrap justify-between items-center gap-3 pb-4 border-b border-slate-100 font-plusjack">
        <span class="text-xs uppercase font-bold tracking-widest text-[#0039C6]">Hablemos</span>
        <span class="text-[10px] font-bold uppercase tracking-wider text-[#0039C6] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          Respuesta en 24 h
        </span>
      </div>

      {#if enviado}
        <div class="py-12 flex flex-col gap-3 text-center">
          <p class="font-playfair text-3xl text-[#0039C6]">¡Gracias por escribirme!</p>
          <p class="font-plusjack text-sm text-[#434656]">
            Tu mensaje fue recibido. Pronto estaré en contacto contigo.
          </p>
          <button
            type="button"
            class="self-center mt-4 text-xs uppercase tracking-wider font-plusjack font-bold text-[#0039C6] hover:underline"
            onclick={() => (enviado = false)}
          >
            Enviar otro mensaje
          </button>
        </div>
      {:else}
        <form
          method="POST"
          action="?/contacto"
          novalidate
          use:enhance={manejarEnvio}
          class="flex flex-col gap-5"
        >
          <!-- Nombre completo -->
          <div class="flex flex-col gap-2 font-plusjack">
            <label for="nombre" class="font-bold text-xs tracking-wider uppercase text-[#434656]">
              Nombre completo <span class="text-[#0039C6]">*</span>
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              placeholder="ej. María Morales"
              aria-invalid={!!errores.nombre}
              class="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0039C6] focus:ring-1 focus:ring-[#0039C6] transition"
              class:border-red-500={!!errores.nombre}
            />
            {#if errores.nombre}
              <p class="text-xs text-red-600">{errores.nombre[0]}</p>
            {/if}
          </div>

          <!-- Correo electrónico -->
          <div class="flex flex-col gap-2 font-plusjack">
            <label for="correo" class="font-bold text-xs tracking-wider uppercase text-[#434656]">
              Correo electrónico <span class="text-[#0039C6]">*</span>
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              required
              placeholder="hola@tuempresa.com"
              aria-invalid={!!errores.correo}
              class="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0039C6] focus:ring-1 focus:ring-[#0039C6] transition"
              class:border-red-500={!!errores.correo}
            />
            {#if errores.correo}
              <p class="text-xs text-red-600">{errores.correo[0]}</p>
            {/if}
          </div>

          <!-- Tipo de empresa -->
          <div class="flex flex-col gap-2 font-plusjack">
            <label for="tipo" class="font-bold text-xs tracking-wider uppercase text-[#434656]">
              Tipo de empresa / emprendimiento
            </label>
            <input
              id="tipo"
              name="tipo"
              type="text"
              required
              placeholder="ej. Marca de moda, Startup audiovisual, Editorial"
              aria-invalid={!!errores.tipo}
              class="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0039C6] focus:ring-1 focus:ring-[#0039C6] transition"
              class:border-red-500={!!errores.tipo}
            />
            {#if errores.tipo}
              <p class="text-xs text-red-600">{errores.tipo[0]}</p>
            {/if}
          </div>

          <!-- ¿En qué te puedo ayudar? -->
          <div class="flex flex-col gap-3 font-plusjack">
            <span class="font-bold text-xs tracking-wider uppercase text-[#434656]">
              ¿En qué te puedo ayudar?
            </span>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {#each opcionesServicio as servicio}
                <button
                  type="button"
                  aria-pressed={servicios.includes(servicio)}
                  onclick={() => alternarServicio(servicio)}
                  class={`border rounded-lg px-4 py-3 font-bold text-xs uppercase tracking-wider transition text-center ${
                    servicios.includes(servicio)
                      ? 'bg-[#0039C6] text-white border-[#0039C6]'
                      : 'bg-white text-[#434656] border-slate-200 hover:border-[#0039C6]'
                  }`}
                >
                  {servicio}
                </button>
              {/each}
            </div>
            {#if errores.servicios}
              <p class="text-xs text-red-600">{errores.servicios[0]}</p>
            {/if}
            {#each servicios as servicio}
              <input type="hidden" name="servicios" value={servicio} />
            {/each}
          </div>

          <!-- Cuéntame sobre tu proyecto -->
          <div class="flex flex-col gap-2 font-plusjack">
            <label for="proyecto" class="font-bold text-xs tracking-wider uppercase text-[#434656]">
              Cuéntame sobre tu proyecto <span class="text-[#0039C6]">*</span>
            </label>
            <textarea
              id="proyecto"
              name="proyecto"
              rows="4"
              required
              placeholder="Cuéntame sobre tus objetivos, plazos y visión para este proyecto..."
              aria-invalid={!!errores.proyecto}
              class="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-[#0039C6] focus:ring-1 focus:ring-[#0039C6] transition"
              class:border-red-500={!!errores.proyecto}
            ></textarea>
            {#if errores.proyecto}
              <p class="text-xs text-red-600">{errores.proyecto[0]}</p>
            {/if}
          </div>

          <!-- Botón de enviar alineado a la derecha -->
          <div class="flex justify-end mt-2">
            <button
              type="submit"
              class="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-[#0039C6] text-white px-8 py-4 rounded-lg font-plusjack font-bold text-xs uppercase tracking-wider hover:bg-blue-800 transition shadow-sm"
            >
              Enviar mensaje <span class="text-base">→</span>
            </button>
          </div>
          {#if errorEnvio}
          <p class="text-sm text-red-600 font-plusjack" role="alert">
            {errorEnvio}
          </p>
          {/if}
          
        </form>
      {/if}

    </div>

  </div>
</section>