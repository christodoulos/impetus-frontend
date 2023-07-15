import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnDestroy {
  map!: mapboxgl.Map;

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  ngOnDestroy(): void {
    this.map.remove();
  }

  initializeMap() {
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiaW1wZXR1cy1hdHRpY2FkdCIsImEiOiJjbGg4cTVzNjAwNGIyM2txdDd0emtwcDJ3In0._ciFuMcn9wcIwb2I6UJ-jA',
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      zoom: 13,
      center: [4.899, 52.372],
    });
  }
}
