const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /\s*<!-- ============================================\r?\n\s*<!-- Scrollbar Customizada \(Mobile Only\) -->/;

const replacement = `
  <!-- ============================================
       RECOVERY+ SECTION
  ============================================= -->
  <section class="relative bg-[#0f1612] pb-16 lg:pb-24">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <!-- Container Mobile (Scroll) e Desktop (Grid) -->
      <div id="mind-scroll-container" class="flex lg:grid lg:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-2">
        
        <!-- Card 1 -->
        <div class="flex-none w-[75vw] sm:w-[50vw] lg:w-auto snap-center flex flex-col gap-4 group">
          <div class="overflow-hidden rounded-[15px] shadow-2xl bg-[#131313]">
            <img src="PASSA 3.1.png" alt="Sapatilhas" class="w-full aspect-[4/5] lg:aspect-square object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.style.display='none'">
          </div>
          <p class="text-white font-bold text-sm sm:text-base lg:text-lg leading-snug md:leading-snug">
            Outros calçados bloqueiam as suas sensações.<br class="hidden sm:block">A tecnologia Recovery+ as amplifica.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="flex-none w-[75vw] sm:w-[50vw] lg:w-auto snap-center flex flex-col gap-4 group">
          <div class="overflow-hidden rounded-[15px] shadow-2xl bg-[#131313]">
            <img src="PASSA 3.2.png" alt="Mecanorreceptores" class="w-full aspect-[4/5] lg:aspect-square object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.style.display='none'">
          </div>
          <p class="text-white font-bold text-sm sm:text-base lg:text-lg leading-snug md:leading-snug">
            Ativa as áreas sensoriais do seu cérebro estimulando milhares de receptores na planta do pé.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="flex-none w-[75vw] sm:w-[50vw] lg:w-auto snap-center flex flex-col gap-4 group">
          <div class="overflow-hidden rounded-[15px] shadow-2xl bg-[#131313]">
            <img src="PASSA 3.3.png" alt="Ligação Corpo Mente" class="w-full aspect-[4/5] lg:aspect-square object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.style.display='none'">
          </div>
          <p class="text-white font-bold text-sm sm:text-base lg:text-lg leading-snug md:leading-snug">
            Recovery+: a conexão perfeita entre corpo e mente para os seus momentos decisivos.
          </p>
        </div>

      </div>

      <!-- Scrollbar Customizada (Mobile Only) -->`;

if(regex.test(html)) {
    html = html.replace(regex, replacement);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Fixed!");
} else {
    console.log("Not found.");
}
