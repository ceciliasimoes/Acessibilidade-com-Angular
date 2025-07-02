import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'accessible-accordion',
  imports: [CommonModule],
  template: `
    <div id="accordionGroup" class="accordion">
      <h3>
        <button
          type="button"
          class="accordion-trigger"
          [attr.aria-expanded]="isExpanded('sect1')"
          aria-controls="sect1"
          id="accordion1id"
          (click)="toggle('sect1')"
        >
          <span class="accordion-title">
            Personal Information
            <span class="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div
        id="sect1"
        role="region"
        aria-labelledby="accordion1id"
        class="accordion-panel"
        [attr.hidden]="!isExpanded('sect1') ? '' : null"
      >
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
        <button
          type="button"
          class="accordion-trigger"
          [attr.aria-expanded]="isExpanded('sect2')"
          aria-controls="sect2"
          id="accordion2id"
          (click)="toggle('sect2')"
        >
          <span class="accordion-title">
            Billing Address
            <span class="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div
        id="sect2"
        role="region"
        aria-labelledby="accordion2id"
        class="accordion-panel"
        [attr.hidden]="!isExpanded('sect2') ? '' : null"
      >
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
        <button
          type="button"
          class="accordion-trigger"
          [attr.aria-expanded]="isExpanded('sect3')"
          aria-controls="sect3"
          id="accordion3id"
          (click)="toggle('sect3')"
        >
          <span class="accordion-title">
            Shipping Address
            <span class="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div
        id="sect3"
        role="region"
        aria-labelledby="accordion3id"
        class="accordion-panel"
        [attr.hidden]="!isExpanded('sect3') ? '' : null"
      >
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
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionAccessibleComponent {
  expandedId: string | null = 'sect1';

  toggle(id: string) {
    this.expandedId = this.expandedId === id ? null : id;
  }

  isExpanded(id: string): boolean {
    return this.expandedId === id;
  }
}
