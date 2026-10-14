<script>
  import Icon from '@iconify/svelte';
</script>


<section class="bg-indigo-600 text-white  px-10 py-10 gap-40 flex flex-col">

    <div>
        <p class="flex justify-end text-xs">VALENCIA, VENEZUELA</p>
    </div>

    <div class="flex justify-center items-center gap-20">

        <div class="flex-1 flex flex-col gap-3">
            <div><p class="text-4xl">Diseño Gráfico e <br> Identidad Visual</p></div>
            <div><p class="text-xs font-light">Diseño piezas con propósito y construyo universos de <br> marca sólidos, combiando creatividad, estrategia y <br> coherencia en cada detalle </p></div>
        </div>

        <div class="w-56 rounded-full overflow-hidden">
            <img src="/logo.webp" alt="avatar de Yuleidy Amaya"/>
        </div>

        <div class="flex-1 text-8xl text-right">
            <p>YULEIDY <br> AMAYA</p>
        </div>

    </div>

    <div>
    <button class="uppercase text-xs">descubir proyectos</button>
    </div>

</section>


<section>
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

