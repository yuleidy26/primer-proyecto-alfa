<script>
  let { subtitulo, titulo, descripcion, imagen } = $props();
</script>

<div class="bg-white p-8 md:p-10 shadow-sm flex flex-col justify-between h-full">
  
  <div class="flex flex-col gap-4">
    <!-- Mini título superior dinámico -->
    {#if subtitulo}
      <p class="uppercase text-[#B34700] font-bold text-xs tracking-wider">
        {subtitulo}
      </p>
    {/if}

    <!-- Título principal con tipografía Serif -->
    <h2 class="text-[#1B1B1F] font-serif text-2xl md:text-3xl font-normal leading-snug">
      {titulo}
    </h2>

    <!-- Contenedor de la imagen -->
    <div class="w-full overflow-hidden rounded-md my-2 bg-[#F7E9C3]/30">
      <img src={imagen} alt={titulo} class="w-full h-auto object-cover">
    </div>
  </div>

  <!-- Descripción inferior -->
  <p class="text-[#4A4542] text-sm md:text-base leading-relaxed mt-4">
    {descripcion}
  </p>

</div>