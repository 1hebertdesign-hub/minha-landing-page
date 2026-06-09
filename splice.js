const fs = require('fs');

try {
  const indexHtml = fs.readFileSync('index.html', 'utf8');
  const refHtml = fs.readFileSync('referencia.html', 'utf8');

  // 1. Extract colors from referencia.html
  const refConfigMatch = refHtml.match(/"colors":\s*({[^}]+})/);
  const refColors = refConfigMatch ? refConfigMatch[1] : '';

  // 2. Inject colors into index.html config
  let newHtml = indexHtml.replace(
    /colors:\s*\{\s*brand:\s*\{[^}]+\},\s*\},/,
    (match) => `${match.slice(0, -2)}\n            ...${refColors},\n          },`
  );

  // 3. Inject animations into index.html <style>
  const animations = `
    @keyframes pulse-bar {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    .animate-pulse-bar { animation: pulse-bar 2s ease-in-out infinite; }
  `;
  newHtml = newHtml.replace('</style>', `${animations}\n  </style>`);

  // 4. Extract content to insert from referencia.html
  const contentToInsert = refHtml.substring(
    refHtml.indexOf('<!-- ═══════════ PROPOSTA DE VALOR ═══════════ -->'),
    refHtml.indexOf('<!-- ═══════════ JAVASCRIPT ═══════════ -->')
  );

  // 5. Extract scripts from referencia.html
  const scriptsToInsert = refHtml.substring(
    refHtml.indexOf('// ── TIMER PERSISTENTE (localStorage) ──'),
    refHtml.indexOf('</script>\n</body>')
  );

  // 6. Splice it all together
  const topPart = newHtml.substring(
    0,
    newHtml.indexOf('  <!-- ============================================\n       OFFER + CHECKOUT\n  ============================================= -->')
  );

  const bottomPartScripts = newHtml.substring(
    newHtml.indexOf('  <script>\n  document.addEventListener(\'DOMContentLoaded\', () => {'),
    newHtml.indexOf('  <script>\n    // Particle Animation Reusable Logic')
  );

  const bottomPartParticles = newHtml.substring(
    newHtml.indexOf('  <script>\n    // Particle Animation Reusable Logic'),
    newHtml.indexOf('</body>')
  );

  const finalHtml = topPart + contentToInsert + bottomPartScripts + '  <script>\n' + scriptsToInsert + '\n  </script>\n' + bottomPartParticles + '</body>\n</html>';

  fs.writeFileSync('index.html', finalHtml, 'utf8');
  console.log('Successfully spliced files.');
} catch (e) {
  console.error(e);
}
