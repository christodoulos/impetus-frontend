import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectComponent } from 'src/app/ui/select/select.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-heatmaps',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbAlertModule, SelectComponent],
  templateUrl: './heatmaps.component.html',
  styleUrls: ['./heatmaps.component.scss'],
})
export class HeatmapsComponent implements OnInit {
  metrics = [
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
  form = new FormGroup({
    metric: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.form.controls.metric.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
