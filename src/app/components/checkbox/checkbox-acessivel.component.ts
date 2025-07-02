import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'accessible-checkbox',
  imports: [CommonModule],
  template: `
    <h3 id="id-group-label">Sandwich Condiments</h3>
    <div role="group" aria-labelledby="id-group-label">
      <ul class="checkboxes">
        <li *ngFor="let option of options; let i = index">
          <div
            role="checkbox"
            [attr.aria-checked]="option.checked"
            tabindex="0"
            (click)="toggle(i)"
            (keydown)="onKeydown($event, i)"
          >
            {{ option.label }}
          </div>
        </li>
      </ul>
    </div>
  `,
  styles: `
    ul.checkboxes {
        list-style: none;
        margin: 0;
        padding: 0;
        padding-left: 1em;
        }

        ul.checkboxes li {
        list-style: none;
        margin: 1px;
        padding: 0;
        }

        [role="checkbox"] {
        display: inline-block;
        padding: 4px 8px;
        cursor: pointer;
        }

        [role="checkbox"]::before {
        position: relative;
        top: 1px;
        left: -4px;
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='16' width='16' style='forced-color-adjust: auto;'%3E%3Crect x='2' y='2' height='13' width='13' rx='2' stroke='currentcolor' stroke-width='1' fill-opacity='0' /%3E%3C/svg%3E");
        }

        [role="checkbox"][aria-checked="true"]::before {
        position: relative;
        top: 1px;
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='16' width='16' style='forced-color-adjust: auto;'%3E%3Crect x='2' y='2' height='13' width='13' rx='2' stroke='currentcolor' stroke-width='1' fill-opacity='0' /%3E%3Cpolyline points='4,8 7,12 12,5' fill='none' stroke='currentcolor' stroke-width='2' /%3E%3C/svg%3E");
        }

        [role="checkbox"]:focus,
        [role="checkbox"]:hover {
        padding: 2px 6px;
        border: 2px solid #005a9c;
        border-radius: 5px;
        background-color: #def;
        }

        [role="checkbox"]:hover {
        cursor: pointer;
        }
  `,
})
export class CheckboxAccessibleComponent {
  options = [
    { label: 'Lettuce', checked: false },
    { label: 'Tomato', checked: true },
    { label: 'Mustard', checked: false },
    { label: 'Sprouts', checked: false },
  ];

  toggle(index: number) {
    this.options[index].checked = !this.options[index].checked;
  }

  onKeydown(event: KeyboardEvent, index: number) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.toggle(index);
    }
  }
}
