<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
import Icon from "@iconify/svelte";
import "../app.css";
	let { children } = $props();
    
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="flex justify-between px-10 py-5">
    <div>
        <p class="uppercase font-medium text-zinc-700 text-xs">Yuleidy Amaya - Portafolio</p>
    </div>
    <div class="flex gap-10 uppercase font-medium text-zinc-700 text-xs">
      <a href="#Inicio">Inicio</a>
       <a href="#sobre-mi">SOBRE MÍ</a>
        <a href="#Proyectos">Proyectos</a>
         <a href="#Contacto">Contacto</a>
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

        <div class="flex justify-end gap-6 uppercase font-plusjack font-light text-xs">
            <a href="#Inicio">Inicio</a>
            <span>•</span>
            <a href="#Sobre-mi">Sobre mí</a>
            <span>•</span>
            <a href="#Proyectos">Proyectos</a>
            <span>•</span>
            <a href="#Contacto">Contacto</a>
        </div>
    </div>
<hr class="border-blue-400 opacity-40 my-2">
    <!-- Parte Inferior -->
    <div class="flex justify-between items-center">
        <div class="text-xs font-plusjack font-light">©2026 Yuleidy Amaya. Todos los derechos reservados.</div>

        <div class="flex items-center gap-4">
            <a href="https://www.instagram.com/artby_yul/">
                <Icon icon="akar-icons:instagram-fill" width="32" />
            </a>
            <a href="https://www.behance.net/yuleidyamaya">
                <Icon icon="akar-icons:behance-fill" width="32" />
            </a>
            <a href="https://wa.me/1234567890">
                <Icon icon="akar-icons:whatsapp-fill" width="32" />

            </a>
        </div>
    </div>
</footer>
