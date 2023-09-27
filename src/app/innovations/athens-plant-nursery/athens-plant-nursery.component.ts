import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from 'src/app/services/map.service';

import { AthensPlantNurseryLegendControl } from './athens-plant-nursery.legend';
import { MapPlacesService } from '@atticadt/services';

@Component({
  selector: 'app-athens-plant-nursery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './athens-plant-nursery.component.html',
  styleUrls: ['./athens-plant-nursery.component.scss'],
})
export class AthensPlantNurseryComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  map = this.mapService.map;
  legend: AthensPlantNurseryLegendControl | null = null;
  // tankLayer = this.mapService.customLayers['plant-nursery'];

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  constructor(
    private mapService: MapService,
    private mapPlacesService: MapPlacesService
  ) {}

  ngOnInit(): void {
    this.mapPlacesService.flyTo('athens-plant-nursery');
    // this.map.addLayer(this.tankLayer);

    this.map.loadImage('/assets/images/apn-sb.png', (error, image) => {
      if (error) throw error;
      this.map.addImage('apn', image as any);

      this.map.addLayer({
        id: 'layer-with-image',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: [23.781372557061157, 37.988260208268386], // replace with your coordinates
                },
              },
            ],
          },
        },
        layout: {
          'icon-image': 'apn',
          // add more layout properties if needed
        },
      });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.legend = new AthensPlantNurseryLegendControl(this.viewContainerRef);
      this.map.addControl(this.legend, 'top-left');
    }, 1000);
  }

  ngOnDestroy(): void {
    // this.map.removeLayer(this.tankLayer.id);
    if (this.legend) this.map.removeControl(this.legend);
    this.map.removeLayer('layer-with-image');
    // this.map.removeImage('apn');
    this.map.removeSource('layer-with-image');
  }
}
