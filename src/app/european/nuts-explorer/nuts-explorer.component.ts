import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from 'src/app/map/map.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectComponent } from 'src/app/ui/select/select.component';
import { Store } from '@ngrx/store';
import { AppState, nutsIsLoading } from 'src/app/state';
import { Observable, Subscription } from 'rxjs';
import { FeatureCollection } from 'src/app/interfaces/geojson';
import { EurostatToolComponent } from 'src/app/eurostat/eurostat-tool/eurostat-tool.component';
import { MapService } from 'src/app/map/map.service';
import { GeoJsonProperties } from 'geojson';

@Component({
  selector: 'app-nuts-explorer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectComponent,
    MapComponent,
    EurostatToolComponent,
  ],
  templateUrl: './nuts-explorer.component.html',
  styleUrls: ['./nuts-explorer.component.scss'],
})
export class NutsExplorerComponent implements OnInit, AfterViewInit {
  // @ViewChild('map') map!: MapComponent;
  map = this.mapService.map;
  nutsLevels = [
    { key: 'nuts0', value: 'National (NUTS 0)' },
    { key: 'nuts1', value: 'Large Region (NUTS 1)' },
    { key: 'nuts2', value: 'Small Region (NUTS 2)' },
    { key: 'nuts3', value: 'Local (NUTS 3)' },
  ];
  nutsForm = new FormGroup({
    nutsLevel: new FormControl('', Validators.required),
  });
  isLoading$ = this.store.select(nutsIsLoading);
  nuts0$ = this.store.select((state) => state.nuts.nuts0);
  nuts1$ = this.store.select((state) => state.nuts.nuts1);
  nuts2$ = this.store.select((state) => state.nuts.nuts2);
  nuts3$ = this.store.select((state) => state.nuts.nuts3);
  hoveredPolygonId = '';
  nutsProperties: GeoJsonProperties | null = null;
  subscription: Subscription | undefined;

  constructor(private store: Store<AppState>, private mapService: MapService) {}

  ngOnInit(): void {
    this.nutsForm.controls.nutsLevel.valueChanges.subscribe((value) => {
      this.subscription?.unsubscribe();
      if (this.map.getLayer('nuts-fill')) {
        this.map.removeLayer('nuts-fill');
      }
      if (this.map.getLayer('nuts-borders')) {
        this.map.removeLayer('nuts-borders');
      }
      if (this.map.getSource('nuts-source')) {
        this.map.removeSource('nuts-source');
      }
      switch (value) {
        case 'nuts0':
          this.onNutsLevelChange(this.nuts0$);
          break;
        case 'nuts1':
          this.onNutsLevelChange(this.nuts1$);
          break;
        case 'nuts2':
          this.onNutsLevelChange(this.nuts2$);
          break;
        case 'nuts3':
          this.onNutsLevelChange(this.nuts3$);
          break;
        default:
          break;
      }
    });
  }

  ngAfterViewInit(): void {
    this.map.fitBounds([
      -26.39211076038066, 33.85666623943277, 46.06351684677202,
      71.45984928826147,
    ]);
  }

  onNutsLevelChange(nuts$: Observable<FeatureCollection | null>) {
    this.subscription = nuts$?.subscribe((data) => {
      if (data) {
        console.log(data.features);
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

        this.map.on('mousemove', 'nuts-fill', (e) => {
          console.log(e.features);
          if (e.features && e.features.length > 0) {
            if (this.hoveredPolygonId !== '') {
              this.map.setFeatureState(
                { source: 'nuts-source', id: this.hoveredPolygonId },
                { hover: false }
              );
            }

            this.hoveredPolygonId = e.features[0].id as string;
            this.nutsProperties = e.features[0].properties;
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
    });
  }
}
