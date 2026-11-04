<script>
  import Tarjetainformacion from '#lib/components/Tarjetainformacion.svelte';

  const tarjetas = [
    {
      subtitulo: "SISTEMA VISUAL",
      titulo: 'Versiones & Adaptabilidad',
      descripcion: 'Desarrollo del logotipo y sus variantes cromáticas para garantizar una presencia visual limpia y funcional. El diseño está optimizado para adaptarse con claridad a formatos cuadrados de redes sociales, fotos de perfil y piezas promocionales impresas.',
      imagen: '/GUAOptimizado.webp'
    },
    {
      subtitulo: "APLICACIÓN REAL DE MARCA",
      titulo: 'Merchandising & Material Publicitario',
      descripcion: 'Aplicación de la identidad gráfica en artículos corporativos y prendas de vestir (bordado de marca en gorra), demostrando la versatilidad de la paleta cromática naranja y el isotipo en medios físicos táctiles.',
      imagen: '/guaoptimizada.webp'
    }
  ];
</script>

<!-- Proyecto 1 -->
<section  id="PROYECTOS"  class="bg-[#FFF4ED] text-slate-900 px-5 sm:px-8 lg:px-12 py-16 md:py-24">

  <!-- Encabezado superior -->
  <div class="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10 md:mb-16">
    <!-- Título principal -->
    <div>
      <div class="uppercase text-[#B34700] font-bold text-xs tracking-wider mb-2">
        <p>PROYECTO 01 / IDENTIDAD CORPORATIVA & AUDIOVISUAL</p>
      </div>
      <div class="text-[#1B1B1F] font-playfair font-semibold text-3xl sm:text-4xl lg:text-6xl leading-[1.1]">
        <h1>GUAO — Lenguaje  Dinámico <br class="hidden sm:block"> & Audiovisual</h1>
      </div>
    </div>

    <!-- Metadatos de entrega -->
    <div class="text-xs text-left sm:text-right flex flex-col items-start sm:items-end">
      <p class="text-[#645D58] font-bold mb-1">ENTREGA: 2026</p>
      <p class="text-[#1B1B1F] font-medium max-w-[220px]">Isotipo • Logotipo • Paleta Cromática • Aplicaciones de Marca</p>
    </div>
  </div>

  <!-- Contenedor principal de contenido (Tarjeta blanca) -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 bg-white p-5 sm:p-8 md:p-12 shadow-sm items-center mb-10">
    
    <!-- Columna izquierda: Laptop con marco de ventana y los 3 puntos -->
    <div class="w-full rounded-lg overflow-hidden shadow-lg bg-[#111111]">
      <!-- Barra superior estilo ventana con 3 botones -->
      <div class="bg-[#1e1e1e] px-4 py-3 flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      </div>
      <!-- Imagen de la laptop -->
      <img src="Scene-_8.webp" alt="computadora" class="w-full h-auto object-cover rounded-lg">
    </div>
    
    <!-- Columna derecha: Textos y paleta -->
    <div class="flex flex-col gap-5">
      <p class="uppercase text-[#B34700] font-bold text-xs tracking-wider">IDENTIDAD & PROPÓSITO DE MARCA</p>

      <h2 class="text-[#1B1B1F] font-playfair text-2xl sm:text-3xl md:text-4xl leading-snug font-normal">
        La identidad de Guao nace del dinamismo, la creatividad y las ganas de conectar.
      </h2>

      <p class="text-[#4A4542] text-sm md:text-base leading-relaxed">
        Guao es una marca enfocada en la creación de ideas y edición de video para emprendedores y marcas personales. El objetivo principal del proyecto fue diseñar una identidad visual que reflejara su esencia: creativa, cercana y empática, utilizando un sistema gráfico dinámico que resalta la energía y conexión del contenido audiovisual.
      </p>

      <p class="uppercase text-[#645D58] font-bold text-xs tracking-wider mt-2">
        PALETA CROMÁTICA OFICIAL
      </p>

      <!-- Paleta de colores simétrica en 4 columnas con sus textos -->
      <div class="grid grid-cols-4 w-full h-12 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
        <div class="bg-[#FF5500] flex items-center justify-center text-[8px] sm:text-[10px] text-white font-mono font-bold">#FF5500</div>
        <div class="bg-[#F7E9C3] flex items-center justify-center text-[8px] sm:text-[10px] text-[#645D58] font-mono font-bold">#F7E9C3</div>
        <div class="bg-white flex items-center justify-center text-[8px] sm:text-[10px] text-slate-400 font-mono font-bold border-x border-slate-200">#FFFFFF</div>
        <div class="bg-[#458FEA] flex items-center justify-center text-[8px] sm:text-[10px] text-white font-mono font-bold">#458FEA</div>
      </div>

    </div>

  </div>

  <!-- Cuadro verde 3: Tarjetas dinámicas al final -->
 <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
  {#each tarjetas as tarjeta}
    <div>
      <Tarjetainformacion
        subtitulo={tarjeta.subtitulo}
        titulo={tarjeta.titulo}
        descripcion={tarjeta.descripcion}
        imagen={tarjeta.imagen}
      />
    </div>
  {/each}
</div>

</section>

<!-- Proyecto 2: Notion — Caso de Estudio -->
<section class="bg-[#F3F4F6] text-slate-900 px-5 sm:px-8 lg:px-12 py-16 md:py-24">

  <!-- Encabezado superior -->
  <div class="flex flex-col lg:flex-row justify-between items-start mb-10 md:mb-16 gap-6">
    <!-- Título principal -->
    <div>
      <div class="uppercase text-[#0039C6] font-plusjack font-bold text-xs tracking-wider mb-3">
        <p>PROYECTO 02 / CASO DE ESTUDIO CONCEPTUAL</p>
      </div>
      <h1 class="text-[#1B1B1F] font-playfair font-semibold text-3xl sm:text-4xl lg:text-6xl leading-[1.1]">
        NOTION — Caso de Estudio: Papelería <br class="hidden sm:block"> Corporativa
      </h1>
    </div>

    <!-- Metadatos académicos (derecha) -->
    <div class="text-xs font-plusjack text-left lg:text-right flex flex-col items-start lg:items-end">
      <p class="text-[#645D58] font-bold mb-1 uppercase tracking-wider">PROYECTO ACADÉMICO</p>
      <p class="text-[#1B1B1F] font-medium max-w-[260px] leading-relaxed">
        Extensión de Marca • Sistema de Papelería • Medios Impresos
      </p>
    </div>
  </div>

  <!-- Contenedor principal de la sección (Grid de 12 columnas) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
    
    <!-- Columna Izquierda: Imagen principal grande (Ocupa 7 columnas) -->
    <div class="lg:col-span-7 flex flex-col gap-6">
      <div class="relative w-full rounded-lg overflow-hidden shadow-md bg-white">
        
        <!-- ESPACIO PARA LA FOTO PRINCIPAL -->
        <img 
          src="Papelería-minimalista-de-Notion-sobre-madera.webp" 
          alt="Notion - Caso de Estudio Papelería Corporativa" 
          class="w-full h-[280px] sm:h-[460px] md:h-[520px] object-cover object-center rounded-lg"
        >

        <!-- Etiqueta flotante inferior izquierda dentro de la foto -->
        <div class="absolute bottom-6 left-6 bg-[#1B1B1F]/90 backdrop-blur-xs text-white px-4 py-2 text-[11px] font-plusjack uppercase tracking-widest font-semibold rounded-xs">
          SET CORPORATIVO COMPLETO
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Tarjetas, Línea divisoria y Objetivo del caso (Ocupa 5 columnas) -->
    <div class="lg:col-span-5 flex flex-col gap-6">
      
      <!-- Tarjeta 01 (Puntas cuadradas) -->
      <div class="bg-white p-6 md:p-8 border border-slate-200/80 shadow-xs flex flex-col gap-3">
        <p class="uppercase text-[#0039C6] font-plusjack font-bold text-xs tracking-wider">
          01 / TARJETAS DE PRESENTACIÓN
        </p>
        <h2 class="text-[#1B1B1F] font-playfair text-2xl md:text-3xl font-normal leading-snug">
          Diagramación & Jerarquía Tipográfica
        </h2>
        <p class="font-plusjack text-sm text-[#4A4542] leading-relaxed">
          Aplicación de la identidad visual de Notion en formato reducido. Se trabajó con una estructura reticular limpia y jerarquía tipográfica rigurosa para optimizar la legibilidad y mantener el estilo minimalista de la marca.
        </p>
      </div>

      <!-- Tarjeta 02 (Puntas cuadradas) -->
      <div class="bg-white p-6 md:p-8 border border-slate-200/80 shadow-xs flex flex-col gap-3">
        <p class="uppercase text-[#0039C6] font-plusjack font-bold text-xs tracking-wider">
          02 / SISTEMA DE PAPELERÍA
        </p>
        <h2 class="text-[#1B1B1F] font-playfair text-2xl md:text-3xl font-normal leading-snug">
          Coherencia de Marca
        </h2>
        <p class="font-plusjack text-sm text-[#4A4542] leading-relaxed">
          Diseño de carpeta corporativa y hojas membretadas respetando la línea gráfica oficial de Notion. Enfocado en la consistencia del sistema visual y la correcta preparación de archivos para impresión digital.
        </p>
      </div>

      <!-- Línea de separación gris justo debajo de las tarjetas blancas -->
      <hr class="border-slate-300 my-1">

      <!-- Texto inferior: Objetivo del caso -->
      <div class="font-plusjack">
        <p class="text-xs font-bold uppercase tracking-wider text-[#1B1B1F] mb-1">
          OBJETIVO DEL CASO:
        </p>
        <p class="text-xs sm:text-sm text-[#4A4542] leading-relaxed">
          Ejercicio práctico orientado a aplicar y adaptar la identidad visual de Notion a soportes físicos (tarjetas de presentación, carpeta y hoja membretada), garantizando coherencia visual y precisión en la diagramación.
        </p>
      </div>

    </div>

  </div>

</section>

<!-- Proyecto 3: Veltrix — Síntesis Geométrica & Imagotipo -->
<section class="bg-[#EBF3FF] text-slate-900 px-5 sm:px-8 lg:px-12 py-16 md:py-24">

  <!-- Encabezado superior -->
  <div class="flex flex-col lg:flex-row justify-between items-start mb-10 md:mb-16 gap-6">
    <!-- Título principal -->
    <div>
      <div class="uppercase text-[#0039C6] font-plusjack font-bold text-xs tracking-wider mb-3">
        <p>PROYECTO 03 / VECTORIZACIÓN & SÍNTESIS GRÁFICA</p>
      </div>
      <h1 class="text-[#1B1B1F] font-playfair font-semibold text-3xl sm:text-4xl lg:text-6xl leading-[1.1]">
        VELTRIX — Síntesis  Geométrica <br class="hidden sm:block"> & Imagotipo
      </h1>
    </div>

    <!-- Metadatos académicos (derecha) -->
    <div class="text-xs font-plusjack text-left lg:text-right flex flex-col items-start lg:items-end">
      <p class="text-[#645D58] font-bold mb-1 uppercase tracking-wider">ENTORNO: ADOBE ILLUSTRATOR</p>
      <p class="text-[#1B1B1F] font-medium max-w-[260px] leading-relaxed">
        Bocetaje Manual • Síntesis Vectorial • Retícula • Biomórfica
      </p>
    </div>
  </div>

  <!-- Contenedor principal de la sección (Grid de 12 columnas) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
    
    <!-- Columna Izquierda: Tarjeta del conejo (Imagen grande y centrada simétricamente) -->
    <div class="lg:col-span-7 bg-white p-5 sm:p-6 md:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
      <div>
        <!-- Subtítulo de la tarjeta superior -->
        <div class="flex justify-between items-center pb-4 border-b border-slate-100 mb-6 font-plusjack">
          <span class="text-[11px] uppercase font-bold tracking-widest text-[#0039C6]">
            REPRESENTACIÓN TOPOLÓGICA DE LA LIEBRE
          </span>
         

        </div>

        <!-- FOTO IZQUIERDA (Grande y perfectamente centrada) -->
        <div class="w-full flex-1 flex items-center justify-center my-4">
          <img 
            src="Vectorización-Conejo_Mesa-de-trabajo-1.webp" 
            alt="Representación topológica de la liebre - Veltrix" 
            class="w-full h-auto max-h-[460px] object-contain rounded-lg"
          >
        </div>
      </div>

      <!-- Pie de foto o nota inferior -->
      <div class="pt-6 border-t border-slate-100 font-plusjack">
        <p class="text-xs text-[#4A4542] leading-relaxed">
          Versiones optimizadas para fondo claro, fondo oscuro y aplicación sobre color corporativo puro.
        </p>
      </div>
    </div>

    <!-- Columna Derecha: Gorra y Tarjeta de información (Intactas) -->
    <div class="lg:col-span-5 flex flex-col gap-6">
      
      <!-- Contenedor de la foto de la gorra -->
      <div class="bg-white border border-slate-200/80 shadow-sm overflow-hidden w-full h-[260px] sm:h-[300px] rounded-lg">
        <img 
          src="gorrac.webp" 
          alt="Aplicación de marca en gorra Veltrix" 
          class="w-full h-full object-cover object-center rounded-lg"
        >
      </div>

      <!-- Tarjeta 02 / Reducción al esencial -->
      <div class="bg-white p-6 md:p-8 border border-slate-200/80 shadow-xs flex flex-col gap-3">
        <p class="uppercase text-[#0039C6] font-plusjack font-bold text-xs tracking-wider">
          REDUCCIÓN AL ESENCIAL
        </p>
        <h2 class="text-[#1B1B1F] font-playfair text-2xl md:text-3xl font-normal leading-snug">
          Estructura geométrica para una identidad versátil.
        </h2>
        <p class="font-plusjack text-sm text-[#4A4542] leading-relaxed">
          Veltrix es un imagotipo basado en la síntesis gráfica de un conejo. El proceso consistió en transformar un boceto hecho a mano en un imagotipo geométrico estilizado utilizando líneas rectas. La propuesta busca transmitir modernidad y alta adaptabilidad, definiendo versiones vertical, horizontal, color corporativo, positivo y negativo para su aplicación en distintos soportes físicos y digitales.
        </p>
      </div>

    </div>

  </div>

</section>

<!-- Proyecto 4: Publicidad Digital & Social Media -->
<section class="bg-[#F9FAFB] text-slate-900 px-5 sm:px-8 lg:px-12 py-16 md:py-24">

  <!-- Encabezado superior -->
  <div class="flex flex-col lg:flex-row justify-between items-start mb-10 md:mb-16 gap-6">
    <!-- Título principal -->
    <div>
      <div class="uppercase text-[#0039C6] font-plusjack font-bold text-xs tracking-wider mb-3">
        <p>PROYECTO 04 / PUBLICIDAD DIGITAL & SOCIAL MEDIA</p>
      </div>
      <h1 class="text-[#1B1B1F] font-playfair font-semibold text-3xl sm:text-4xl lg:text-6xl leading-[1.1]">
        Publicidad Digital — 
        Piezas Comerciales <br class="hidden sm:block"> & 
        Redes Sociales
      </h1>
    </div>

    <!-- Metadatos académicos / formatos (derecha) -->
    <div class="text-xs font-plusjack text-left lg:text-right flex flex-col items-start lg:items-end">
      <p class="text-[#645D58] font-bold mb-1 uppercase tracking-wider">FORMATOS: FEED 1:1 & STORIES 9:16</p>
      <p class="text-[#1B1B1F] font-medium max-w-[260px] leading-relaxed">
        CAMPAÑAS: Sony Audio & Guao Creativo
      </p>
    </div>
  </div>

  <!-- Contenedor principal de la sección (Grid de 12 columnas) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
    
    <!-- Columna 1: Descripción, Impacto & Viñetas (Ocupa 4 columnas, con mejor separación y tamaño ajustado) -->
    <div class="lg:col-span-4 flex flex-col gap-8 font-plusjack">
      <p class="text-sm md:text-base text-[#4A4542] leading-relaxed">
        Diseño de piezas publicitarias para redes sociales enfocadas en marcas como Sony y Guao. La misión principal fue crear contenidos comerciales atractivos equilibrando la fotografía de producto con la información clave de venta: especificaciones, promociones y llamadas a la acción inmediatas.
      </p>

      <!-- Bloque destacado con borde izquierdo azul -->
      <div class="pl-4 border-l-2 border-[#0039C6] flex flex-col gap-2 py-1">
        <p class="text-sm font-bold uppercase tracking-wider text-[#0039C6]">
          IMPACTO & CONVERSIÓN
        </p>
        <p class="text-sm text-[#645D58] leading-relaxed">
          Jerarquía visual optimizada para la conversión comercial en redes, combinando claridad de producto con llamados a la acción inmediatos.
        </p>
      </div>

      <!-- Lista de puntos de verificación -->
      <div class="flex flex-col gap-4 pt-2">
        <div class="flex items-start gap-3">
          <span class="text-[#0039C6] text-sm font-bold mt-0.5">✓</span>
          <p class="text-sm text-[#1B1B1F] font-medium leading-tight">
            Composición tipográfica legible en pantallas móviles
          </p>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-[#0039C6] text-sm font-bold mt-0.5">✓</span>
          <p class="text-sm text-[#1B1B1F] font-medium leading-tight">
            Saturación cromática deliberada para retención visual
          </p>
        </div>
      </div>
    </div>

    <!-- Columna 2: Sony WH-1000XM6 Feed 1:1 (Ocupa 4 columnas) -->
    <div class="lg:col-span-4 flex flex-col gap-4">
      <div class="relative w-full max-w-[340px] mx-auto aspect-square bg-[#1B1B1F] overflow-hidden shadow-sm rounded-lg">
        <!-- FOTO DE SONY (FEED 1:1) - Ocupando todo el contenedor sin márgenes negros -->
        <img 
          src="Yuleidy-Amaya-Post-de-redes-sociales.webp" 
          alt="Sony WH-1000XM6 Post Promocional" 
          class="w-full h-full object-cover object-center rounded-lg"
        >
        <!-- Badge superior derecho dentro de la foto -->
        <div class="absolute top-3 right-3 bg-[#1B1B1F]/80 backdrop-blur-xs text-white px-2 py-0.5 text-[9px] font-plusjack uppercase tracking-widest font-semibold rounded-xs z-10">
          FEED 1:1
        </div>
      </div>

      <!-- Pie explicativo de Sony -->
      <div class="flex flex-col gap-1 font-plusjack max-w-[340px] mx-auto w-full">
        <div class="flex justify-between items-baseline">
          <h3 class="text-sm font-semibold text-[#1B1B1F]">
            Sony WH-1000XM6 Post Promocional
          </h3>
          <span class="text-xs font-bold text-[#0039C6]">1080×1080</span>
        </div>
        <p class="text-xs text-[#645D58] leading-relaxed">
          Diagramación de producto, especificaciones clave y precio de oferta.
        </p>
      </div>
    </div>

    <!-- Columna 3: Guao Post/Flyer Stories 9:16 (Ocupa 4 columnas con marco gris) -->
    <div class="lg:col-span-4 flex flex-col gap-4">
      <!-- Marco cuadrado exterior gris que contiene la pieza vertical de Guao centrada -->
      <div class="relative w-full max-w-[340px] mx-auto aspect-square bg-[#E5E7EB] overflow-hidden shadow-sm flex items-center justify-center p-3 rounded-lg">
        <!-- FOTO DE GUAO (Vertical completa sin estirar ni cortar) -->
        <img 
          src="publicidad-guaoptimizado.webp" 
          alt="Guao Post/Flyer" 
          class="h-full w-auto object-contain object-center shadow-xs rounded-lg"
        >
        <!-- Badge superior derecho dentro del marco -->
        <div class="absolute top-3 right-3 bg-[#1B1B1F]/80 backdrop-blur-xs text-white px-2 py-0.5 text-[9px] font-plusjack uppercase tracking-widest font-semibold rounded-xs z-10">
          VERTICAL 9:16
        </div>
      </div>

      <!-- Pie explicativo de Guao -->
      <div class="flex flex-col gap-1 font-plusjack max-w-[340px] mx-auto w-full">
        <div class="flex justify-between items-baseline">
          <h3 class="text-sm font-semibold text-[#1B1B1F]">
            Guao Post/Flyer
          </h3>
          <span class="text-xs font-bold text-[#D97706]">1080×1920</span>
        </div>
        <p class="text-xs text-[#645D58] leading-relaxed">
          Diseño enfocado en la captación de clientes y servicios de creación de contenido.
        </p>
      </div>
    </div>

  </div>

</section>

<!-- Proyecto 5: VOGUE — Caso de Estudio: Portada Editorial -->
<section class="bg-[#EBF3FF] text-slate-900 px-5 sm:px-8 lg:px-12 py-16 md:py-24">

  <!-- Encabezado superior -->
  <div class="flex flex-col lg:flex-row justify-between items-start mb-10 md:mb-16 gap-6">
    <!-- Título principal -->
    <div>
      <div class="uppercase text-[#0039C6] font-plusjack font-bold text-xs tracking-wider mb-3">
        <p>PROYECTO 05 / DIRECCIÓN DE ARTE EDITORIAL</p>
      </div>
      <h1 class="text-[#1B1B1F] font-playfair font-semibold text-3xl sm:text-4xl lg:text-6xl leading-[1.1]">
        VOGUE — Caso de <br class="hidden sm:block">
        Estudio: Portada Editorial
      </h1>
    </div>

    <!-- Metadatos académicos (derecha) -->
    <div class="text-xs font-plusjack text-left lg:text-right flex flex-col items-start lg:items-end">
      <p class="text-[#645D58] font-bold mb-1 uppercase tracking-wider">PROYECTO ACADÉMICO</p>
      <p class="text-[#1B1B1F] font-medium max-w-[260px] leading-relaxed">
        Diseño Editorial & Dirección de Arte
      </p>
    </div>
  </div>

  <!-- Contenedor principal de la sección (Grid de 12 columnas alineado al centro) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
    
    <!-- Columna Izquierda: Imagen de la revista a mayor escala con su sombra -->
    <div class="lg:col-span-7 flex justify-center items-center">
      <img 
        src="Revista-Yuleidy-Amaya-nuevo.webp" 
        alt="Vogue - Caso de Estudio Portada Editorial" 
        class="w-full max-w-[620px] h-auto object-contain shadow-2xl rounded-lg"
      >
    </div>

    <!-- Columna Derecha: Fichas 01, 02 y 03 (Centradas verticalmente respecto a la imagen) -->
    <div class="lg:col-span-5 flex flex-col gap-6 justify-center">
      
      <!-- Ficha 01 / Integración Visual & Profundidad -->
      <div class="bg-white p-6 md:p-7 border border-slate-200/80 shadow-xs flex flex-col gap-3 font-plusjack">
        <p class="uppercase text-[#0039C6] font-bold text-[11px] tracking-wider">
          FICHA 01 / COMPOSICIÓN & MOCKUP
        </p>
        <h2 class="text-[#1B1B1F] font-playfair text-xl md:text-2xl font-normal leading-snug">
          Integración Visual & Profundidad
        </h2>
        <p class="text-sm text-[#4A4542] leading-relaxed">
          Superposición fluida entre el personaje y la icónica cabecera de Vogue, creando un efecto tridimensional que resalta al sujeto sin perder la presencia de la marca.
        </p>
      </div>

      <!-- Ficha 02 / Estilo Editorial & Tono de Voz -->
      <div class="bg-white p-6 md:p-7 border border-slate-200/80 shadow-xs flex flex-col gap-3 font-plusjack">
        <p class="uppercase text-[#0039C6] font-bold text-[11px] tracking-wider">
          FICHA 02 / IDENTIDAD DE MARCA
        </p>
        <h2 class="text-[#1B1B1F] font-playfair text-xl md:text-2xl font-normal leading-snug">
          Estilo Editorial & Tono de Voz
        </h2>
        <p class="text-sm text-[#4A4542] leading-relaxed">
          Jerarquía tipográfica inspirada en la revista, combinando la elegancia de la alta moda con el dinamismo del deporte olímpico.
        </p>
      </div>

      <!-- Ficha 03 / Objetivo del Caso -->
      <div class="bg-white p-6 md:p-7 border border-slate-200/80 shadow-xs flex flex-col gap-3 font-plusjack">
        <p class="uppercase text-[#0039C6] font-bold text-[11px] tracking-wider">
          FICHA 03 / OBJETIVO DEL CASO
        </p>
        <h2 class="text-[#1B1B1F] font-playfair text-xl md:text-2xl font-normal leading-snug">
          Objetivo del Caso
        </h2>
        <p class="text-sm text-[#4A4542] leading-relaxed">
          Ejercicio de diseño enfocado en adaptar una marca de alto prestigio a un nuevo concepto visual, respetando de principio a fin su identidad, tipografía y estilo.
        </p>
      </div>

    </div>

  </div>

</section>
