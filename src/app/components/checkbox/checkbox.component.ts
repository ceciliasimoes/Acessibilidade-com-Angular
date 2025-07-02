import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'no-accessible-checkbox',
  imports: [CommonModule],
  template: `
    <h3>Sandwich Condiments</h3>
    <ul class="checkboxes">
      <li *ngFor="let option of options; let i = index">
        <div class="fake-checkbox" (click)="toggle(i)">
          <span [class.checked]="option.checked"></span> {{ option.label }}
        </div>
      </li>
    </ul>
  `,
  styles: `
    ul.checkboxes {
    list-style: none;
    padding: 0;
    }

    .fake-checkbox {
    padding: 8px;
    background: #eee;
    margin: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    }

    .fake-checkbox span {
    width: 16px;
    height: 16px;
    border: 1px solid #333;
    margin-right: 8px;
    display: inline-block;
    }

    .fake-checkbox span.checked {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='16' width='16' style='forced-color-adjust: auto;'%3E%3Crect x='2' y='2' height='13' width='13' rx='2' stroke='currentcolor' stroke-width='1' fill-opacity='0' /%3E%3Cpolyline points='4,8 7,12 12,5' fill='none' stroke='currentcolor' stroke-width='2' /%3E%3C/svg%3E");
    }

  `,
})
export class CheckboxComponent {
  options = [
    { label: 'Lettuce', checked: false },
    { label: 'Tomato', checked: true },
    { label: 'Mustard', checked: false },
    { label: 'Sprouts', checked: false },
  ];

  toggle(index: number) {
    this.options[index].checked = !this.options[index].checked;
  }
}
