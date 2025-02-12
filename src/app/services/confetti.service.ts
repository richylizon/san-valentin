import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {
  private confetti: any;

  constructor() {
    this.loadConfettiScript();
  }

  private loadConfettiScript() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    script.onload = () => {
      this.confetti = (window as any).confetti;
    };
    document.body.appendChild(script);
  }

  launchConfetti(options?: any) {
    if (this.confetti) {
      const defaults = {
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#f50057', '#ff90b5', '#ffffff']
      };
      this.confetti({ ...defaults, ...options });
    } else {
      console.warn('Confetti script not loaded yet!');
    }
  }

  romanticConfetti() {
    this.launchConfetti({
      particleCount: 300,
      spread: 100,
      scalar: 1.2,
      shapes: ['circle', 'heart'],
      colors: ['#ff4081', '#f50057', '#ff90b5']
    });
  }

  stopConfetti() {
    if (this.confetti) {
      this.confetti.reset();
    }
  }
}