import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'no-accessible-accordion',
  imports: [CommonModule],
  template: `
    <div class="accordion">
      <h3>
        <button (click)="toggle('sect1')">Personal Information</button>
      </h3>
      <div class="accordion-panel" *ngIf="isExpanded('sect1')">
        <fieldset>
          <p>
            <label for="cufc1">Name<span aria-hidden="true">*</span>:</label>
            <input
              type="text"
              value=""
              name="Name"
              id="cufc1"
              class="required"
              aria-required="true"
            />
          </p>
          <p>
            <label for="cufc2">Email<span aria-hidden="true">*</span>:</label>
            <input
              type="text"
              value=""
              name="Email"
              id="cufc2"
              aria-required="true"
            />
          </p>
        </fieldset>
      </div>

      <h3>
        <button (click)="toggle('sect2')">Billing Address</button>
      </h3>
      <div class="accordion-panel" *ngIf="isExpanded('sect2')">
        <fieldset>
          <p>
            <label for="b-add1">Address 1:</label>
            <input type="text" name="b-add1" id="b-add1" />
          </p>
          <p>
            <label for="b-add2">Address 2:</label>
            <input type="text" name="b-add2" id="b-add2" />
          </p>
        </fieldset>
      </div>

      <h3>
        <button (click)="toggle('sect3')">Shipping Address</button>
      </h3>
      <div class="accordion-panel" *ngIf="isExpanded('sect3')">
        <fieldset>
          <p>
            <label for="m-add1">Address 1:</label>
            <input type="text" name="m-add1" id="m-add1" />
          </p>
          <p>
            <label for="m-add2">Address 2:</label>
            <input type="text" name="m-add2" id="m-add2" />
          </p>
        </fieldset>
      </div>
    </div>
  `,
  styles: `
    .accordion {
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 20em;
        }

        .accordion h3 {
        margin: 0;
        }

        .accordion button {
        width: 100%;
        padding: 1em;
        text-align: left;
        border: none;
        background: #eee;
        cursor: pointer;
        }

        .accordion-panel {
        padding: 1em;
        background: #f9f9f9;
        }

        fieldset {
        border: 0;
        margin: 0;
        padding: 0;
        }

        input {
        display: block;
        margin-bottom: 10px;
        padding: 0.3em;
        }

  `,
})
export class AccordionComponent {
  expandedId: string | null = 'sect1';

  toggle(id: string) {
    this.expandedId = this.expandedId === id ? null : id;
  }

  isExpanded(id: string): boolean {
    return this.expandedId === id;
  }
}
