import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from 'src/app/map/map.service';
import { Map } from 'mapbox-gl';
import { FeatureCollection } from 'src/app/interfaces/geojson';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-farmair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farmair.component.html',
  styleUrls: ['./farmair.component.scss'],
})
export class FarmairComponent implements OnInit, OnDestroy {
  map = this.mapService.map;
  subscription: Subscription | null = null;
  constructor(
    private mapService: MapService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.mapService.flyToKokkotouVineyards();

    this.subscription = this.localStorageService.storage$.subscribe((data) => {
      console.log('LOCAL STORAGE DATA', data);
      this.removeLayersAndSources();

      const farmair: { [key: string]: string } = JSON.parse(data['farmair']);
      const { vineyard, date, layer, geojson } = farmair;

      // this.map.fitBounds(
      //   (geojson as unknown as FeatureCollection).properties['bbox']
      // );

      // What a terrible situation here :-(
      let _vineyard = vineyard;
      if (vineyard === 'C.S. WINERY') {
        _vineyard = 'cswinery';
      } else if (vineyard === 'chardonay oinodiadromes') {
        _vineyard = 'chardonayoinodiadromes';
      }

      const tilesRootURL = 'https://atticadt.uwmh.eu/tiles';
      const tilesURL = `${tilesRootURL}/${_vineyard}/${date}/${layer}/{z}/{x}/{y}.png`;
      this.farmairAnalysisLayer(
        this.map,
        vineyard,
        geojson as unknown as FeatureCollection,
        tilesURL
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.removeLayersAndSources();
  }

  removeLayersAndSources() {
    if (this.map.getLayer('C.S. WINERY-farmair-layer')) {
      this.map.removeLayer('C.S. WINERY-farmair-layer');
      this.map.removeSource('C.S. WINERY-farmair-source');
    }
    if (this.map.getLayer('chardonay oinodiadromes-farmair-layer')) {
      this.map.removeLayer('chardonay oinodiadromes-farmair-layer');
      this.map.removeSource('chardonay oinodiadromes-farmair-source');
    }
  }

  farmairAnalysisLayer(
    map: Map,
    name: string,
    geojson: FeatureCollection,
    tilesURL: string
  ) {
    console.log('ANALYSIS LAYER', name, geojson, tilesURL);
    if (map.getLayer(`${name}-farmair-layer`)) {
      map.removeLayer(`${name}-farmair-layer`);
      map.removeSource(`${name}-farmair-source`);
    }
    if (name && geojson) {
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
    } else return [];
  }
}
