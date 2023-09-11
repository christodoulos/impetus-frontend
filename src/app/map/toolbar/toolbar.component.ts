import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from 'src/app/ui/icon-button/icon-button.component';
import { MapService } from '../map.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWelcomeComponent } from 'src/app/modals/welcome/welcome.component';
import { ModalHeatmapsComponent } from 'src/app/modals/heatmaps/heatmaps.component';
import { ApnplcModalComponent } from 'src/app/modals/apnplc/apnplc.component';
import { FarmairModalComponent } from 'src/app/modals/farmair/farmair.component';

@Component({
  selector: 'map-toolbar',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class MapToolbarComponent implements OnChanges {
  @Input() routeInfo = '';

  constructor(private mapService: MapService, private modalService: NgbModal) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['routeInfo']) {
      console.log('ROUTEINFO CHANGES', changes['routeInfo'].currentValue);
    }
  }

  onClick(id: string): void {
    console.log(id);
    switch (id) {
      case 'save':
        this.mapService.downloadMap();
        break;
      case 'resize':
        this.logMapDetails();
        break;
      case 'info':
        this.showInfoModal();
        break;
      default:
        console.log(id);
        break;
    }
  }

  showInfoModal(): void {
    switch (this.routeInfo) {
      case 'welcome':
        this.modalService.open(ModalWelcomeComponent, {
          size: 'lg',
          centered: true,
        });
        break;
      case 'heatmaps':
        this.modalService.open(ModalHeatmapsComponent, {
          size: 'lg',
          centered: true,
        });
        break;
      case 'athens-plant-nursery':
        this.modalService.open(ApnplcModalComponent, {
          size: 'lg',
          centered: true,
        });
        break;
      case 'farmair':
        this.modalService.open(FarmairModalComponent, {
          size: 'lg',
          centered: true,
        });
        break;
      default:
        break;
    }
  }

  logMapDetails(): void {
    const map = this.mapService.map;
    console.log('CENTER', map.getCenter());
    console.log('ZOOM', map.getZoom());
    console.log('PITCH', map.getPitch());
    console.log('BEARING', map.getBearing());
    console.log('STYLE', map.getStyle());
  }
}
