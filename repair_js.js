const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const anchorIndex = html.indexOf('  setInterval(tick, 1000);');

const endAnchorIndex = html.indexOf('    initParticleSystem(\'tech-particles\');');

if (anchorIndex !== -1 && endAnchorIndex !== -1) {
  const before = html.substring(0, anchorIndex + 26);
  const after = html.substring(endAnchorIndex);
  
  const insert = `
})();

    // ── FAQ ACCORDION ──
    document.querySelectorAll('.faq-item button').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var item = this.parentElement;
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function(el) { el.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      });
    });

    // ── FLOATING CTA: aparece após scroll ──
    var floatCta = document.getElementById('float-cta');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 600) {
        floatCta.style.display = 'block';
      } else {
        floatCta.style.display = 'none';
      }
    });
  
  </script>
  <script>
    // Particle Animation Reusable Logic
    function initParticleSystem(canvasId) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      let particlesArray = [];
      const numberOfParticles = window.innerWidth < 768 ? 30 : 50;

      function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 0.5;
          this.speedY = Math.random() * 0.5 + 0.1;
          this.speedX = (Math.random() - 0.5) * 0.2;
          this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
          this.y -= this.speedY;
          this.x += this.speedX;
          if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
          }
        }
        draw() {
          ctx.fillStyle = \`rgba(134, 215, 174, \${this.opacity})\`; // brand-primary color
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      function initParticles() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }
      }

      function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
        }
        requestAnimationFrame(animateParticles);
      }

      window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
      });

      resizeCanvas();
      initParticles();
      animateParticles();
    }

`;

  fs.writeFileSync('index.html', before + insert + after, 'utf8');
  console.log("Fixed!");
} else {
  console.log("Could not find anchors");
}
