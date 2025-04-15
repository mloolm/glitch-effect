// glitch-effect.js
class GlitchEffect {
    constructor(container, imageUrl, options = {}) {
      this.container = container;
      this.imageUrl = imageUrl;
      this.intensity = options.intensity || 1;
      this.noiseEnabled = options.noise !== false;
  
      this.injectStyles();
      this.prepareContainer();
      this.createStructure();
      this.initEffects();
    }
  
    injectStyles() {
      if (document.getElementById('glitch-styles')) return;
  
      const style = document.createElement('style');
      style.id = 'glitch-styles';
      style.textContent = `
        .ge-container {
          position: relative;
          overflow: hidden;
        }
        .ge-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.1s ease;
        }
        .ge-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          mix-blend-mode: screen;
          pointer-events: none;
          opacity: 0.6;
        }
        .ge-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.1) 0px,
            rgba(255, 255, 255, 0.1) 2px,
            transparent 2px,
            transparent 4px
          );
          mix-blend-mode: difference;
          opacity: 0;
          pointer-events: none;
        }
      `;
      document.head.appendChild(style);
    }
  
    prepareContainer() {
      this.container.classList.add('ge-container');
    }
  
    createStructure() {
      this.container.innerHTML = '';
  
      const base = document.createElement('img');
      base.src = this.imageUrl;
      base.className = 'ge-img';
      base.id = 'base';
  
      const r = base.cloneNode(); r.id = 'r'; r.classList.add('ge-overlay');
      const g = base.cloneNode(); g.id = 'g'; g.classList.add('ge-overlay');
      const b = base.cloneNode(); b.id = 'b'; b.classList.add('ge-overlay');
  
      this.container.appendChild(base);
      this.container.appendChild(r);
      this.container.appendChild(g);
      this.container.appendChild(b);
  
      if (this.noiseEnabled) {
        const noise = document.createElement('div');
        noise.className = 'ge-noise';
        noise.id = 'noise';
        this.container.appendChild(noise);
      }
    }
  
    initEffects() {
      const r = this.container.querySelector('#r');
      const g = this.container.querySelector('#g');
      const b = this.container.querySelector('#b');
      const noise = this.container.querySelector('#noise');
  
      const glitchLoop = () => {
        const rand = () => (Math.random() * 10 - 5) * this.intensity;
        const duration = Math.random() * 150 + 50;
  
        r.style.transform = `translate(${rand()}px, ${rand()}px)`;
        g.style.transform = `translate(${rand()}px, ${rand()}px)`;
        b.style.transform = `translate(${rand()}px, ${rand()}px)`;
  
        setTimeout(() => {
          r.style.transform = 'translate(0, 0)';
          g.style.transform = 'translate(0, 0)';
          b.style.transform = 'translate(0, 0)';
        }, duration);
  
        setTimeout(glitchLoop, Math.random() * 800 + 200);
      };
  
      glitchLoop();
  
      if (noise) {
        const noiseLoop = () => {
          noise.style.opacity = '0.4';
          noise.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
          setTimeout(() => {
            noise.style.opacity = '0';
          }, Math.random() * 200 + 100);
  
          setTimeout(noiseLoop, Math.random() * 2000 + 500);
        };
        noiseLoop();
      }
    }
  }
  
  export default GlitchEffect;
  