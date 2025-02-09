import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.scss'
})
export class ProposalComponent {
  accepted = false;
  noButtonPosition = { x: 0, y: 0 };

  moveNoButton() {
    const buttonWidth = 100; // Ancho del botón "No"
    const buttonHeight = 40; // Alto del botón "No"
    
    // Límites máximos (1080p: 1920x1080)
    const maxScreenWidth = 720;
    const maxScreenHeight = 480;
  
    // Ajustar al tamaño real de la pantalla si es menor a 1080p
    const effectiveWidth = Math.min(window.innerWidth, maxScreenWidth);
    const effectiveHeight = Math.min(window.innerHeight, maxScreenHeight);
  
    // Calcular posición sin salir de los límites
    this.noButtonPosition = {
      x: Math.random() * (effectiveWidth - buttonWidth),
      y: Math.random() * (effectiveHeight - buttonHeight)
    };
  }

  accept() {
    this.accepted = true;
  }
}
