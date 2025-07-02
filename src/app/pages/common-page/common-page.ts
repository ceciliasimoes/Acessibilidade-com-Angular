import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/botoes/botao.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { CarouselComponent } from '../../components/carrosel/carrosel.component';
import { TabsComponent } from '../../components/tab/tab.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-page',
  imports: [
    AccordionComponent,
    ButtonComponent,
    BreadcrumbComponent,
    CarouselComponent,
    CheckboxComponent,
    TabsComponent,
    CommonModule,
  ],
  templateUrl: './common-page.html',
  styleUrl: './common-page.scss',
})
export class CommonPage {
  protected router = inject(Router);
}
