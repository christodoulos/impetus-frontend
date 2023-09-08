import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AthensPlantNurseryService {
  url = 'https://backend.atticadt.uwmh.eu/api';

  constructor(private readonly http: HttpClient = inject(HttpClient)) {}

  getPlantNursery() {
    return this.http.get<any>(`${this.url}/plant-nursery`);
  }
}
