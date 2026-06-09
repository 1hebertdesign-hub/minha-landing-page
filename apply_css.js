const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const flipClockCSS = `
    /* Estilo do Relógio Flip Customizado */
    .flip-clock {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-top: 1rem;
      margin-bottom: 2.5rem;
    }
    .flip-unit {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .flip-card {
      position: relative;
      background-color: #1c1b1b;
      border: 1px solid #3f4943;
      border-radius: 0.75rem;
      width: 75px;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px -4px rgba(231,196,51,0.1);
      overflow: hidden;
    }
    .flip-card::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.7);
      transform: translateY(-50%);
      z-index: 10;
    }
    .flip-card span {
      font-family: "Bebas Neue", sans-serif;
      font-size: 3.5rem;
      color: #e7c433;
      line-height: 1;
      z-index: 5;
    }
    .flip-label {
      font-size: 0.75rem;
      color: #bec9c1;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-top: 0.5rem;
    }
    @media (max-width: 640px) {
      .flip-card { width: 65px; height: 80px; }
      .flip-card span { font-size: 3rem; }
      .flip-clock { gap: 8px; }
    }
`;

// Insert CSS before </style>
if (!html.includes('Estilo do Relógio Flip Customizado')) {
  html = html.replace('</style>', flipClockCSS + '\n  </style>');
}

// Replace Tailwind Flip Clock with Custom Flip Clock HTML
const regexTailwindClock = /<div class="flex gap-4 mb-10 justify-center">[\s\S]*?<!-- Flip Box 3: Segundos -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i;

const newHTML = `      <div class="flip-clock">
        <!-- Flip Box 1: Horas -->
        <div class="flip-unit">
          <div class="flip-card">
            <span id="t-h">23</span>
          </div>
          <div class="flip-label">Horas</div>
        </div>
        
        <!-- Divider -->
        <div class="text-[#e7c433] text-4xl font-display leading-none mt-6 animate-pulse">:</div>

        <!-- Flip Box 2: Minutos -->
        <div class="flip-unit">
          <div class="flip-card">
            <span id="t-m">59</span>
          </div>
          <div class="flip-label">Min</div>
        </div>

        <!-- Divider -->
        <div class="text-[#e7c433] text-4xl font-display leading-none mt-6 animate-pulse">:</div>

        <!-- Flip Box 3: Segundos -->
        <div class="flip-unit">
          <div class="flip-card">
            <span id="t-s">09</span>
          </div>
          <div class="flip-label">Seg</div>
        </div>
      </div>`;

if (html.match(regexTailwindClock)) {
  html = html.replace(regexTailwindClock, newHTML);
} else {
  console.log("Could not find the old clock html to replace.");
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Update complete.');
