<script>
  let { titulo, descripcion, imagen } = $props();
</script>

<div class="bg-white p-6 ">
  <h2>{titulo}</h2>
<img src={imagen} alt={titulo}>
<p>{descripcion}</p>
</div>
