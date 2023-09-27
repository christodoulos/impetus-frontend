import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconButtonComponent } from 'src/app/ui/icon-button/icon-button.component';

import { ModalsService, MapService } from '@atticadt/services';

@Component({
  selector: 'map-toolbar',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class MapToolbarComponent {
  @Input() routeInfo = '';

  constructor(
    private mapService: MapService,
    private modalsService: ModalsService
  ) {}

  onClick(id: string): void {
    switch (id) {
      case 'save':
        this.mapService.downloadMap();
        break;
      case 'mapinfo':
        this.logMapDetails();
        break;
      case 'help':
        this.modalsService.showHelp();
        break;
      case 'info':
        this.showInfoModal();
        break;
      default:
        break;
    }
  }

  showInfoModal(): void {
    switch (this.routeInfo) {
      case 'about':
        this.modalsService.showAbout();
        break;
      case 'welcome':
        this.modalsService.showHelp();
        break;
      case 'heatmaps':
        this.modalsService.showHeatMaps();
        break;
      case 'athens-plant-nursery':
        this.modalsService.showAthensPlantNursery();
        break;
      case 'farmair':
        this.modalsService.showFarmAir();
        break;
      case 'subsol':
        this.modalsService.showSubsol();
        break;
      default:
        break;
    }
  }

  logMapDetails(): void {
    const map = this.mapService.map;
    const mapDetails = {
      center: map.getCenter(),
      zoom: map.getZoom(),
      pitch: map.getPitch(),
      bearing: map.getBearing(),
    };
    console.log('MAP DETAILS', mapDetails);
  }
}
