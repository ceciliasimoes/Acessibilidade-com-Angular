import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'no-accessible-tabs',
  imports: [CommonModule],
  template: `
    <div class="tab-buttons">
      <button
        *ngFor="let tab of tabs; let i = index"
        (click)="selectTab(i)"
        [class.active]="selectedIndex === i"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-content">
      {{ tabs[selectedIndex].content }}
    </div>
  `,
  styles: [
    `
      .tab-buttons button {
        padding: 10px;
        margin-right: 5px;
        border: none;
        background-color: #ddd;
        cursor: pointer;
      }
      .tab-buttons .active {
        background-color: #e67e22;
        color: white;
        font-weight: bold;
      }
      .tab-content {
        margin-top: 10px;
        padding: 10px;
        background: #f2f2f2;
      }
    `,
  ],
})
export class TabsComponent {
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
