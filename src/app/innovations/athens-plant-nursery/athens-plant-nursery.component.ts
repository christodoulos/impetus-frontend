import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from 'src/app/map/map.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-athens-plant-nursery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './athens-plant-nursery.component.html',
  styleUrls: ['./athens-plant-nursery.component.scss'],
})
export class AthensPlantNurseryComponent implements OnInit, OnDestroy {
  map = this.mapService.map;
  plantNurseryLayer = this.mapService.plantNurseryLayer;
  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    const mapWidth = $('#map').width() ?? 0;
    const mapHeight = $('#map').height() ?? 0;
    $('#map').width(mapWidth);
    $('#map').height(mapHeight);
    this.mapService.flyToAthensPlantNursery();
    this.map.addLayer(this.plantNurseryLayer);
  }

  ngOnDestroy(): void {
    this.map.removeLayer(this.plantNurseryLayer.id);
  }
}
