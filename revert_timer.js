const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /\/\/ ── TIMER PARA O JOGO DO BRASIL[\s\S]*?\(\)\);/i;

const oldTimer = `// ── TIMER PERSISTENTE (localStorage) ──
    (function() {
      const KEY = 'recovery_timer_end';
      const DURATION = 24 * 60 * 60 * 1000; // 24h em ms

      let endTime = localStorage.getItem(KEY);
      if (!endTime || Date.now() > Number(endTime)) {
        endTime = Date.now() + DURATION;
        localStorage.setItem(KEY, endTime);
      }

      function pad(n) { return String(n).padStart(2, '0'); }

      function tick() {
        const diff = Number(endTime) - Date.now();
        if (diff <= 0) {
          localStorage.removeItem(KEY);
          if (document.getElementById('t-d')) document.getElementById('t-d').textContent = '00';
          document.getElementById('t-h').textContent = '00';
          document.getElementById('t-m').textContent = '00';
          document.getElementById('t-s').textContent = '00';
          return;
        }
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        
        if (document.getElementById('t-d')) document.getElementById('t-d').textContent = '00';
        document.getElementById('t-h').textContent = pad(h);
        document.getElementById('t-m').textContent = pad(m);
        document.getElementById('t-s').textContent = pad(s);
      }
      tick();
      setInterval(tick, 1000);
    })();`;

if (html.match(regex)) {
  html = html.replace(regex, oldTimer);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Revert Complete.');
} else {
  console.log('Could not find the new timer script.');
}
