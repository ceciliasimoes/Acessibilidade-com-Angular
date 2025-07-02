import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'accessible-carousel',
  imports: [CommonModule],
  template: `
    <div class="carousel" role="region" aria-label="Carrossel de imagens">
      <div
        class="carousel-image"
        role="group"
        [attr.aria-roledescription]="
          'slide ' + (currentIndex + 1) + ' de ' + images.length
        "
      >
        <img
          [src]="images[currentIndex].url"
          [alt]="images[currentIndex].alt"
        />
        <p aria-live="polite">{{ images[currentIndex].description }}</p>
      </div>

      <div class="controls">
        <button (click)="prev()" [disabled]="currentIndex === 0">
          Anterior
        </button>
        <button
          (click)="next()"
          [disabled]="currentIndex === images.length - 1"
        >
          Próximo
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .carousel {
        max-width: 400px;
        margin: auto;
        text-align: center;
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 8px;
      }

      .carousel img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
      }

      .controls button {
        margin: 8px;
        padding: 8px 16px;
      }
    `,
  ],
})
export class CarouselAccessibleComponent {
  currentIndex = 0;

  images = [
    {
      url: '/assets/1.jpg',
      alt: 'Conjunto de dados coloridos, incluindo um dado tetraédrico verde com os números 1, 2 e 3 visíveis, cercado por outros dados com pontos brancos.',
      description:
        'Descrição da imagem 1: Conjunto de dados coloridos, incluindo um dado tetraédrico verde com os números 1, 2 e 3 visíveis, cercado por outros dados com pontos brancos.',
    },
    {
      url: '/assets/2.jpg',
      alt: 'Dado translúcido de seis faces na cor laranja, com a face número cinco voltada para cima, cercado por outros dados coloridos ao fundo',
      description:
        'Descrição da imagem 2: Dado translúcido de seis faces na cor laranja, com a face número cinco voltada para cima, cercado por outros dados coloridos ao fundo',
    },
    {
      url: '/assets/3.jpg',
      alt: 'Dado azul translúcido de vinte faces, com os números 19, 5 e 2 visíveis, sobre uma superfície roxa e cercado por outros dados coloridos.',
      description:
        'Descrição da imagem 3: Dado azul translúcido de vinte faces, com os números 19, 5 e 2 visíveis, sobre uma superfície roxa e cercado por outros dados coloridos.',
    },
  ];

  next() {
    if (this.currentIndex < this.images.length - 1) this.currentIndex++;
  }

  prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }
}
