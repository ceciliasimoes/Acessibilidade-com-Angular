import { Component, inject } from '@angular/core';
import { ButtonAccessibleComponent } from '../../components/botoes/botao-acessivel.component';
import { CarouselAccessibleComponent } from '../../components/carrosel/carrosel-acessivel.component';
import { AccordionAccessibleComponent } from '../../components/accordion/accordion-acessivel.component';
import { BreadcrumbAccessibleComponent } from '../../components/breadcrumb/breadcrumb-acessivel.component';
import { CheckboxAccessibleComponent } from '../../components/checkbox/checkbox-acessivel.component';
import { TabsAccessibleComponent } from '../../components/tab/tab-acessivel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessible-page',
  imports: [
    AccordionAccessibleComponent,
    ButtonAccessibleComponent,
    BreadcrumbAccessibleComponent,
    CarouselAccessibleComponent,
    CheckboxAccessibleComponent,
    TabsAccessibleComponent,
  ],
  templateUrl: './accessible-page.html',
  styleUrl: './accessible-page.scss',
})
export class AccessiblePage {
  protected router = inject(Router);
}
