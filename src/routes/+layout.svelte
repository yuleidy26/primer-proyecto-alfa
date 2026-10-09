<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
import Icon from "@iconify/svelte";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
    <div>
        <p>Yuleidy Amaya - Portafolio</p>
    </div>
    <div>
      <a href="#Inicio">Inicio</a>
       <a href="#Sobre-mi">Sobre mi</a>
        <a href="#Proyectos">Proyectos</a>
         <a href="#Contacto">contacto</a>
    </div>
</header>


{@render children()}

<footer>
    <!-- Parte superior -->
    <div>
        <div>
            <p>Yuleidy Amaya</p>
            <p>Diseño visual. Dirección de Arte e identidad de marca</p>
        </div>

        <div>
            <a href="#Inicio">Inicio</a>
            <a href="#Sobre-mi">Sobre mí</a>
            <a href="#Proyectos">Proyectos</a>
            <a href="#Contacto">Contacto</a>
        </div>
    </div>

    <!-- Parte Inferior -->
    <div>
        <div>sfs© 2026 Yuleidy Amaya. Todos los derechos reservados.</div>

        <div>
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
