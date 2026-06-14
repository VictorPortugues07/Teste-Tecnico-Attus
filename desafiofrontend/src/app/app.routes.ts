import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then((m) => m.Login),
  },
  {
    path: 'chamados',
    loadComponent: () => import('./features/chamados/listagem/listagem').then((m) => m.Listagem),
  },
  {
    path: 'chamados/novo',
    loadComponent: () =>
      import('./features/chamados/formulario/formulario').then((m) => m.Formulario),
  },

  {
    path: 'chamados/editar/:id',
    loadComponent: () =>
      import('./features/chamados/formulario/formulario').then((m) => m.Formulario),
  },
];
