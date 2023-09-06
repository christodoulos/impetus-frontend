import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectComponent } from 'src/app/ui/select/select.component';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'modal-heatmaps',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectComponent],
  templateUrl: './heatmaps.component.html',
  styleUrls: ['./heatmaps.component.scss'],
})
export class ModalHeatmapsComponent implements OnInit {
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

  constructor(
    public modal: NgbActiveModal,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.form.controls.metric.valueChanges.subscribe((value) => {
      this.localStorageService.setItem('heatmap', value ?? '');
      this.modal.close();
    });
  }
}
