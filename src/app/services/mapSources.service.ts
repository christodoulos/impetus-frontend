import { Injectable } from '@angular/core';
import { MapService } from '.';
import { Store } from '@ngrx/store';
import { AppState, selectHellinikonInnnundation } from '../state';
import { Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapSourcesService {
  map = this.mapService.map;

  innundationHellinikon$ = this.store.select(selectHellinikonInnnundation);

  constructor(private mapService: MapService, private store: Store<AppState>) {}

  addHellinikonInnundation() {
    const loaded = new Subject<void>();
    this.innundationHellinikon$
      .pipe(takeUntil(loaded))
      .subscribe((innundation) => {
        if (innundation) {
          this.map.addSource('hellinikon-innundation', {
            type: 'geojson',
            data: innundation,
          });
          loaded.next();
          loaded.complete();
        }
      });
  }
}
