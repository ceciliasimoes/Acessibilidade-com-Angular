import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'accessible-tabs',
  imports: [CommonModule],
  template: `
    <div role="tablist" aria-label="Abas de navegação">
      <button
        *ngFor="let tab of tabs; let i = index"
        role="tab"
        [attr.aria-selected]="selectedIndex === i"
        [attr.aria-controls]="'tabpanel-' + i"
        [id]="'tab-' + i"
        (click)="selectTab(i)"
        class="tab-button"
      >
        {{ tab.label }}
      </button>
    </div>

    <div
      *ngFor="let tab of tabs; let i = index"
      role="tabpanel"
      [attr.aria-labelledby]="'tab-' + i"
      [id]="'tabpanel-' + i"
      [hidden]="selectedIndex !== i"
      class="tab-panel"
    >
      {{ tab.content }}
    </div>
  `,
  styles: [
    `
      .tab-button {
        padding: 10px;
        margin-right: 8px;
        border: none;
        background: #eee;
        cursor: pointer;
      }
      .tab-button[aria-selected='true'] {
        background: #3498db;
        color: white;
        font-weight: bold;
      }
      .tab-panel {
        margin-top: 10px;
        padding: 10px;
        background: #f9f9f9;
      }
    `,
  ],
})
export class TabsAccessibleComponent {
  selectedIndex = 0;

  tabs = [
    { label: 'Aba 1', content: 'Conteúdo da aba 1' },
    { label: 'Aba 2', content: 'Conteúdo da aba 2' },
    { label: 'Aba 3', content: 'Conteúdo da aba 3' },
  ];

  selectTab(index: number) {
    this.selectedIndex = index;
  }
}
