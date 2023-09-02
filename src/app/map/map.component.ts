import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';
import { MapLayerEventType } from 'mapbox-gl';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map', { static: true }) mapDiv!: ElementRef;

  constructor(private service: MapService) {}

  // map!: mapboxgl.Map;

  ngAfterViewInit(): void {
    console.log(this.mapDiv);
    const { map } = this.service.newMap(this.mapDiv);
    // map.on('style.load', () => this.service.onStyleLoad(map));
    // map.on('load', () => this.service.onLoad(map));
    map.on('wheel', () => this.service.onWheel());
    map.on('boxzoomend', () => this.service.onBoxZoomEnd());
    map.on('rotateend', () => this.service.onRotateEnd());
    map.on('pitchend', () => this.service.onPitchEnd());
    map.on('dragend', () => this.service.onDragEnd());
  }

  ngOnDestroy(): void {
    // this.map.remove();
  }

  // initializeMap() {
  //   this.map = new mapboxgl.Map({
  //     accessToken:
  //       'pk.eyJ1IjoiaW1wZXR1cy1hdHRpY2FkdCIsImEiOiJjbGg4cTVzNjAwNGIyM2txdDd0emtwcDJ3In0._ciFuMcn9wcIwb2I6UJ-jA',
  //     container: this.mapId,
  //     style: 'mapbox://styles/mapbox/light-v10',
  //   });
  //   (window as any).mapboxgl = mapboxgl;
  // }
}
