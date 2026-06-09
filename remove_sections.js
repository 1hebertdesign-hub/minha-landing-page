const fs = require('fs');

try {
  let html = fs.readFileSync('index.html', 'utf8');
  let originalLength = html.length;

  // Remove FAQ section
  const faqStart = html.indexOf('<!-- ═══════════ FAQ ═══════════ -->');
  const matrizStart = html.indexOf('<!-- ═══════════ MATRIZ DE CHECKOUT ═══════════ -->');
  if (faqStart !== -1 && matrizStart !== -1 && faqStart < matrizStart) {
    html = html.substring(0, faqStart) + html.substring(matrizStart);
  }

  // Remove GARANTIA section
  const garantiaStart = html.indexOf('<!-- ═══════════ GARANTIA + CTA FINAL ═══════════ -->');
  const footerStart = html.indexOf('<!-- ═══════════ FOOTER ═══════════ -->');
  if (garantiaStart !== -1 && footerStart !== -1 && garantiaStart < footerStart) {
    html = html.substring(0, garantiaStart) + html.substring(footerStart);
  }

  // Remove FAQ JS
  const faqJsStart = html.indexOf('// ── FAQ ACCORDION ──');
  const floatingCtaStart = html.indexOf('// ── FLOATING CTA: aparece após scroll ──');
  if (faqJsStart !== -1 && floatingCtaStart !== -1 && faqJsStart < floatingCtaStart) {
    // Also remove the whitespace before it
    const pre = html.lastIndexOf('    ', faqJsStart);
    html = html.substring(0, pre !== -1 ? pre : faqJsStart) + html.substring(floatingCtaStart);
  }

  if (html.length < originalLength) {
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Sections removed successfully.");
  } else {
    console.log("No sections were found to remove.");
  }
} catch (e) {
  console.error(e);
}
