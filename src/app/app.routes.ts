import { Routes } from '@angular/router';
import { HeatmapsComponent } from './regional/heatmaps/heatmaps.component';

export const routes: Routes = [
  {
    path: 'regional-services/meteorological-heatmaps',
    loadComponent: () =>
      import('./regional/heatmaps/heatmaps.component').then(
        (m) => m.HeatmapsComponent
      ),
  },
];
