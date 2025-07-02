import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'no-accessible-button',
  imports: [CommonModule],
  template: `
    <button (click)="showToast()">Clique aqui</button>
    <div *ngIf="toastMessage" class="toast">{{ toastMessage }}</div>
  `,
  styles: [
    `
      button {
        padding: 10px 20px;
        background-color: #c0392b;
        color: white;
        border: none;
        margin: 10px;
        cursor: pointer;
      }
      .toast {
        background-color: #333;
        color: white;
        padding: 12px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        border-radius: 6px;
      }
    `,
  ],
})
export class ButtonComponent {
  toastMessage: string | null = null;

  showToast() {
    this.toastMessage = 'Não sou acessível';
    setTimeout(() => (this.toastMessage = null), 2000);
  }
}
