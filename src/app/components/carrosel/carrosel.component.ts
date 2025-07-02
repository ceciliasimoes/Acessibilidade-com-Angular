import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'no-accessible-carousel',
  imports: [CommonModule],
  template: `
    <div class="carousel">
      <div class="carousel-image">
        <img [src]="images[currentIndex].url" />
        <p>{{ images[currentIndex].description }}</p>
      </div>

      <div class="controls">
        <button (click)="prev()">Anterior</button>
        <button (click)="next()">Próximo</button>
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
export class CarouselComponent {
  currentIndex = 0;


  images = [
    {
      url: '/assets/1.jpg',
      description:
        'Descrição da imagem 1: Conjunto de dados coloridos, incluindo um dado tetraédrico verde com os números 1, 2 e 3 visíveis, cercado por outros dados com pontos brancos.',
    },
    {
      url: '/assets/2.jpg',
      description:
        'Descrição da imagem 2: Dado translúcido de seis faces na cor laranja, com a face número cinco voltada para cima, cercado por outros dados coloridos ao fundo',
    },
    {
      url: '/assets/3.jpg',
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
