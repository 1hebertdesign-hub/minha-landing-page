const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const brokenBlock = `<nav class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            active:scale-[0.98] transition-all duration-300 ease-out whitespace-nowrap">
    <i class="ti ti-shopping-cart text-xl"></i> COMPRAR COM DESCONTO &rarr;
  </a>
</div>`;

const fixedBlock = `<nav class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
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

<!-- ═══════════ FLOATING CTA ═══════════ -->
<div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] w-[90%] max-w-[400px]" id="float-cta">
  <a href="#checkout"
     class="flex items-center justify-center gap-3 w-full
            bg-[#e7c433] text-[#131313] rounded-full
            py-3 px-8 text-lg font-display uppercase tracking-wider font-bold
            hover:bg-[#e7c433]/90 shadow-glow-yellow
            active:scale-[0.98] transition-all duration-300 ease-out whitespace-nowrap">
    <i class="ti ti-shopping-cart text-xl"></i> COMPRAR COM DESCONTO
  </a>
</div>`;

if (html.includes(brokenBlock)) {
  html = html.replace(brokenBlock, fixedBlock);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log("Fixed footer and restored floating CTA successfully.");
} else {
  console.log("Could not find the broken block.");
}
