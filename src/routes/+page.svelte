<script>
import Tarjetainformacion from '#lib/components/Tarjetainformacion.svelte';
  import Formulario from '#lib/components/Formulario.svelte';
  import Icon from '@iconify/svelte';

  const tarjetas = [
    {
      subtitulo: "SISTEMA VISUAL",
      titulo: 'Versiones & Adaptabilidad',
      descripcion: 'Desarrollo del logotipo y sus variantes cromáticas para garantizar una presencia visual limpia y funcional. El diseño está optimizado para adaptarse con claridad a formatos cuadrados de redes sociales, fotos de perfil y piezas promocionales impresas.',
      imagen: '/Captura de pantalla.png'
    },
    {
      subtitulo: "APLICACIÓN REAL DE MARCA",
      titulo: 'Merchandising & Material Publicitario',
      descripcion: 'Aplicación de la identidad gráfica en artículos corporativos y prendas de vestir (bordado de marca en gorra), demostrando la versatilidad de la paleta cromática naranja y el isotipo en medios físicos táctiles.',
      imagen: '/Yuleidy-Amaya-Mockup_.webp'
    }
  ];
</script>


<section class="relative bg-blue-600 text-white px-12 py-12 min-h-[85vh] flex flex-col justify-between overflow-hidden">

<!-- Texto Gigante de Fondo (Marca de Agua) -->
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
    <span class="text-[22vw] font-bold text-blue-500/30 tracking-widest font-playfair">
      2026
    </span>
  </div>

    <div class="flex justify-end text-xs tracking-wider z-10">
        <p>VALENCIA, VENEZUELA</p>
    </div>

  <!-- Bloque Central (3 Columnas) -->
  <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-8 my-auto z-10">
    
    <!-- Columna 1: Título y Bajada -->
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl lg:text-5xl font-playfair font-normal leading-tight">
        Diseño Gráfico e Identidad Visual
      </h1>
      <p class="text-xs font-plusjack font-light max-w-sm leading-relaxed text-blue-100">
        Diseño piezas con propósito y construyo universos de marca sólidos, combinando creatividad, estrategia y coherencia en cada detalle
      </p>
    </div>

      <div class="flex justify-center">
      <div class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-lg">
        <img src="/logo.webp" alt="Avatar de Yuleidy Amaya" class="w-full h-full object-cover" />
      </div>
    </div>

        <div class="flex-1 text-8xl text-right font-playfair font-bold">
            <p>YULEIDY <br> AMAYA</p>
        </div>

    </div>

    <div class="z-10 mt-6">
    <a href="#proyectos" class="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium hover:underline">
      DESCUBRIR PROYECTOS <span class="text-base">↓</span>
    </a>
  </div>

</section>

<!-- Sección Sobre Mí -->
<section class="bg-[#FCF8FE] text-slate-900 px-12 py-24">
    <!-- Cuadro superior naranja -->
     <div class="max-w-5xl flex flex-col gap-6 ">

       <div class="text-[#0039C6] font-plusjack font-bold text-xs tracking-wider"> SOBRE MÍ</div>

       <!-- Título Principal -->
    <h2 class="text-5xl lg:text-6xl font-playfair font-semibold leading-tight">
      Filosofía de Diseño & <span class="text-[#0039C6] italic">Enfoque</span><br> de Marca
    </h2>

       <div class="font-plusjack leading-relaxed text-[#434656] text-sm md:text-base max-w-3xl">
         <p>Me apasiona el diseño de identidades visuales, buscando siempre el equilibrio entre lo funcional y <br>
            lo creativo. Mi objetivo es transformar conceptos en piezas gráficas estratégicas que potencien la <br>
            presencia de una marca tanto en plataformas digitales como en medios impresos tradicionales.</p>
        </div>

     </div>

    <!-- cuadro inferior naranja (contenedor padre) -->
     <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

        <!-- cuadro azul izquierdo -->
        <div class="flex flex-col gap-4">
        <!-- cuadro verde 1 titulo-->
         <h3 class="text-[#0039C6] font-plusjack font-bold text-xs tracking-wider border-b border-slate-200 pb-4">
            SOFTWARE & HERRAMIENTAS DE DISEÑO
        </h3>

        <!-- cuadro verde 2 programas -->
        <div class="flex flex-col gap-4"> 
            
            <!-- cuadro rosa 1 ilustraitor -->

            <div class="flex items-center gap-4 py-4 border-b border-slate-200">

                <div>
                    <Icon icon="basil:adobe-illustrator-solid" width="36" class="text-amber-700" />
                </div> 

                <div>
                    <p class="font-semibold text-sm">Adobe Illustrator</p>
                    <p class="text-xs text-slate-500 font-plusjack">DISEÑO VECTORIAL & MARCAS</p>
                </div>

            </div>

            <!-- cuadro rosa 2 photoshop -->

            <div class="flex items-center gap-4 py-4 border-b border-slate-200">

                <div>
                    <Icon icon="basil:adobe-photoshop-solid" width="36" class="text-amber-700" />
                </div> 

                <div>
                    <p class="font-semibold text-sm">Adobe Photoshop</p>
                    <p class="text-xs text-slate-500 font-plusjack">EDICIÓN & FOTOMONTAJE</p>
                </div>

            </div>


            <!-- cuadro rosa 3 canva -->

            <div class="flex items-center gap-4 py-4 border-b border-slate-200">

                <div>
                    <Icon icon="thesvg-color:canva" width="36"/>
                </div> 

                <div>
                    <p class="font-semibold text-sm">Canva</p>
                    <p class="text-xs text-slate-500 font-plusjack">PIEZAS DIGITALES & REDES</p>
                </div>

            </div>

         </div>
      
        </div>

        <!-- cuadro azul derecho -->
          <div class="flex flex-col gap-4">
         <!-- cuadro verde 1 -->
            <h3 class="text-[#0039C6] font-plusjack font-bold text-xs tracking-wider border-b border-slate-200 pb-4">
                FORMACIÓN Y CERTIFICACIONES
                
            </h3>
            <!-- cuadro verde 2 -->
             <div class="flex flex-col gap-4"> 

                <!-- cuadro rosa 1 -->
                 <div class="flex justify-between items-start py-4 border-b border-slate-200">

                 <div>
                 <p class="font-semibold text-sm">Curso Premium de Diseño Gráfico</p>
                 <p class="text-xs text-slate-500 font-plusjack">INSTITUTO ALFA CARABOBO</p>
                </div>

                <span class="text-xs font-bold text-blue-600">2026</span>

                </div>

                 <!-- cuadro rosa 2 -->
                 
                <div class="flex justify-between items-start py-4 border-b border-slate-200"> 

                  <div> 
                    <p class="font-semibold text-sm">Técnicas de Ilustración</p>
                    <p class="text-xs text-slate-500 font-plusjack">INSTITUTO ALFA CARABOBO</p>
                  </div>
                    <span class="text-xs font-bold text-blue-600">2026</span>
                </div>

                 <!-- cuadro rosa 3-->
                 
                <div class="flex justify-between items-start py-4 border-b border-slate-200">  

                  <div>
                 <p class="font-semibold text-sm">Diseño Gráfico</p>
                    <p class="text-xs text-slate-500 font-plusjack">INSTITUTO ALFA CARABOBO</p>
                  </div>

                    <span class="text-xs font-bold text-blue-600">2026</span>

                </div>

            </div>

        </div>
           

     </div>

    
</section>


<!-- Proyecto 1 -->
<section class="bg-[#FFF4ED] text-slate-900 px-12 py-24">

  <!-- Encabezado superior -->
  <div class="flex justify-between items-start mb-16">
    <!-- Título principal -->
    <div>
      <div class="uppercase text-[#B34700] font-bold text-xs tracking-wider mb-2">
        <p>PROYECTO 01 / IDENTIDAD CORPORATIVA & AUDIOVISUAL</p>
      </div>
      <div class="text-[#1B1B1F] font-playfair font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
        <h1>GUAO — Lenguaje  Dinámico <br> & Audiovisual</h1>
      </div>
    </div>

    <!-- Metadatos de entrega -->
    <div class="text-xs text-right flex flex-col items-end">
      <p class="text-[#645D58] font-bold mb-1">ENTREGA: 2026</p>
      <p class="text-[#1B1B1F] font-medium max-w-[220px]">Isotipo • Logotipo • Paleta Cromática • Aplicaciones de Marca</p>
    </div>
  </div>

  <!-- Contenedor principal de contenido (Tarjeta blanca) -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-8 md:p-12 shadow-sm items-center mb-10">
    
    <!-- Columna izquierda: Laptop con marco de ventana y los 3 puntos -->
    <div class="w-full rounded-lg overflow-hidden shadow-lg bg-[#111111]">
      <!-- Barra superior estilo ventana con 3 botones -->
      <div class="bg-[#1e1e1e] px-4 py-3 flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      </div>
      <!-- Imagen de la laptop -->
      <img src="Scene-_8.webp" alt="computadora" class="w-full h-auto object-cover">
    </div>
    
    <!-- Columna derecha: Textos y paleta -->
    <div class="flex flex-col gap-5">
      <p class="uppercase text-[#B34700] font-bold text-xs tracking-wider">IDENTIDAD & PROPÓSITO DE MARCA</p>

      <h2 class="text-[#1B1B1F] font-playfair text-3xl md:text-4xl leading-snug font-normal">
        La identidad de Guao nace del dinamismo, la creatividad y las ganas de conectar.
      </h2>

      <p class="text-[#4A4542] text-sm md:text-base leading-relaxed">
        Guao es una marca enfocada en la creación de ideas y edición de video para emprendedores y marcas personales. El objetivo principal del proyecto fue diseñar una identidad visual que reflejara su esencia: creativa, cercana y empática, utilizando un sistema gráfico dinámico que resalta la energía y conexión del contenido audiovisual.
      </p>

      <p class="uppercase text-[#645D58] font-bold text-xs tracking-wider mt-2">
        PALETA CROMÁTICA OFICIAL
      </p>

      <!-- Paleta de colores simétrica en 4 columnas con sus textos -->
      <div class="grid grid-cols-4 w-full h-12 rounded-md overflow-hidden border border-slate-200 shadow-sm">
        <div class="bg-[#FF5500] flex items-center justify-center text-[10px] text-white font-mono font-bold">#FF5500</div>
        <div class="bg-[#F7E9C3] flex items-center justify-center text-[10px] text-[#645D58] font-mono font-bold">#F7E9C3</div>
        <div class="bg-white flex items-center justify-center text-[10px] text-slate-400 font-mono font-bold border-x border-slate-200">#FFFFFF</div>
        <div class="bg-[#458FEA] flex items-center justify-center text-[10px] text-white font-mono font-bold">#458FEA</div>
      </div>

    </div>

  </div>

  <!-- Cuadro verde 3: Tarjetas dinámicas al final -->
 <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
<section class="bg-[#F3F4F6] text-slate-900 px-6 md:px-12 py-20 md:py-24">

  <!-- Encabezado superior -->
  <div class="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6">
    <!-- Título principal -->
    <div>
      <div class="uppercase text-[#0039C6] font-plusjack font-bold text-xs tracking-wider mb-3">
        <p>PROYECTO 02 / CASO DE ESTUDIO CONCEPTUAL</p>
      </div>
      <h1 class="text-[#1B1B1F] font-playfair font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
        NOTION — Caso de Estudio: Papelería <br> Corporativa
      </h1>
    </div>

    <!-- Metadatos académicos (derecha) -->
    <div class="text-xs font-plusjack text-right flex flex-col lg:items-end">
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
      <div class="relative w-full rounded-xl overflow-hidden shadow-md bg-white">
        
        <!-- ESPACIO PARA LA FOTO PRINCIPAL -->
        <img 
          src="Papelería-minimalista-de-Notion-sobre-madera.webp" 
          alt="Notion - Caso de Estudio Papelería Corporativa" 
          class="w-full h-[380px] sm:h-[460px] md:h-[520px] object-cover object-center"
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
<section class="bg-[#EBF3FF] text-slate-900 px-6 md:px-12 py-20 md:py-24">

  <!-- Encabezado superior -->
  <div class="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6">
    <!-- Título principal -->
    <div>
      <div class="uppercase text-[#0039C6] font-plusjack font-bold text-xs tracking-wider mb-3">
        <p>PROYECTO 03 / VECTORIZACIÓN & SÍNTESIS GRÁFICA</p>
      </div>
      <h1 class="text-[#1B1B1F] font-playfair font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
        VELTRIX — Síntesis <br> Geométrica & Imagotipo
      </h1>
    </div>

    <!-- Metadatos académicos (derecha) -->
    <div class="text-xs font-plusjack text-right flex flex-col lg:items-end">
      <p class="text-[#645D58] font-bold mb-1 uppercase tracking-wider">ENTORNO: ADOBE ILLUSTRATOR</p>
      <p class="text-[#1B1B1F] font-medium max-w-[260px] leading-relaxed">
        Bocetaje Manual • Síntesis Vectorial • Retícula • Biomórfica
      </p>
    </div>
  </div>

  <!-- Contenedor principal de la sección (Grid de 12 columnas) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
    
    <!-- Columna Izquierda: Tarjeta del conejo (Imagen grande y centrada simétricamente) -->
    <div class="lg:col-span-7 bg-white p-6 md:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
      <div>
        <!-- Subtítulo de la tarjeta superior -->
        <div class="flex justify-between items-center pb-4 border-b border-slate-100 mb-6 font-plusjack">
          <span class="text-[11px] uppercase font-bold tracking-widest text-[#0039C6]">
            REPRESENTACIÓN TOPOLÓGICA DE LA LIEBRE
          </span>
          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            TOLERANCIA 0.05 MM
          </span>
        </div>

        <!-- FOTO IZQUIERDA (Grande y perfectamente centrada) -->
        <div class="w-full flex-1 flex items-center justify-center my-4">
          <img 
            src="Vectorización-Conejo_Mesa-de-trabajo-1.webp" 
            alt="Representación topológica de la liebre - Veltrix" 
            class="w-full h-auto max-h-[460px] object-contain"
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
      <div class="bg-white border border-slate-200/80 shadow-sm overflow-hidden w-full h-[260px] sm:h-[300px]">
        <img 
          src="Yuleidy-Amaya-Mockup_1.webp" 
          alt="Aplicación de marca en gorra Veltrix" 
          class="w-full h-full object-cover object-center"
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



<Formulario />
