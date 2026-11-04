<script>
  import Icon from '@iconify/svelte';
</script>

<!-- Sección Sobre Mí -->
<section  id="SOBRE-MI"  class="bg-[#FCF8FE] text-slate-900 px-5 sm:px-8 lg:px-12 py-16 md:py-24">
    <!-- Cuadro superior naranja -->
     <div class="max-w-5xl flex flex-col gap-6 ">

       <div class="text-[#0039C6] font-plusjack font-bold text-xs tracking-wider"> SOBRE MÍ</div>

       <!-- Título Principal -->
    <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold leading-tight">
      Filosofía de Diseño & <span class="text-[#0039C6] italic">Enfoque</span><br class="hidden md:block"> de Marca
    </h2>

       <div class="font-plusjack leading-relaxed text-[#434656] text-sm md:text-base max-w-3xl">
         <p>Me apasiona el diseño de identidades visuales, buscando siempre el equilibrio entre lo funcional y <br class="hidden md:block">
            lo creativo. Mi objetivo es transformar conceptos en piezas gráficas estratégicas que potencien la <br class="hidden md:block">
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
