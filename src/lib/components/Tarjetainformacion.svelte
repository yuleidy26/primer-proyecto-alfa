<script>
  let { subtitulo, titulo, descripcion, imagen } = $props();
</script>

<div class="bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between h-full rounded-sm">
  
  <div class="flex flex-col gap-3">
    {#if subtitulo}
      <p class="uppercase text-[#B34700] font-plusjack font-bold text-xs tracking-wider">
        {subtitulo}
      </p>
    {/if}

    <h2 class="text-[#1B1B1F] font-playfair text-2xl md:text-3xl font-normal leading-snug">
      {titulo}
    </h2>

    <!-- Contenedor con una altura grande e igual para ambas tarjetas -->
    <div class="w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden rounded-xl my-3">
      <img 
        src={imagen} 
        alt={titulo} 
        class="w-full h-full object-cover object-center"
      >
    </div>
  </div>

  <p class="text-[#4A4542] font-plusjack text-xs md:text-sm leading-relaxed mt-2">
    {descripcion}
  </p>

</div>