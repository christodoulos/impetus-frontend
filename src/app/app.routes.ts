import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    data: { title: 'About the project', info: 'about' },
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'innovations/athens-plant-nursery',
    data: {
      title: 'Sewer Mining Technology',
      info: 'athens-plant-nursery',
    },
    loadComponent: () =>
      import(
        './innovations/athens-plant-nursery/athens-plant-nursery.component'
      ).then((m) => m.AthensPlantNurseryComponent),
  },
  {
    path: 'innovations/subsol',
    data: {
      title: 'Subsurface Water Solutions',
      info: 'subsol',
    },
    loadComponent: () =>
      import('./innovations/subsol/subsol.component').then(
        (m) => m.SubsolComponent
      ),
  },
  {
    path: 'innovations/farmair',
    data: {
      title: 'Plant Stress Detection',
      info: 'farmair',
    },
    loadComponent: () =>
      import('./innovations/farmair/farmair.component').then(
        (m) => m.FarmairComponent
      ),
  },
  {
    path: 'regional/meteorological-heatmaps',
    data: {
      title: 'Meteorological Heatmaps',
      info: 'heatmaps',
    },
    loadComponent: () =>
      import('./regional/heatmaps/heatmaps.component').then(
        (m) => m.HeatmapsComponent
      ),
  },
  {
    path: 'analyses/hellinikon',
    data: {
      title: 'Flood Risk Analysis',
      info: 'hellinikon',
    },
    loadComponent: () =>
      import('./analyses/hellinikon/hellinikon.component').then(
        (m) => m.HellinikonComponent
      ),
  },
  {
    path: 'european-services/nuts-explorer',
    data: {
      title: 'NUTS Explorer',
      info: 'nuts-explorer',
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
      info: 'eurostat-explorer',
    },
    loadComponent: () =>
      import('./eurostat/eurostat-tool/eurostat-tool.component').then(
        (m) => m.EurostatToolComponent
      ),
  },
  {
    path: '',
    data: {
      info: 'welcome',
    },
    loadComponent: () =>
      import('./layout/welcome/welcome.component').then(
        (m) => m.WelcomeComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
