import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { AccessiblePage } from './pages/accessible-page/accessible-page';
import { CommonPage } from './pages/common-page/common-page';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
  },
  { path: 'acessivel', component: AccessiblePage },
  { path: 'nao-acessivel', component: CommonPage },
];
