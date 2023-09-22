import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from 'src/app/map/map.component';
import { SelectComponent } from 'src/app/ui/select/select.component';
import { Store } from '@ngrx/store';
import {
  AppState,
  nuts0,
  nuts1,
  nuts2,
  nuts3,
  nutsIsLoading,
  selectNuts,
} from 'src/app/state';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { FeatureCollection } from 'src/app/interfaces/geojson';
import { MapService } from 'src/app/services/map.service';
import { GeoJsonProperties } from 'geojson';
import { NutsExplorerLegendControl } from './nuts-explorer.legend';

@Component({
  selector: 'app-nuts-explorer',
  standalone: true,
  imports: [CommonModule, SelectComponent, MapComponent],
  templateUrl: './nuts-explorer.component.html',
  styleUrls: ['./nuts-explorer.component.scss'],
})
export class NutsExplorerComponent implements OnInit, OnDestroy {
  map = this.mapService.map;
  tb = this.mapService.tb;
  legend: NutsExplorerLegendControl | null = null;

  nuts_id = '';
  name_latin = '';
  nuts_name = '';

  private onDestroy$ = new Subject<void>();

  isLoading$ = this.store.select(nutsIsLoading);

  nuts0$ = this.store.select(nuts0);
  nuts1$ = this.store.select(nuts1);
  nuts2$ = this.store.select(nuts2);
  nuts3$ = this.store.select(nuts3);
  nuts0: FeatureCollection | null = null;
  nuts1: FeatureCollection | null = null;
  nuts2: FeatureCollection | null = null;
  nuts3: FeatureCollection | null = null;

  hoveredPolygonId = '';
  nutsProperties: GeoJsonProperties | null = null;

  subscriptions: Subscription[] = [];

  nutsSelection$ = this.store.select(selectNuts);

  constructor(private store: Store<AppState>, private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.flyTo('europe');
    this.mapService.zeroExaggeration();

    this.subscriptions.push(
      this.nuts0$.subscribe((data) => {
        this.nuts0 = data;
      })
    );
    this.subscriptions.push(
      this.nuts1$.subscribe((data) => {
        this.nuts1 = data;
      })
    );
    this.subscriptions.push(
      this.nuts2$.subscribe((data) => {
        this.nuts2 = data;
      })
    );
    this.subscriptions.push(
      this.nuts3$.subscribe((data) => {
        this.nuts3 = data;
      })
    );

    this.legend = new NutsExplorerLegendControl(
      this.nuts_id,
      this.name_latin,
      this.nuts_name
    );

    this.map.addControl(this.legend, 'top-left');

    this.nutsSelection$.pipe(takeUntil(this.onDestroy$)).subscribe((nuts) => {
      console.log('NUTS', nuts);
      this.removeLayers();
      switch (nuts) {
        case 'nuts0':
          this.onNutsLevelChange(this.nuts0 as FeatureCollection);
          break;
        case 'nuts1':
          this.onNutsLevelChange(this.nuts1 as FeatureCollection);
          break;
        case 'nuts2':
          this.onNutsLevelChange(this.nuts2 as FeatureCollection);
          break;
        case 'nuts3':
          this.onNutsLevelChange(this.nuts3 as FeatureCollection);
          break;
        default:
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    if (this.legend) this.map.removeControl(this.legend);
    this.removeLayers();
    this.mapService.restoreExaggeration();
  }

  removeLayers() {
    if (this.map.getLayer('nuts-fill')) {
      this.map.removeLayer('nuts-fill');
    }
    if (this.map.getLayer('nuts-borders')) {
      this.map.removeLayer('nuts-borders');
    }
    if (this.map.getSource('nuts-source')) {
      this.map.removeSource('nuts-source');
    }
  }

  onNutsLevelChange(data: FeatureCollection) {
    this.map.addSource('nuts-source', {
      type: 'geojson',
      data,
      generateId: true,
    });

    this.map.addLayer({
      id: 'nuts-fill',
      type: 'fill',
      source: 'nuts-source',
      // layout: {},
      paint: {
        'fill-color': '#627BC1',
        'fill-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.5,
        ],
      },
    });

    this.map.addLayer({
      id: 'nuts-borders',
      type: 'line',
      source: 'nuts-source',
      // layout: {},
      paint: {
        'line-color': '#627BC1',
        'line-width': 1,
      },
    });

    this.map.on('mousemove', 'nuts-fill', (e: any) => {
      // console.log(e.features);
      if (e.features && e.features.length > 0) {
        if (this.hoveredPolygonId !== '') {
          this.map.setFeatureState(
            { source: 'nuts-source', id: this.hoveredPolygonId },
            { hover: false }
          );
        }

        this.hoveredPolygonId = e.features[0].id as string;
        this.nutsProperties = e.features[0].properties;

        if (this.nutsProperties) {
          this.nuts_id = this.nutsProperties['NUTS_ID'];
          this.name_latin = this.nutsProperties['NAME_LATN'];
          this.nuts_name = this.nutsProperties['NUTS_NAME'];
          this.legend?.update(this.nuts_id, this.name_latin, this.nuts_name);
        }

        this.map.setFeatureState(
          { source: 'nuts-source', id: this.hoveredPolygonId },
          { hover: true }
        );
      }
    });

    this.map.on('mouseleave', 'nuts-fill', () => {
      if (this.hoveredPolygonId !== '') {
        this.map.setFeatureState(
          { source: 'nuts-source', id: this.hoveredPolygonId },
          { hover: false }
        );
      }
      this.hoveredPolygonId = '';
      this.nutsProperties = null;
    });
  }
}
