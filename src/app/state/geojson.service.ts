import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeatureCollection } from 'src/app/interfaces/geojson';

@Injectable({
  providedIn: 'root',
})
export class GeoJsonService {
  url = 'http://localhost:3456/api/geojson/featurecollection';

  constructor(private readonly http: HttpClient) {}

  getFeatureCollection(id: string) {
    console.log(`${this.url}/${id}`);
    return this.http.get<FeatureCollection>(`${this.url}/${id}`);
  }
}
