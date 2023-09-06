import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'regional/meteorological-heatmaps',
    data: {
      title: 'Meteorological Heatmaps',
    },
    loadComponent: () =>
      import('./regional/heatmaps/heatmaps.component').then(
        (m) => m.HeatmapsComponent
      ),
  },
  {
    path: 'european-services/nuts-explorer',
    data: {
      title: 'NUTS Explorer',
    },
    loadComponent: () =>
      import('./european/nuts-explorer/nuts-explorer.component').then(
        (m) => m.NutsExplorerComponent
      ),
  },

  {
    path: 'european-services/eurostat-explorer',
    data: {
      title: 'Eurostat Explorer',
    },
    loadComponent: () =>
      import('./eurostat/eurostat-tool/eurostat-tool.component').then(
        (m) => m.EurostatToolComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/welcome/welcome.component').then(
        (m) => m.WelcomeComponent
      ),
  },
  { path: '**', redirectTo: '/european-services/nuts-explorer' },
];
