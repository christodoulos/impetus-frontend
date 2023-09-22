import { Injectable } from '@angular/core';
import { LngLatLike } from 'mapbox-gl';
import { MapService } from './map.service';
import { Store } from '@ngrx/store';
import { AppState, mapload, maploaded } from 'src/app/state';

@Injectable({
  providedIn: 'root',
})
export class MapPlacesService {
  map = this.mapService.map;

  constructor(private mapService: MapService, private store: Store<AppState>) {}

  places(place: string) {
    switch (place) {
      case 'attica':
        return {
          center: {
            lng: 23.70585417391692,
            lat: 38.01577475657271,
          },
          zoom: 9.097581678448197,
          pitch: 0,
          bearing: 0,
        };
      case 'europe':
        return {
          center: {
            lng: 15.164831706104877,
            lat: 53.69874679296251,
          },
          zoom: 3.3926060103197466,
          pitch: 0,
          bearing: 0,
        };
      case 'athens-plant-nursery':
        return {
          center: [23.783535537759576, 37.986796706691095] as LngLatLike,
          zoom: 16.777210158888213,
          bearing: 122.61132170386838,
          pitch: 81.0008753894744,
        };
      case 'hellinikon-flood':
        return {
          center: [23.73508263685423, 37.87729612062206] as LngLatLike,
          zoom: 15.26,
          bearing: 46.8,
          pitch: 75.5,
        };
      case 'kokkotou-vineyards':
        return {
          center: [23.89076532854162, 38.12430221183547] as LngLatLike,
          zoom: 17,
          bearing: 90,
          pitch: 50,
        };
      default:
        return {};
    }
  }

  flyTo(place: string) {
    this.store.dispatch(mapload());
    this.map.flyTo(this.places(place));
    this.map.once('moveend', () => {
      this.store.dispatch(maploaded());
    });
  }
}
