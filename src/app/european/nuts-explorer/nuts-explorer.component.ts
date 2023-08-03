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

@Component({
  selector: 'app-nuts-explorer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectComponent, MapComponent],
  templateUrl: './nuts-explorer.component.html',
  styleUrls: ['./nuts-explorer.component.scss'],
})
export class NutsExplorerComponent implements OnInit, AfterViewInit {
  @ViewChild('map') map!: MapComponent;
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
  nutsProperties = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.nutsForm.controls.nutsLevel.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngAfterViewInit(): void {
    this.map.fitBounds([
      -26.39211076038066, 33.85666623943277, 46.06351684677202,
      71.45984928826147,
    ]);

    this.nuts3$.subscribe((data) => {
      if (data) {
        console.log(data.features);
        this.map.addSource('nuts0-source', {
          type: 'geojson',
          data,
          generateId: true,
        });

        this.map.addLayer({
          id: 'nuts0-fill',
          type: 'fill',
          source: 'nuts0-source',
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
          id: 'nuts0-borders',
          type: 'line',
          source: 'nuts0-source',
          // layout: {},
          paint: {
            'line-color': '#627BC1',
            'line-width': 1,
          },
        });

        this.map.on('mousemove', 'nuts0-fill', (e) => {
          console.log(e.features);
          if (e.features && e.features.length > 0) {
            if (this.hoveredPolygonId !== '') {
              this.map.setFeatureState(
                { source: 'nuts0-source', id: this.hoveredPolygonId },
                { hover: false }
              );
            }

            this.hoveredPolygonId = e.features[0].id as string;
            this.nutsProperties = e.features[0].properties;
            this.map.setFeatureState(
              { source: 'nuts0-source', id: this.hoveredPolygonId },
              { hover: true }
            );
          }
        });

        this.map.on('mouseleave', 'nuts0-fill', () => {
          if (this.hoveredPolygonId !== '') {
            this.map.setFeatureState(
              { source: 'nuts0-source', id: this.hoveredPolygonId },
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
