const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const replacementHtml = `<!-- ═══════════ PROPOSTA DE VALOR ═══════════ -->
<section class="relative bg-section-gradient py-12 sm:py-16">
  <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
  <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight uppercase text-brand-text">
      A tecnologia usada pelos atletas da seleção, agora acessível pra seu dia a dia.
    </h2>
  </div>
</section>

<!-- ═══════════ OFERTA + ESCASSEZ (COM RELÓGIO FLIP) ═══════════ -->
<section class="relative bg-brand-bg pb-16 sm:pb-20 lg:pb-24 text-center" id="oferta">
  <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
    <div class="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 bg-brand-error/10 border border-brand-error/30 rounded-full text-brand-error text-xs font-semibold uppercase tracking-wider">
      Oferta Exclusiva
    </div>
    
    <h2 class="font-display text-4xl lg:text-5xl leading-none uppercase text-brand-text mb-4">
      Oferta válida até o próximo jogo do Brasil
    </h2>
    <p class="text-brand-secondary text-lg sm:text-xl font-bold uppercase tracking-wide mb-8 flex items-center justify-center gap-2 flex-wrap">
      🇧🇷 Brasil x Marrocos 🇲🇦 <span class="text-brand-text-muted font-normal block sm:inline">| 19:00 • 13 Jun 2026</span>
    </p>
    
    <!-- Flip Clock HTML -->
    <div class="flip-clock">
      <div class="flip-unit">
        <div class="flip-card"><span id="t-d">00</span></div>
        <div class="flip-label">Dias</div>
      </div>
      <div class="flip-unit">
        <div class="flip-card"><span id="t-h">00</span></div>
        <div class="flip-label">Horas</div>
      </div>
      <div class="flip-unit">
        <div class="flip-card"><span id="t-m">00</span></div>
        <div class="flip-label">Min</div>
      </div>
      <div class="flip-unit">
        <div class="flip-card"><span id="t-s">00</span></div>
        <div class="flip-label">Seg</div>
      </div>
    </div>
    
    <!-- Barra de Escassez -->
    <div class="max-w-[450px] mx-auto mb-8 bg-brand-surface border border-brand-outline rounded-xl p-5 text-left">
      <div class="flex justify-between items-center text-sm mb-3">
        <span class="text-brand-error font-semibold flex items-center gap-1.5"><i class="ti ti-alert-triangle text-base"></i> Restam apenas 23 unidades</span>
        <span class="text-brand-text-muted font-medium text-xs">85% Vendido</span>
      </div>
      <div class="h-2 bg-brand-surface-highest rounded-full overflow-hidden">
        <div class="h-full w-[85%] bg-brand-secondary rounded-full animate-pulse-bar"></div>
      </div>
    </div>
    
    <!-- Novo Botão Movido -->
    <a href="#checkout"
       class="flex items-center justify-center gap-3 max-w-[450px] mx-auto
              bg-brand-primary text-brand-on-primary rounded-btn
              py-5 px-8 text-xl font-display uppercase tracking-wider font-bold
              hover:bg-brand-primary/90 hover:shadow-glow-lg
              active:scale-[0.98] transition-all duration-300 ease-out">
      GARANTIR O MEU &rarr;
    </a>
  </div>
</section>
`;

const startIdx = html.indexOf('<!-- ═══════════ PROPOSTA DE VALOR ═══════════ -->');
const endIdx = html.indexOf('<!-- ═══════════ PROVA SOCIAL ═══════════ -->');

if (startIdx !== -1 && endIdx !== -1) {
  html = html.substring(0, startIdx) + replacementHtml + html.substring(endIdx);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Update Complete.');
} else {
  console.log('Could not find start or end markers.');
}
