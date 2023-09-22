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
  tankLayer = this.mapService.customLayers['plant-nursery'];

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.flyTo('athens-plant-nursery');
    this.map.addLayer(this.tankLayer);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.legend = new AthensPlantNurseryLegendControl(this.viewContainerRef);
      this.map.addControl(this.legend, 'top-left');
    }, 1000);
  }

  ngOnDestroy(): void {
    this.map.removeLayer(this.tankLayer.id);
    if (this.legend) this.map.removeControl(this.legend);
  }
}
