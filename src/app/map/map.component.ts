import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
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
  @Input() mapId = 'map';
  private map!: mapboxgl.Map;

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
      container: this.mapId,
      style: 'mapbox://styles/mapbox/light-v10',
    });
    (window as any).mapboxgl = mapboxgl;
  }

  addSource(id: string, source: mapboxgl.AnySourceData) {
    this.map.addSource(id, source);
  }

  removeSource(id: string) {
    if (this.map.getSource(id)) this.map.removeSource(id);
  }

  addLayer(layer: mapboxgl.AnyLayer) {
    this.map.addLayer(layer);
  }

  removeLayer(id: string) {
    if (this.map.getLayer(id)) this.map.removeLayer(id);
  }

  fitBounds(bounds: mapboxgl.LngLatBoundsLike) {
    this.map.fitBounds(bounds);
  }
}
