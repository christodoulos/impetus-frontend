import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectComponent } from 'src/app/ui/select/select.component';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'map-dropdowns',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectComponent],
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss'],
})
export class MapDropdownsComponent implements OnInit {
  @Input() routeInfo = '';

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

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.heatmapForm.controls.metric.valueChanges.subscribe((value) => {
      this.localStorageService.setItem('heatmap', value ?? '');
    });
  }
}
