const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const newHtmlBlock = `
<!-- ═══════════ PROPOSTA DE VALOR ═══════════ -->
<section class="relative bg-section-gradient py-16 sm:py-20 lg:py-24">
  <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
  <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
    <p class="text-2xl sm:text-3xl lg:text-4xl font-display leading-tight uppercase text-brand-text mb-6">
      A tecnologia de um chinelo de <span class="text-brand-tertiary">R$ 2.000</span>, agora acessível para o seu dia a dia.
    </p>
    <div class="flex items-center justify-center gap-4 flex-wrap mb-4">
      <span class="text-xl text-brand-text-muted line-through">De R$ 299</span>
      <span class="font-display text-6xl text-brand-primary leading-none">Por R$ 189</span>
    </div>
    <p class="text-sm text-brand-text-muted mb-8">💳 ou em até 12x no cartão</p>
    
    <a href="#checkout"
       class="flex items-center justify-center gap-3 max-w-[400px] mx-auto
              bg-brand-primary text-brand-on-primary rounded-btn
              py-5 px-8 text-xl font-display uppercase tracking-wider font-bold
              hover:bg-brand-primary/90 hover:shadow-glow-lg
              active:scale-[0.98] transition-all duration-300 ease-out">
      GARANTIR MINHA UNIDADE &rarr;
    </a>
  </div>
</section>

<!-- ═══════════ OFERTA + ESCASSEZ ═══════════ -->
<section class="relative bg-brand-bg py-16 sm:py-20 lg:py-24 text-center" id="oferta">
  <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/20 to-transparent"></div>
  <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
    <div class="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 bg-brand-error/10 border border-brand-error/30 rounded-full text-brand-error text-xs font-semibold uppercase tracking-wider">
      Oferta Exclusiva
    </div>
    <h2 class="font-display text-4xl lg:text-5xl leading-none uppercase text-brand-text mb-10">Esta oferta encerra em:</h2>
    
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
    </div>
    
    <div class="max-w-[450px] mx-auto mb-8 bg-brand-surface border border-brand-outline rounded-xl p-5 text-left">
      <div class="flex justify-between items-center text-sm mb-3">
        <span class="text-brand-error font-semibold flex items-center gap-1.5"><i class="ti ti-alert-triangle text-base"></i> Restam apenas 23 unidades</span>
        <span class="text-brand-text-muted font-medium text-xs">85% Vendido</span>
      </div>
      <div class="h-2 bg-brand-surface-highest rounded-full overflow-hidden">
        <div class="h-full w-[85%] bg-brand-secondary rounded-full animate-pulse-bar"></div>
      </div>
    </div>
    
    <a href="#checkout"
       class="flex items-center justify-center gap-3 max-w-[450px] mx-auto
              bg-brand-secondary text-brand-bg rounded-btn
              py-5 px-8 text-xl font-display uppercase tracking-wider font-bold
              hover:bg-brand-secondary/90 hover:shadow-glow-yellow
              active:scale-[0.98] transition-all duration-300 ease-out">
      COMPRAR AGORA COM DESCONTO &rarr;
    </a>
  </div>
</section>

<!-- ═══════════ PROVA SOCIAL ═══════════ -->
<section class="relative bg-section-gradient py-16 sm:py-20 lg:py-24">
  <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-tertiary/20 to-transparent"></div>
  <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div class="text-center mb-12">
      <span class="text-xs font-semibold uppercase tracking-[0.15em] text-brand-tertiary">Avaliações Verificadas</span>
      <h2 class="font-display text-4xl lg:text-5xl leading-none uppercase text-brand-text mt-3">O que nossos clientes dizem</h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-brand-surface border border-brand-outline rounded-card p-6 shadow-glow/5 relative overflow-hidden group hover:border-brand-tertiary/40 transition-colors">
        <div class="absolute top-0 left-0 w-1 h-full bg-brand-tertiary"></div>
        <div class="text-brand-secondary text-lg mb-3 flex gap-1">
          <i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i>
        </div>
        <p class="text-brand-text-muted mb-4 leading-relaxed italic text-sm">"Uso depois do futevôlei na praia, cara. Outro nível de recuperação. Meu tornozelo parou de inchar depois dos jogos."</p>
        <div class="text-brand-tertiary font-bold text-sm">Rafael M. — São Paulo, SP</div>
      </div>
      <div class="bg-brand-surface border border-brand-outline rounded-card p-6 shadow-glow/5 relative overflow-hidden group hover:border-brand-tertiary/40 transition-colors">
        <div class="absolute top-0 left-0 w-1 h-full bg-brand-tertiary"></div>
        <div class="text-brand-secondary text-lg mb-3 flex gap-1">
          <i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i>
        </div>
        <p class="text-brand-text-muted mb-4 leading-relaxed italic text-sm">"Comprei pra meu marido que joga futebol no fim de semana. Ele não tira mais do pé. Chegou em menos de 24h aqui em Curitiba."</p>
        <div class="text-brand-tertiary font-bold text-sm">Camila R. — Curitiba, PR</div>
      </div>
      <div class="bg-brand-surface border border-brand-outline rounded-card p-6 shadow-glow/5 relative overflow-hidden group hover:border-brand-tertiary/40 transition-colors">
        <div class="absolute top-0 left-0 w-1 h-full bg-brand-tertiary"></div>
        <div class="text-brand-secondary text-lg mb-3 flex gap-1">
          <i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i>
        </div>
        <p class="text-brand-text-muted mb-4 leading-relaxed italic text-sm">"Sou personal trainer e recomendo pra todos meus alunos. As bolinhas na sola fazem diferença real na recuperação pós-treino."</p>
        <div class="text-brand-tertiary font-bold text-sm">Diego F. — Belo Horizonte, MG</div>
      </div>
      <div class="bg-brand-surface border border-brand-outline rounded-card p-6 shadow-glow/5 relative overflow-hidden group hover:border-brand-tertiary/40 transition-colors">
        <div class="absolute top-0 left-0 w-1 h-full bg-brand-tertiary"></div>
        <div class="text-brand-secondary text-lg mb-3 flex gap-1">
          <i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i>
        </div>
        <p class="text-brand-text-muted mb-4 leading-relaxed italic text-sm">"Trabalho de pé o dia todo como enfermeira. Quando chego em casa coloco esse chinelo e parece que saiu todo o cansaço do pé."</p>
        <div class="text-brand-tertiary font-bold text-sm">Jéssica L. — Recife, PE</div>
      </div>
      <div class="bg-brand-surface border border-brand-outline rounded-card p-6 shadow-glow/5 relative overflow-hidden group hover:border-brand-tertiary/40 transition-colors">
        <div class="absolute top-0 left-0 w-1 h-full bg-brand-tertiary"></div>
        <div class="text-brand-secondary text-lg mb-3 flex gap-1">
          <i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i>
        </div>
        <p class="text-brand-text-muted mb-4 leading-relaxed italic text-sm">"Vi nas redes o pessoal usando na concentração e fui atrás. Vale cada centavo. Qualidade impressionante pelo preço."</p>
        <div class="text-brand-tertiary font-bold text-sm">Thiago B. — Porto Alegre, RS</div>
      </div>
      <div class="bg-brand-surface border border-brand-outline rounded-card p-6 shadow-glow/5 relative overflow-hidden group hover:border-brand-tertiary/40 transition-colors">
        <div class="absolute top-0 left-0 w-1 h-full bg-brand-tertiary"></div>
        <div class="text-brand-secondary text-lg mb-3 flex gap-1">
          <i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i><i class="ti ti-star-filled"></i>
        </div>
        <p class="text-brand-text-muted mb-4 leading-relaxed italic text-sm">"Comprei desconfiado mas a garantia de 7 dias me convenceu. Não devolvi não, pelo contrário, já comprei outro pra meu filho."</p>
        <div class="text-brand-tertiary font-bold text-sm">Marcos A. — Goiânia, GO</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ FAQ ═══════════ -->
<section class="relative bg-brand-bg py-16 sm:py-20 lg:py-24">
  <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-tertiary/20 to-transparent"></div>
  <div class="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
    <div class="text-center mb-10">
      <span class="text-xs font-semibold uppercase tracking-[0.15em] text-brand-tertiary">Dúvidas</span>
      <h2 class="font-display text-4xl lg:text-5xl leading-none uppercase text-brand-text mt-2">Perguntas Frequentes</h2>
    </div>
    <div id="faq-list" class="flex flex-col gap-3">
      <div class="faq-item group bg-brand-surface border border-brand-outline rounded-card overflow-hidden">
        <button class="w-full bg-transparent border-none text-left py-5 px-6 text-base font-semibold text-brand-text cursor-pointer flex justify-between items-center gap-4 hover:bg-brand-surface-high transition-colors">
          Tem nota fiscal?
          <span class="shrink-0 w-8 h-8 bg-brand-bg border border-brand-outline text-brand-tertiary rounded-full flex items-center justify-center text-lg transition-transform duration-300 group-[.open]:rotate-45 group-hover:border-brand-tertiary/40">+</span>
        </button>
        <div class="hidden text-sm text-brand-text-muted px-6 pb-6 leading-relaxed group-[.open]:block">Sim! A NF-e é emitida automaticamente e enviada para o seu e-mail após a confirmação do pagamento.</div>
      </div>
      <div class="faq-item group bg-brand-surface border border-brand-outline rounded-card overflow-hidden">
        <button class="w-full bg-transparent border-none text-left py-5 px-6 text-base font-semibold text-brand-text cursor-pointer flex justify-between items-center gap-4 hover:bg-brand-surface-high transition-colors">
          Quanto tempo demora a entrega?
          <span class="shrink-0 w-8 h-8 bg-brand-bg border border-brand-outline text-brand-tertiary rounded-full flex items-center justify-center text-lg transition-transform duration-300 group-[.open]:rotate-45 group-hover:border-brand-tertiary/40">+</span>
        </button>
        <div class="hidden text-sm text-brand-text-muted px-6 pb-6 leading-relaxed group-[.open]:block">Para todo o Brasil, despachamos em até 24 horas após a confirmação do PIX. O prazo de entrega varia de 2 a 7 dias úteis dependendo da sua região.</div>
      </div>
      <div class="faq-item group bg-brand-surface border border-brand-outline rounded-card overflow-hidden">
        <button class="w-full bg-transparent border-none text-left py-5 px-6 text-base font-semibold text-brand-text cursor-pointer flex justify-between items-center gap-4 hover:bg-brand-surface-high transition-colors">
          Serve para qualquer tamanho de pé?
          <span class="shrink-0 w-8 h-8 bg-brand-bg border border-brand-outline text-brand-tertiary rounded-full flex items-center justify-center text-lg transition-transform duration-300 group-[.open]:rotate-45 group-hover:border-brand-tertiary/40">+</span>
        </button>
        <div class="hidden text-sm text-brand-text-muted px-6 pb-6 leading-relaxed group-[.open]:block">Sim! O design universal com tira regulável serve confortavelmente para pés entre os tamanhos 35 e 43.</div>
      </div>
      <div class="faq-item group bg-brand-surface border border-brand-outline rounded-card overflow-hidden">
        <button class="w-full bg-transparent border-none text-left py-5 px-6 text-base font-semibold text-brand-text cursor-pointer flex justify-between items-center gap-4 hover:bg-brand-surface-high transition-colors">
          E se eu não gostar?
          <span class="shrink-0 w-8 h-8 bg-brand-bg border border-brand-outline text-brand-tertiary rounded-full flex items-center justify-center text-lg transition-transform duration-300 group-[.open]:rotate-45 group-hover:border-brand-tertiary/40">+</span>
        </button>
        <div class="hidden text-sm text-brand-text-muted px-6 pb-6 leading-relaxed group-[.open]:block">Garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta entrar em contato e realizamos o reembolso total via PIX, sem perguntas.</div>
      </div>
      <div class="faq-item group bg-brand-surface border border-brand-outline rounded-card overflow-hidden">
        <button class="w-full bg-transparent border-none text-left py-5 px-6 text-base font-semibold text-brand-text cursor-pointer flex justify-between items-center gap-4 hover:bg-brand-surface-high transition-colors">
          Qual a procedência do produto?
          <span class="shrink-0 w-8 h-8 bg-brand-bg border border-brand-outline text-brand-tertiary rounded-full flex items-center justify-center text-lg transition-transform duration-300 group-[.open]:rotate-45 group-hover:border-brand-tertiary/40">+</span>
        </button>
        <div class="hidden text-sm text-brand-text-muted px-6 pb-6 leading-relaxed group-[.open]:block">Tecnologia importada com as mesmas especificações utilizadas por atletas de alto rendimento. Produto regularizado e com nota fiscal.</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ MATRIZ DE CHECKOUT ═══════════ -->
<section class="relative bg-section-gradient py-16 sm:py-20 lg:py-24" id="checkout">
  <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-tertiary/20 to-transparent"></div>
  <div class="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
    <span class="text-xs font-semibold uppercase tracking-[0.15em] text-brand-tertiary">Escolha onde comprar</span>
    <h2 class="font-display text-4xl lg:text-5xl leading-none uppercase text-brand-text mt-2 mb-4">Compre no Canal<br/>que você Confia</h2>
    <p class="text-sm text-brand-text-muted max-w-[480px] mx-auto mb-10 leading-relaxed">Escolha a plataforma onde se sentir mais seguro para realizar sua compra.</p>
    
    <div class="flex flex-col gap-4 text-left">
      <a href="#" class="flex items-center justify-between p-5 rounded-btn border-2 border-brand-primary bg-brand-surface text-brand-text cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:bg-brand-surface-high group">
        <span class="text-2xl w-10 text-center"><i class="ti ti-shopping-cart text-brand-primary"></i></span>
        <div class="flex-1 px-4">
          <span class="font-bold text-base md:text-lg block mb-0.5 group-hover:text-brand-primary transition-colors">Comprar no Site Oficial</span>
          <span class="block text-xs font-normal text-brand-text-muted">Desconto exclusivo no PIX + Frete Grátis</span>
        </div>
        <span class="text-xl text-brand-primary opacity-60 group-hover:translate-x-1 transition-transform">&rarr;</span>
      </a>
      
      <a href="#" class="flex items-center justify-between p-5 rounded-btn border-2 border-brand-outline hover:border-orange-500/50 bg-brand-surface text-brand-text cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-glow/10 group">
        <span class="text-2xl w-10 text-center"><i class="ti ti-shopping-bag text-orange-500"></i></span>
        <div class="flex-1 px-4">
          <span class="font-bold text-base md:text-lg block mb-0.5 group-hover:text-orange-500 transition-colors">Comprar na Shopee</span>
          <span class="block text-xs font-normal text-brand-text-muted">Garantia Shopee — selecione "Modelo Aero-Green"</span>
        </div>
        <span class="text-xl text-orange-500 opacity-60 group-hover:translate-x-1 transition-transform">&rarr;</span>
      </a>
      
      <a href="#" class="flex items-center justify-between p-5 rounded-btn border-2 border-brand-outline hover:border-yellow-400/50 bg-brand-surface text-brand-text cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-glow/10 group">
        <span class="text-2xl w-10 text-center"><i class="ti ti-package text-yellow-400"></i></span>
        <div class="flex-1 px-4">
          <span class="font-bold text-base md:text-lg block mb-0.5 group-hover:text-yellow-400 transition-colors">Comprar no Mercado Livre</span>
          <span class="block text-xs font-normal text-brand-text-muted">Proteção Mercado Pago + Entrega Full</span>
        </div>
        <span class="text-xl text-yellow-400 opacity-60 group-hover:translate-x-1 transition-transform">&rarr;</span>
      </a>
    </div>
    
    <div class="flex justify-center gap-6 flex-wrap mt-10 pt-8 border-t border-brand-outline/50">
      <div class="flex items-center gap-2 text-xs font-semibold text-brand-text-muted"><i class="ti ti-lock text-brand-tertiary text-lg"></i> PIX Seguro</div>
      <div class="flex items-center gap-2 text-xs font-semibold text-brand-text-muted"><i class="ti ti-shield-check text-brand-tertiary text-lg"></i> Site Protegido</div>
      <div class="flex items-center gap-2 text-xs font-semibold text-brand-text-muted"><i class="ti ti-truck-delivery text-brand-tertiary text-lg"></i> Entrega Garantida</div>
    </div>
  </div>
</section>

<!-- ═══════════ GARANTIA + CTA FINAL ═══════════ -->
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

<!-- ═══════════ FLOATING CTA ═══════════ -->
<div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] hidden lg:block" id="float-cta" style="display:none;">
  <a href="#checkout"
     class="flex items-center justify-center gap-3
            bg-brand-primary text-brand-on-primary rounded-full
            py-3 px-8 text-lg font-display uppercase tracking-wider font-bold
            hover:bg-brand-primary/90 shadow-glow-lg
            active:scale-[0.98] transition-all duration-300 ease-out whitespace-nowrap">
    <i class="ti ti-shopping-cart text-xl"></i> COMPRAR COM DESCONTO &rarr;
  </a>
</div>
`;

const startIndex = indexHtml.indexOf('<!-- ═══════════ PROPOSTA DE VALOR ═══════════ -->');
const endIndex = indexHtml.indexOf('  <script>\n// ── TIMER PERSISTENTE');

if (startIndex !== -1 && endIndex !== -1) {
  const newFinalHtml = indexHtml.substring(0, startIndex) + newHtmlBlock + '\n' + indexHtml.substring(endIndex);
  fs.writeFileSync('index.html', newFinalHtml, 'utf8');
  console.log('Successfully refactored layout!');
} else {
  console.error('Could not find start/end indices.', {
    foundStart: startIndex !== -1,
    foundEnd: endIndex !== -1,
    testIndex: indexHtml.indexOf('// ── TIMER PERSISTENTE')
  });
}
