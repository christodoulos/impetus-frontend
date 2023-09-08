import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from 'src/app/map/map.service';

import * as $ from 'jquery';
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
  plantNurseryLayer = this.mapService.plantNurseryLayer;
  legend: AthensPlantNurseryLegendControl | null = null;

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    const mapWidth = $('#map').width() ?? 0;
    const mapHeight = $('#map').height() ?? 0;
    $('#map').width(mapWidth);
    $('#map').height(mapHeight);
    this.mapService.flyToAthensPlantNursery();

    this.map.addLayer(this.plantNurseryLayer);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.legend = new AthensPlantNurseryLegendControl(this.viewContainerRef);
      this.map.addControl(this.legend, 'top-left');
    }, 1000);
  }

  ngOnDestroy(): void {
    this.map.removeLayer(this.plantNurseryLayer.id);
    if (this.legend) this.map.removeControl(this.legend);
  }
}
