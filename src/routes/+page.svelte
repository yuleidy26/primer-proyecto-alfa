<script>
    import Tarjetainformacion from '#lib/components/Tarjetainformacion.svelte';
  import Icon from '@iconify/svelte';
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
        Diseño Gráfico e <br>Identidad Visual
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
<section class="bg-[#FCF8FE] text-slate-900 px-12 py-12">
    <!-- Cuadro superior naranja -->
     <div>

       <div><p> SOBRE MÍ</p></div>

       <div><p>Filosofía de Diseño & Enfoque de Marca</p></div>

       <div><p>Me apasiona el diseño de identidades visuales, buscando siempre el equilibrio entre lo funcional y
            lo creativo. Mi objetivo es transformar conceptos en piezas gráficas estratégicas que potencien la
            presencia de una marca tanto en plataformas digitales como en medios impresos tradicionales.</p>
        </div>

     </div>

    <!-- cuadro inferior naranja  -->
     <div>

        <!-- cuadro verde izquierdo -->
        <div>
            <div>
                <p>SOFTWARE & HERRAMIENTAS DE DISEÑO</p>
            </div>

            <div>
                <Icon icon="basil:adobe-illustrator-solid"  width="32" />
                <p>Adobe Illustrator</p> <p>DISEÑO VECTORIAL & MARCAS</p>
            </div>

            <div>
                <Icon icon="basil:adobe-photoshop-solid"  width="32" />
                <p>Adobe Photoshop</p> <p>EDICIÓN & FOTOMONTAJE</p>
            </div>

            <div>
                <Icon icon="thesvg-color:canva" width="32" />
                <p>Canva</p> <p>PIEZAS DIGITALES & REDES</p>
            </div>

        </div>
      
        <!-- cuadro verde derecho -->
        <div> 
            <div>
                <p>FORMACIÓN & CERTIFICACIONES</p>
            </div>
            <!-- curso 1 --> 
             <div>
                <div>
                    <p>Curso Premium de Diseño Gráfico</p>
                    <p>INSTITUTO ALFA CARABOBO</p>
                </div>
                <div>
                    <p>2026</p>
                </div>
             </div>
            <!-- curso 2 -->
             <div>
                <div>
                    <p>Técnicas de Ilustración</p>
                    <p>ACADEMIA LUMINA</p>
                </div>
                <div>
                    <p>2026</p>
                </div>
             </div>
            <!-- curso 3 -->
             <div>
                <div>
                    <p>Programación Web</p>
                    <p>INSTITUTO ALFA CARABOBO</p>
                </div>
                <div><p>EN CURSO</p></div>
             </div>


        </div>

     </div>

    
</section>

<section>

<div class="grid grid"><Tarjetainformacion /></div>

</section>

