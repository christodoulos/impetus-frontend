import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from 'src/app/map/map.service';
import * as $ from 'jquery';
import { Map } from 'mapbox-gl';
import { Feature, FeatureCollection } from 'src/app/interfaces/geojson';

@Component({
  selector: 'app-farmair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farmair.component.html',
  styleUrls: ['./farmair.component.scss'],
})
export class FarmairComponent implements OnInit, OnDestroy {
  map = this.mapService.map;
  tb = this.mapService.tb;
  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.flyToKokkotouVineyards();
    // this.mapService.setStyle('mapbox://styles/mapbox/satellite-streets-v12');
    // this.tb.terrain = false;
  }

  ngOnDestroy(): void {
    // this.mapService.setStyle('mapbox://styles/mapbox/streets-v12');
    // this.mapService.onMapLoad();
    // this.tb.terrain = true;
  }

  tilesSubpath(name: string) {
    switch (name) {
      case 'C.S. WINERY':
        return 'cswinery';
      case 'chardonay oinodiadromes':
        return 'chardonayoinodiadromes';
      default:
        return 'cswinery';
    }
  }

  buildTilesURL() {
    const tilesRootURL = 'https://atticadt.uwmh.eu/tiles';
    const vineyard = $('#vineyard').val();
    if (vineyard) {
      const subPath = this.tilesSubpath(`${vineyard}`);
      const date = $('#scanDate').val();
      if (date) {
        const layer = $('#layer').val();
        if (layer)
          return `${tilesRootURL}/${subPath}/${date}/${layer}/{z}/{x}/{y}.png`;
      }
    }
    return '';
  }

  vineyardBoundary(map: Map, name: string, geojson: FeatureCollection) {
    map.addSource(`${name}-source`, { type: 'geojson', data: geojson });
    map.addLayer({
      id: `${name}-boundary-layer`,
      type: 'line',
      source: `${name}-source`,
      layout: {},
      paint: {
        'line-color': '#000',
        'line-width': 3,
      },
    });
    map.fitBounds(geojson.properties['bbox']);
    return [`${name}-source`, `${name}-boundary-layer`];
  }

  farmairAnalysisLayer(
    map: Map,
    name: string,
    geojson: Feature,
    tilesURL: string
  ) {
    map.addSource(`${name}-farmair-source`, {
      type: 'raster',
      tiles: [tilesURL],
      bounds: geojson.properties['bbox'],
    });
    map.addLayer({
      id: `${name}-farmair-layer`,
      type: 'raster',
      source: `${name}-farmair-source`,
      minzoom: 5,
      maxzoom: 22,
    });
    return [`${name}-farmair-source`, `${name}-farmair-layer`];
  }
}
