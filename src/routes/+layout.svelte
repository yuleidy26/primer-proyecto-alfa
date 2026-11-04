<script lang="ts">
    import favicon from '#lib/assets/favicon.svg';
    import Icon from "@iconify/svelte";
    import "../app.css";
    let { children } = $props();

    let menuAbierto = $state(false);
    const enlaces = [
        { href: '#INICIO', texto: 'INICIO' },
        { href: '#SOBRE-MI', texto: 'SOBRE MÍ' },
        { href: '#PROYECTOS', texto: 'PROYECTOS' },
        { href: '#CONTACTO', texto: 'CONTACTO' }
    ];
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header class="px-5 sm:px-8 lg:px-10 py-4 md:py-5 sticky top-0 bg-white/80 backdrop-blur-md z-50">
    <div class="flex justify-between items-center gap-4">
        <p class="uppercase font-medium text-zinc-700 text-xs">Yuleidy Amaya - Portafolio</p>

        <!-- Navegación de escritorio -->
        <nav class="hidden md:flex gap-6 lg:gap-10 font-medium text-zinc-700 text-xs">
          {#each enlaces as enlace}
            <a href={enlace.href} class="uppercase hover:text-[#004CFF] transition-colors duration-200">{enlace.texto}</a>
          {/each}
        </nav>

        <!-- Botón de menú móvil -->
        <button
          type="button"
          class="md:hidden inline-flex items-center justify-center w-9 h-9 text-zinc-700"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
          onclick={() => (menuAbierto = !menuAbierto)}
        >
          <Icon icon={menuAbierto ? 'lucide:x' : 'lucide:menu'} width="22" />
        </button>
    </div>

    <!-- Navegación móvil desplegable -->
    {#if menuAbierto}
      <nav class="md:hidden flex flex-col gap-4 pt-4 mt-4 border-t border-zinc-200 font-medium text-zinc-700 text-xs">
        {#each enlaces as enlace}
          <a
            href={enlace.href}
            class="uppercase hover:text-[#004CFF] transition-colors duration-200"
            onclick={() => (menuAbierto = false)}
          >{enlace.texto}</a>
        {/each}
      </nav>
    {/if}
</header>

{@render children()}

<footer class="bg-blue-600 text-white px-5 sm:px-8 lg:px-15 py-8 flex flex-col gap-8">
    <!-- Parte superior -->
    <div class="flex flex-col md:flex-row justify-between md:items-center gap-6 md:gap-8">
        <div class="flex flex-col gap-2">
            <p class="font-text-2 font-playfair font-bold">Yuleidy Amaya</p>
            <p class="text-xs font-plusjack font-light">Diseño visual. Dirección de Arte e identidad de marca</p>
        </div>

        <nav class="flex flex-wrap justify-start md:justify-end items-center gap-x-3 gap-y-2 md:gap-6 font-plusjack font-light text-xs">
            <a href="#INICIO" class="uppercase hover:text-slate-200 transition-colors duration-200">INICIO</a>
            <span class="hidden md:inline">•</span>
            <a href="#SOBRE-MI" class="uppercase hover:text-slate-200 transition-colors duration-200">SOBRE MÍ</a>
            <span class="hidden md:inline">•</span>
            <a href="#PROYECTOS" class="uppercase hover:text-slate-200 transition-colors duration-200">PROYECTOS</a>
            <span class="hidden md:inline">•</span>
            <a href="#CONTACTO" class="uppercase hover:text-slate-200 transition-colors duration-200">CONTACTO</a>
        </nav>
    </div>
<hr class="border-blue-400 opacity-40 my-2">
    <!-- Parte Inferior -->
    <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div class="text-xs font-plusjack font-light">©2026 Yuleidy Amaya. Todos los derechos reservados.</div>

        <div class="flex items-center gap-4">
            <a href="https://www.instagram.com/artby_yul/" target="_blank" rel="noopener noreferrer">
                <Icon icon="akar-icons:instagram-fill" width="32" />
            </a>
            <a href="https://www.behance.net/yuleidyamaya" target="_blank" rel="noopener noreferrer">
                <Icon icon="akar-icons:behance-fill" width="32" />
            </a>
            <a href="https://wa.me/584129293832" target="_blank" rel="noopener noreferrer">
                <Icon icon="akar-icons:whatsapp-fill" width="32" />
            </a>
        </div>
    </div>
</footer>