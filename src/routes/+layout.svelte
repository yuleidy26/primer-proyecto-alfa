<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';

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
            <a href="/">Inicio</a>
            <a href="/about-me">Sobre mí</a>
            <a href="/project">Proyectos</a>
            <a href="/contact">Contacto</a>
        </div>
    </div>

    <!-- Parte Inferior -->
    <div>
        <div>sfs© 2026 Yuleidy Amaya. Todos los derechos reservados.</div>

        <div>
            <a href="https://www.instagram.com/artby_yul/">
                <img src="" alt="Instagram">
            </a>
            <a href="https://www.behance.net/yuleidyamaya">
                <img src="" alt="Behance">
            </a>
            <a href="https://www.linkedin.com/in/yuleidyamaya">
                <img src="" alt="linkedin">
            </a>
            <a href="https://wa.me/1234567890">
                <img src="" alt="whatsapp">
            </a>
        </div>
    </div>
</footer>
