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
