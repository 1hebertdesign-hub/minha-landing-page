const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /\/\/ ── TIMER PERSISTENTE \(localStorage\) ──[\s\S]*?\(\)\);/i;

const newTimer = `// ── TIMER PARA O JOGO DO BRASIL (13 JUN 2026 19:00) ──
(function() {
  // Data Alvo (formato ISO com fuso horário de Brasília -03:00)
  const targetDate = new Date('2026-06-13T19:00:00-03:00').getTime();

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = Date.now();
    const diff = targetDate - now;

    // Se o jogo já começou ou passou, zera tudo
    if (diff <= 0) {
      document.getElementById('t-d').textContent = '00';
      document.getElementById('t-h').textContent = '00';
      document.getElementById('t-m').textContent = '00';
      document.getElementById('t-s').textContent = '00';
      return;
    }

    // Cálculos de tempo
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualiza a tela
    document.getElementById('t-d').textContent = pad(d);
    document.getElementById('t-h').textContent = pad(h);
    document.getElementById('t-m').textContent = pad(m);
    document.getElementById('t-s').textContent = pad(s);
  }

  tick(); // Roda imediatamente
  setInterval(tick, 1000); // Atualiza a cada segundo
})();`;

// Because the original string might have different dash characters or formatting due to Powershell showing ""?"?", 
// let's use a broader regex just in case.
const safeRegex = /\/\/\s*.[^\n]*?TIMER PERSISTENTE[\s\S]*?\(\)\);/i;

if (html.match(safeRegex)) {
  html = html.replace(safeRegex, newTimer);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Update Complete.');
} else {
  console.log('Could not find the timer script.');
}
