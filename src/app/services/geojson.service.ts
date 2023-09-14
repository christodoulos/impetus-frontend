import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeatureCollection } from 'src/app/interfaces/geojson';

@Injectable({
  providedIn: 'root',
})
export class GeoJsonService {
  url = 'https://backend.atticadt.uwmh.eu/api/geojson/featurecollection';

  constructor(private readonly http: HttpClient) {}

  getFeatureCollection(id: string) {
    console.log(`${this.url}/${id}`);
    return this.http.get<FeatureCollection>(`${this.url}/${id}`);
  }
}
