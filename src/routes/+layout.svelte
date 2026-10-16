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
       <a href="#Sobre-mi">Sobre mí</a>
        <a href="#Proyectos">Proyectos</a>
         <a href="#Contacto">Contacto</a>
    </div>
</header>


{@render children()}

<footer class="bg-indigo-600 text-bg-indigo-600 text-white  px-5 py-5 gap-40">
    <!-- Parte superior -->
    <div>
        <div>
            <p class="flex-1 text-2 font-playfair font-bold">Yuleidy Amaya</p>
            <p class="text-xs font-plusjack font-light">Diseño visual. Dirección de Arte e identidad de marca</p>
        </div>

        <div class="flex justify-end gap-10 uppercase font-plusjack font-light text-xs">
            <a href="#Inicio">Inicio</a>
            <a href="#Sobre-mi">Sobre mí</a>
            <a href="#Proyectos">Proyectos</a>
            <a href="#Contacto">Contacto</a>
        </div>
    </div>

    <!-- Parte Inferior -->
    <div class="flex justify-between">
        <div class="text-xs font-plusjack font-light">©2026 Yuleidy Amaya. Todos los derechos reservados.</div>

        <div class="flex gap-4">
            <a href="https://www.instagram.com/artby_yul/">
                <Icon icon="akar-icons:instagram-fill" width="32" />
            </a>
            <a href="https://www.behance.net/yuleidyamaya">
                <Icon icon="akar-icons:behance-fill" width="32" />
            </a>
            <a href="https://www.linkedin.com/in/yuleidyamaya">
                <Icon icon="akar-icons:linkedin-fill" width="32" />
            </a>
            <a href="https://wa.me/1234567890">
                <Icon icon="akar-icons:whatsapp-fill" width="32" />

            </a>
        </div>
    </div>
</footer>
