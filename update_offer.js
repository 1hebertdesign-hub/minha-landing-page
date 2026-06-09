const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Update the "Proposta de Valor" text and remove price + first button
const propostaRegex = /A tecnologia de um chinelo de <span class="text-brand-tertiary">R\$ 2\.000<\/span>, agora acessível para o seu dia a dia\./i;
html = html.replace(propostaRegex, 'A TECNOLOGIA USADA PELOS <span class="text-brand-secondary">ATLETAS DA SELEÇÃO</span>, AGORA ACESSÍVEL PRA SEU DIA A DIA.');

const priceBlockRegex = /<div class="flex items-center justify-center gap-4 flex-wrap mb-4">[\s\S]*?Por R\$ 189<\/span>\s*<\/div>/i;
html = html.replace(priceBlockRegex, '');

const cardBlockRegex = /<p class="text-sm text-brand-text-muted mb-8">💳 ou em até 12x no cartão<\/p>/i;
html = html.replace(cardBlockRegex, '');

// Remove the green button from here
const btnGreen1Regex = /<a href="#checkout"[\s\S]*?GARANTIR MINHA UNIDADE &rarr;\s*<\/a>/i;
html = html.replace(btnGreen1Regex, '');

// 2. Offer Section Header & Background
const offerBgRegex = /<section class="relative bg-brand-bg py-16 sm:py-20 lg:py-24 text-center" id="oferta">/i;
html = html.replace(offerBgRegex, '<section class="relative bg-gradient-to-b from-[#131313] via-[#0a4d34]/20 to-[#131313] py-16 sm:py-20 lg:py-24 text-center" id="oferta">');

// 3. Change Timer Title
const timerTitleRegex = /<h2 class="font-display text-4xl lg:text-5xl leading-none uppercase text-brand-text mb-10">Esta oferta encerra em:<\/h2>/i;
html = html.replace(timerTitleRegex, 
  `<h2 class="font-display text-3xl lg:text-4xl leading-none uppercase text-brand-text mb-4">
    Oferta Válida Até O Próximo Jogo Do Brasil
  </h2>
  <div class="flex items-center justify-center gap-3 text-brand-secondary font-semibold text-lg lg:text-xl tracking-wider uppercase mb-10">
    <span class="text-2xl">🇧🇷</span> Brasil x Marrocos <span class="text-2xl">🇲🇦</span> <span class="text-brand-text-muted mx-2">•</span> 19:00 <span class="text-brand-text-muted mx-2">•</span> 13 Jun 2026
  </div>`
);

// 4. Update the Flip Clock Design
const oldClockHtml = `
      <div class="flex gap-4 mb-10 justify-center">
        <div class="text-center bg-brand-surface border border-brand-outline rounded-xl py-4 px-3 min-w-[80px] shadow-glow-yellow/10">
          <div class="font-display text-5xl leading-none text-brand-secondary" id="t-h">23</div>
          <div class="text-[11px] text-brand-text-muted tracking-[0.1em] uppercase mt-1">Horas</div>
        </div>
        <div class="text-center bg-brand-surface border border-brand-outline rounded-xl py-4 px-3 min-w-[80px] shadow-glow-yellow/10">
          <div class="font-display text-5xl leading-none text-brand-secondary" id="t-m">59</div>
          <div class="text-[11px] text-brand-text-muted tracking-[0.1em] uppercase mt-1">Min</div>
        </div>
        <div class="text-center bg-brand-surface border border-brand-outline rounded-xl py-4 px-3 min-w-[80px] shadow-glow-yellow/10">
          <div class="font-display text-5xl leading-none text-brand-secondary" id="t-s">59</div>
          <div class="text-[11px] text-brand-text-muted tracking-[0.1em] uppercase mt-1">Seg</div>
        </div>
      </div>`;

// Constructing the new Flip Clock HTML
const newClockHtml = `
      <div class="flex gap-4 mb-10 justify-center">
        <!-- Flip Box 1: Horas -->
        <div class="flex flex-col items-center">
          <div class="relative w-20 h-24 bg-[#1a1a1a] rounded-lg shadow-inner border border-brand-outline/30 flex items-center justify-center overflow-hidden shadow-[inset_0_-4px_10px_rgba(0,0,0,0.5)]">
            <!-- Central Line for Flip Effect -->
            <div class="absolute top-1/2 left-0 w-full h-[2px] bg-[#000000] -translate-y-1/2 z-10 shadow-[0_1px_2px_rgba(255,255,255,0.05)]"></div>
            <!-- Shadow gradient top half -->
            <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black/30 z-0"></div>
            <div class="relative z-20 font-display text-6xl leading-none text-[#e7c433] tracking-tighter" id="t-h">23</div>
          </div>
          <div class="text-[11px] text-brand-text-muted font-bold tracking-[0.15em] uppercase mt-3">Horas</div>
        </div>
        
        <!-- Divider -->
        <div class="text-[#e7c433] text-4xl font-display leading-none mt-6 animate-pulse">:</div>

        <!-- Flip Box 2: Minutos -->
        <div class="flex flex-col items-center">
          <div class="relative w-20 h-24 bg-[#1a1a1a] rounded-lg shadow-inner border border-brand-outline/30 flex items-center justify-center overflow-hidden shadow-[inset_0_-4px_10px_rgba(0,0,0,0.5)]">
            <!-- Central Line for Flip Effect -->
            <div class="absolute top-1/2 left-0 w-full h-[2px] bg-[#000000] -translate-y-1/2 z-10 shadow-[0_1px_2px_rgba(255,255,255,0.05)]"></div>
            <!-- Shadow gradient top half -->
            <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black/30 z-0"></div>
            <div class="relative z-20 font-display text-6xl leading-none text-[#e7c433] tracking-tighter" id="t-m">59</div>
          </div>
          <div class="text-[11px] text-brand-text-muted font-bold tracking-[0.15em] uppercase mt-3">Min</div>
        </div>

        <!-- Divider -->
        <div class="text-[#e7c433] text-4xl font-display leading-none mt-6 animate-pulse">:</div>

        <!-- Flip Box 3: Segundos -->
        <div class="flex flex-col items-center">
          <div class="relative w-20 h-24 bg-[#1a1a1a] rounded-lg shadow-inner border border-brand-outline/30 flex items-center justify-center overflow-hidden shadow-[inset_0_-4px_10px_rgba(0,0,0,0.5)]">
            <!-- Central Line for Flip Effect -->
            <div class="absolute top-1/2 left-0 w-full h-[2px] bg-[#000000] -translate-y-1/2 z-10 shadow-[0_1px_2px_rgba(255,255,255,0.05)]"></div>
            <!-- Shadow gradient top half -->
            <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black/30 z-0"></div>
            <div class="relative z-20 font-display text-6xl leading-none text-[#e7c433] tracking-tighter" id="t-s">59</div>
          </div>
          <div class="text-[11px] text-brand-text-muted font-bold tracking-[0.15em] uppercase mt-3">Seg</div>
        </div>
      </div>`;

// Replace the clock HTML using a less strict regex (it ignores exact spaces)
// Because we have it strictly structured, let's just do a manual string replace of a compressed version
// Actually, it's safer to use regex that spans from '<div class="flex gap-4 mb-10 justify-center">' up to '</div>' before '<div class="max-w-[450px]'
const clockBlockRegex = /<div class="flex gap-4 mb-10 justify-center">[\s\S]*?<div class="max-w-\[450px\] mx-auto mb-8 bg-brand-surface/i;
html = html.replace(clockBlockRegex, newClockHtml + '\n      <div class="max-w-[450px] mx-auto mb-8 bg-brand-surface');


// 5. Replace yellow button at the bottom with the green "GARANTIR O MEU" button
const btnYellowRegex = /<a href="#checkout"[\s\S]*?COMPRAR AGORA COM DESCONTO &rarr;\s*<\/a>/i;
const newGreenBtn = `
      <a href="#checkout"
         class="flex items-center justify-center gap-3 max-w-[450px] mx-auto
                bg-brand-primary text-brand-on-primary rounded-btn
                py-5 px-8 text-xl font-display uppercase tracking-wider font-bold
                hover:bg-brand-primary/90 hover:shadow-glow-lg
                active:scale-[0.98] transition-all duration-300 ease-out">
        GARANTIR O MEU &rarr;
      </a>`;
html = html.replace(btnYellowRegex, newGreenBtn);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Update Complete.');
