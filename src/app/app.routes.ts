import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'repo',
    loadComponent: () => import('./repo/repo.page').then( m => m.RepoPage)
  },
  {
    path: 'hub',
    loadComponent: () => import('./hub/hub.page').then( m => m.HubPage)
  },
];
