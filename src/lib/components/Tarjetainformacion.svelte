
<script>
  let { titulo, descripcion, imagen } = $props();
</script>

<div class="bg-white p-6 w-[560px] h-[512px]">
  <h2>{titulo}</h2>
<p>{descripcion}</p>
<img src={imagen} alt={titulo}>
</div>
