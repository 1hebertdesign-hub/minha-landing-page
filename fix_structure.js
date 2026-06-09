const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const anchor1 = '<!-- ═══════════ GARANTIA + CTA FINAL ═══════════ -->';
const anchor2 = '<!-- ═══════════ FLOATING CTA ═══════════ -->';

const idx1 = html.indexOf(anchor1);
const idx2 = html.indexOf(anchor2);

if (idx1 !== -1 && idx2 !== -1) {
  const before = html.substring(0, idx1 + anchor1.length);
  const after = html.substring(idx2);
  
  const middle = `
<section class="bg-brand-surface-high text-center py-16 px-6">
  <div class="max-w-2xl mx-auto">
    <div class="text-5xl mb-4 text-brand-tertiary"><i class="ti ti-shield-check"></i></div>
    <h2 class="font-display text-4xl md:text-5xl uppercase text-brand-secondary mb-4">Garantia Total de 7 Dias</h2>
    <p class="text-sm md:text-base text-brand-text-muted mx-auto mb-10 leading-relaxed max-w-[400px]">
      Compre sem risco. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro via PIX. Sem burocracia.
    </p>
    <a href="#checkout"
       class="flex items-center justify-center gap-3 max-w-[400px] mx-auto
              bg-brand-primary text-brand-on-primary rounded-btn
              py-5 px-8 text-xl font-display uppercase tracking-wider font-bold
              hover:bg-brand-primary/90 hover:shadow-glow-lg
              active:scale-[0.98] transition-all duration-300 ease-out">
      COMPRAR AGORA COM DESCONTO &rarr;
    </a>
    <p class="text-brand-text-muted/60 text-xs mt-4 uppercase tracking-wider font-semibold">
      &bull; Oferta por tempo limitado &bull; Frete grátis Brasil &bull;
    </p>
  </div>
</section>

<!-- ═══════════ FOOTER ═══════════ -->
<footer class="bg-brand-bg border-t border-brand-outline">
  <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
      <a href="#" class="font-display text-2xl text-brand-primary tracking-wider hover:text-brand-primary/80 transition-colors">
        RECOVERY+
      </a>
      <nav class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <a href="#" class="text-xs text-brand-text-muted hover:text-brand-primary transition-colors">Privacy Policy</a>
        <a href="#" class="text-xs text-brand-text-muted hover:text-brand-primary transition-colors">Terms of Service</a>
        <a href="#" class="text-xs text-brand-text-muted hover:text-brand-primary transition-colors">Recovery Science</a>
        <a href="#" class="text-xs text-brand-text-muted hover:text-brand-primary transition-colors">Contact Support</a>
      </nav>
    </div>
    <div class="border-t border-brand-outline/30 pt-6 text-center">
      <p class="text-xs text-brand-text-muted/50 mb-1">&copy; 2026 RECOVERY+ LABS.</p>
      <p class="text-[10px] text-brand-text-muted/30">Este site não possui vínculo com clubes, federações ou seleções nacionais.</p>
    </div>
  </div>
  <div class="h-20 lg:h-0"></div> <!-- Mobile FAB padding -->
</footer>

`;

  fs.writeFileSync('index.html', before + middle + after, 'utf8');
  console.log("Structure fixed!");
} else {
  console.log("Could not find anchors");
}
