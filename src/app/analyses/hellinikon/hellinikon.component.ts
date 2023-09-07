import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from 'src/app/map/map.service';

@Component({
  selector: 'app-hellinikon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hellinikon.component.html',
  styleUrls: ['./hellinikon.component.scss'],
})
export class HellinikonComponent implements OnInit, OnDestroy {
  map = this.mapService.map;
  floodLayer = this.mapService.hellinikonFloodLayer;
  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    const mapWidth = $('#map').width() ?? 0;
    const mapHeight = $('#map').height() ?? 0;
    $('#map').width(mapWidth);
    $('#map').height(mapHeight);
    this.mapService.flyToHellinikonFlood();
    this.map.addLayer(this.floodLayer);
  }

  ngOnDestroy(): void {
    this.map.removeLayer(this.floodLayer.id);
  }
}
