import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  private router = inject(Router);

  protected redirect(accessible: boolean) {
    if (accessible) {
      this.router.navigate(['/acessivel']);
      return;
    }
    this.router.navigate(['/nao-acessivel']);
  }
}
