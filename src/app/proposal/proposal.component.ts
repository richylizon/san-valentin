import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.scss'
})
export class ProposalComponent {
  accepted = false;
  noButtonPosition = { x: 0, y: 0 };
  //verificationCode: string = '';
  verificationCode: string = '';
  enteredCode: string = '';
  showCodeInput = false;
  errorMessage: string = '';

  constructor() {
    this.generateVerificationCode();
  }

  generateVerificationCode() {
    // Generar código de 6 dígitos alfanumérico
    this.verificationCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    //this.verificationCode = 'TEAMO' ;
  } 

  sendWhatsAppCode() {
    const phoneNumber = '59177449442'; // Reemplazar con tu número de teléfono
    //const message = `Hola Mi Niña! 🌹\nTu código de verificación es: ${this.verificationCode}`;
    const message = `Hola Mi Niña! 🌹\nTu código de verificación es: ${this.verificationCode}`;
    
    // Abrir WhatsApp con el mensaje predefinido
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }

  accept() {
    this.showCodeInput = true;
    this.sendWhatsAppCode();
  }

  validateCode() {
    console.log('aca',this.verificationCode);
    
    if (this.enteredCode === this.verificationCode) {
      this.accepted = true;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Código incorrecto. Por favor, revisa el mensaje de WhatsApp';
      this.enteredCode = '';
      setTimeout(() => this.errorMessage = '', 3000);
    }
  }

  moveNoButton() {
    const buttonWidth = 100;
    const buttonHeight = 40;
    const maxScreenWidth = 720;
    const maxScreenHeight = 480;
    const effectiveWidth = Math.min(window.innerWidth, maxScreenWidth);
    const effectiveHeight = Math.min(window.innerHeight, maxScreenHeight);

    this.noButtonPosition = {
      x: Math.random() * (effectiveWidth - buttonWidth),
      y: Math.random() * (effectiveHeight - buttonHeight)
    };
  }
}