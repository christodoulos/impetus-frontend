import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from 'src/app/ui/icon-button/icon-button.component';
import { MapService } from '../map.service';
import { AppState, getRouteData } from 'src/app/state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWelcomeComponent } from 'src/app/modals/welcome/welcome.component';
import { ModalHeatmapsComponent } from 'src/app/modals/heatmaps/heatmaps.component';
import { ApnplcModalComponent } from 'src/app/modals/apnplc/apnplc.component';

@Component({
  selector: 'map-toolbar',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class MapToolbarComponent implements OnInit {
  routeInfo$ = this.store.select(getRouteData).pipe(
    map((data) => {
      return data?.['info'];
    })
  );
  info = '';

  constructor(
    private mapService: MapService,
    private store: Store<AppState>,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.routeInfo$.subscribe((info) => {
      console.log(info);
      this.info = info;
    });
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
    switch (this.info) {
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
