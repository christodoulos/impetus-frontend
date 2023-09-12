import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectComponent } from 'src/app/ui/select/select.component';
import { LocalStorageService } from 'src/app/local-storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'map-dropdowns',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectComponent],
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss'],
})
export class MapDropdownsComponent implements OnInit {
  @Input() routeInfo = '';
  farmairDates: { key: string; value: string }[] = [];
  farmairCurrentDate = '';

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

  constructor(
    private localStorageService: LocalStorageService,
    private readonly http: HttpClient = inject(HttpClient)
  ) {}

  ngOnInit(): void {
    this.heatmapForm.controls.metric.valueChanges.subscribe((value) => {
      this.localStorageService.setItem('heatmap', value ?? '');
    });

    this.farmairForm.valueChanges.subscribe((value) => {
      const { vineyard } = value;
      const url = `https://backend.atticadt.uwmh.eu/api/farmair/vineyard/${vineyard}`;
      this.http.get(url).subscribe((data: any) => {
        if (data) {
          const { geojson } = data;
          this.localStorageService.setItem(
            'farmair',
            JSON.stringify({ ...value, geojson })
          );
        }
      });
    });
  }
}
