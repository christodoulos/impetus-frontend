import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'regional-services/meteorological-heatmaps',
    loadComponent: () =>
      import('./regional/heatmaps/heatmaps.component').then(
        (m) => m.HeatmapsComponent
      ),
  },
  {
    path: 'european-services/nuts-explorer',
    loadComponent: () =>
      import('./european/nuts-explorer/nuts-explorer.component').then(
        (m) => m.NutsExplorerComponent
      ),
  },
];
