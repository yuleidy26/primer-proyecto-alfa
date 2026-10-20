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

