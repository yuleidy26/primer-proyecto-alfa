<script lang="ts">
    import favicon from '#lib/assets/favicon.svg';
    import Icon from "@iconify/svelte";
    import "../app.css";
    import { onMount } from 'svelte';
    
    let { children } = $props();

    // Estado para controlar si la página sigue cargando
    let isLoading = $state(true);

    onMount(() => {
        // Si la página ya cargó por completo
        if (document.readyState === 'complete') {
            isLoading = false;
        } else {
            // Esperar a que carguen todas las imágenes y recursos de la ventana
            window.addEventListener('load', () => {
                isLoading = false;
            });
        }
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{#if isLoading}
    <!-- Pantalla de carga (Preloader) con la bolita/spinner -->
    <div class="fixed inset-0 z-50 bg-[#EBF3FF] flex flex-col items-center justify-center transition-opacity duration-500">
        <div class="flex flex-col items-center gap-4">
            <!-- Bolita / Spinner animado -->
            <div class="w-10 h-10 border-4 border-slate-300 border-t-[#0039C6] rounded-full animate-spin"></div>
            <p class="uppercase font-plusjack text-xs tracking-widest text-[#0039C6] font-bold">Cargando Portafolio...</p>
        </div>
    </div>
{/if}

<header class="flex justify-between px-10 py-5 sticky top-0 bg-white/80 backdrop-blur-md z-50">
    <div>
        <p class="uppercase font-medium text-zinc-700 text-xs">Yuleidy Amaya - Portafolio</p>
    </div>
    <div class="flex gap-10 font-medium text-zinc-700 text-xs">
      <a href="#inicio" class="uppercase hover:text-[#004CFF] transition-colors duration-200">INICIO</a>
      <a href="#sobre-mi" class="uppercase hover:text-[#004CFF] transition-colors duration-200">SOBRE MÍ</a>
      <a href="#proyectos" class="uppercase hover:text-[#004CFF] transition-colors duration-200">PROYECTOS</a>
      <a href="#contacto" class="uppercase hover:text-[#004CFF] transition-colors duration-200">CONTACTO</a>
    </div>
</header>

{@render children()}

<footer class="bg-blue-600 text-white px-15 py-6 flex flex-col gap-8">
    <!-- Parte superior -->
    <div class="flex justify-between items-center">
        <div class="flex flex-col gap-2">
            <p class="font-text-2 font-playfair font-bold">Yuleidy Amaya</p>
            <p class="text-xs font-plusjack font-light">Diseño visual. Dirección de Arte e identidad de marca</p>
        </div>

        <div class="flex justify-end gap-6 font-plusjack font-light text-xs">
            <a href="#inicio" class="uppercase hover:text-slate-200 transition-colors duration-200">INICIO</a>
            <span>•</span>
            <a href="#sobre-mi" class="uppercase hover:text-slate-200 transition-colors duration-200">SOBRE MÍ</a>
            <span>•</span>
            <a href="#proyectos" class="uppercase hover:text-slate-200 transition-colors duration-200">PROYECTOS</a>
            <span>•</span>
            <a href="#contacto" class="uppercase hover:text-slate-200 transition-colors duration-200">CONTACTO</a>
        </div>
    </div>
<hr class="border-blue-400 opacity-40 my-2">
    <!-- Parte Inferior -->
    <div class="flex justify-between items-center">
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