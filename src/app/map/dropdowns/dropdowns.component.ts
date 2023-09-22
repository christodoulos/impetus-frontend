import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectComponent } from 'src/app/ui/select/select.component';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import {
  AppState,
  isLoading,
  nutsIsLoading,
  selectMapIsLoading,
  updateFarmair,
  updateHeatmap,
  updateNuts,
} from 'src/app/state';
import { IconButtonComponent } from 'src/app/ui/icon-button/icon-button.component';
import { MapService } from '@atticadt/services';
import { PleaseWaitComponent } from 'src/app/ui/please-wait/please-wait.component';

@Component({
  selector: 'map-dropdowns',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectComponent,
    IconButtonComponent,
    PleaseWaitComponent,
  ],
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss'],
})
export class MapDropdownsComponent implements OnInit {
  @Input() routeInfo = '';
  farmairDates: { key: string; value: string }[] = [];
  farmairCurrentDate = '';
  nutsIsLoading$ = this.store.select(nutsIsLoading);
  mapIsLoading$ = this.store.select(selectMapIsLoading);
  isLoading$ = this.store.select(isLoading);

  heatmapMetrics = [
    { key: 'temperature', value: 'Temperature' },
    { key: 'windSpeed', value: 'Wind Speed (km/h)' },
    { key: 'beaufort', value: 'Wind Speed (beaufort)' },
    { key: 'humidity', value: 'Humidity' },
    { key: 'atmosphericPressure', value: 'Atmospheric Pressure' },
    { key: 'highestDailyTemperature', value: 'Highest Daily Temperature' },
    { key: 'lowestDailyTemperature', value: 'Lowest Daily Temperature' },
    { key: 'precipitation', value: 'Precipitation' },
    { key: 'highestDailyGust', value: 'Highest Daily Gust' },
  ];
  heatmapForm = new FormGroup({
    metric: new FormControl('', Validators.required),
  });

  farmairVineyards = [
    { key: 'C.S. WINERY', value: 'C.S. WINERY' },
    { key: 'chardonay oinodiadromes', value: 'Chardonay Oinodiadromes' },
  ];

  farmairDatesCSWINERY = [
    { key: 'P0MTZ3PJXDJ8EGEZ', value: 'June 12, 2022' },
    { key: 'D9EXPIZJE6BOI136', value: 'July 18, 2022' },
    { key: 'DFO2PL11DZ83GPEQ', value: 'July 29, 2022' },
  ];

  farmairDatesChardonayOinodiadromes = [
    { key: '3RKRVMV5TEE45O1D', value: 'June 22, 2022' },
    { key: 'L3A0H0HU7UOJDHFA', value: 'July 18, 2022' },
    { key: '6P7LZSYJOMR9I2CX', value: 'July 29, 2022' },
  ];

  farmairLayers = [
    { key: 'ai', value: 'Stress Boxes' },
    { key: 'dsm', value: 'Digital Surface Map' },
    { key: 'beta', value: 'Classification of Stress Factor' },
    { key: 'no_pseu', value: 'Stress Bounding Boxes (no pseudo-coloring)' },
    { key: 'comb', value: 'Leaf Chlorophyll Content' },
  ];
  farmairForm = new FormGroup({
    vineyard: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    layer: new FormControl('', Validators.required),
  });

  nutsLevels = [
    { key: 'nuts0', value: 'National (NUTS 0)' },
    { key: 'nuts1', value: 'Large Region (NUTS 1)' },
    { key: 'nuts2', value: 'Small Region (NUTS 2)' },
    { key: 'nuts3', value: 'Local (NUTS 3)' },
  ];
  nutsForm = new FormGroup({
    nutsLevel: new FormControl('', Validators.required),
  });

  constructor(
    private readonly http: HttpClient = inject(HttpClient),
    private store: Store<AppState>,
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.heatmapForm.controls.metric.valueChanges.subscribe((value) => {
      this.store.dispatch(updateHeatmap({ heatmap: value ?? '' }));
    });

    this.farmairForm.valueChanges.subscribe((value) => {
      let { vineyard, date, layer } = value;

      const url = `https://backend.atticadt.uwmh.eu/api/farmair/vineyard/${vineyard}`;
      this.http.get(url).subscribe((data: any) => {
        if (data) {
          const { geojson } = data;

          vineyard = vineyard ?? '';
          date = date ?? '';
          layer = layer ?? '';
          this.store.dispatch(
            updateFarmair({
              farmair: { vineyard, date, layer, geojson },
            })
          );
        }
      });
    });

    this.nutsForm.controls.nutsLevel.valueChanges.subscribe((value) => {
      this.store.dispatch(updateNuts({ nuts: value ?? '' }));
    });
  }

  onClick(what: string) {
    const model = this.mapService.threeDModels['hellilikon-flood'];
    switch (what) {
      case 'floodup':
        model.position.z += 0.01;
        this.mapService.triggerRepaint();
        console.log(model, model.position.z);
        break;
      case 'flooddown':
        model.position.z -= 0.01;
        this.mapService.triggerRepaint();
        console.log(model, model.position.z);
        break;
      case 'terrainup':
        this.mapService.incExaggeration();
        break;
      case 'terraindown':
        this.mapService.decExaggeration();
        break;
      default:
        break;
    }
  }
}
