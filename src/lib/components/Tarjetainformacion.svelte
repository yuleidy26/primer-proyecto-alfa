
<script>
  let { titulo, descripcion } = $props();
</script>

<div class="tarjeta-principal">
  <div class="imagen">
    <img src="/Scene-_8.webp" alt="Computadora con el logo de GUAO" />
  </div>

  <div class="informacion">
    <p class="etiqueta">IDENTIDAD Y PROPÓSITO DE MARCA</p>

    <h2>{titulo}</h2>

    <p class="descripcion">{descripcion}</p>

    <div class="paleta">
      <p>PALETA CROMÁTICA OFICIAL</p>

      <div class="colores">
        <div class="color naranja">#FF5500</div>
        <div class="color crema">#F7EFC3</div>
        <div class="color blanco">#FFFFFF</div>
        <div class="color azul">#458FEA</div>
      </div>
    </div>
  </div>
</div>

<style>
  .tarjeta-principal {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 24px;
    align-items: center;
    padding: 32px;
    background: white;
    box-shadow: 0 8px 18px #00000012;
  }

  .imagen img {
    display: block;
    width: 100%;
    height: 270px;
    object-fit: contain;
  }

  .etiqueta,
  .paleta p {
    font-size: 10px;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 26px;
    font-weight: normal;
    line-height: 1.15;
  }

  .descripcion {
    color: #555555;
    line-height: 1.6;
    font-size: 13px;
  }

  .colores {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .color {
    padding: 14px 5px;
    font-size: 8px;
    font-weight: bold;
  }

  .naranja {
    background: #ff5500;
    color: white;
  }

  .crema {
    background: #f7efc3;
  }

  .blanco {
    background: white;
    border: 1px solid #eeeeee;
  }

  .azul {
    background: #458fea;
    color: white;
  }

  @media (max-width: 650px) {
    .tarjeta-principal {
      grid-template-columns: 1fr;
      padding: 20px;
    }
  }
</style>
