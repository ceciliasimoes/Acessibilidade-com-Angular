import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'no-accessible-breadcrumb',
  imports: [CommonModule],
  template: `
    <div class="breadcrumb">
      <ul>
        <li>
          <a href="https://www.w3.org/WAI/ARIA/apg/"
            >WAI-ARIA Authoring Practices Guide (APG)</a
          >
        </li>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns">Patterns</a></li>
        <li>
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb"
            >Breadcrumb Pattern</a
          >
        </li>
        <li><a href="">Breadcrumb Example</a></li>
      </ul>
    </div>
  `,
  styles: `
    .breadcrumb {
      padding: 0.8em 1em;
      border: 1px solid hsl(0deg 0% 90%);
      border-radius: 4px;
      background: hsl(300deg 14% 97%);
    }

    .breadcrumb ul {
      margin: 0;
      padding-left: 0;
      list-style: none;
    }

    .breadcrumb li {
      display: inline;
    }

    .breadcrumb li + li::before {
      display: inline-block;
      margin: 0 0.25em;
      transform: rotate(15deg);
      border-right: 0.1em solid currentcolor;
      height: 0.8em;
      content: "";
    }

    .breadcrumb li:last-child a {
      color: #000;
      font-weight: 700;
      text-decoration: none;
    }
  `,
})
export class BreadcrumbComponent {}
