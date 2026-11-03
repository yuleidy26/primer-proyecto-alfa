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
      <div class="text-[#1B1B1F] font-playfair font-semibold text-8xl">
        <h1>GUAO — Lenguaje <br> Dinámico & Audiovisual</h1>
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

<Formulario />
