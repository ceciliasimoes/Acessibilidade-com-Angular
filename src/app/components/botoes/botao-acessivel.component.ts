import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'accessible-button',
  imports: [CommonModule],
  template: `<button
      (click)="showToast(true)"
      aria-label="Botão acessível que exibe uma mensagem"
      role="button"
      type="button"
    >
      Clique aqui (acessível)
    </button>

    <!-- Simples toast visual -->
    <div *ngIf="toastMessage" class="toast">{{ toastMessage }}</div>`,
  styles: `.toast {
        background-color: #333;
        color: white;
        padding: 12px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        border-radius: 6px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
        button {
        margin: 10px;
        padding: 10px 20px;
        }
    `,
})
export class ButtonAccessibleComponent {
  toastMessage: string | null = null;

  showToast(isAccessible: boolean) {
    this.toastMessage = isAccessible ? 'Eu sou acessível' : 'Não sou acessível';
    setTimeout(() => (this.toastMessage = null), 2000);
  }
}
