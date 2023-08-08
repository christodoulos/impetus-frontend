import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EurostatDataset } from '../eurostat-interfaces';

@Component({
  selector: 'eurostat-dataset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eurostat-dataset.component.html',
  styleUrls: ['./eurostat-dataset.component.scss'],
})
export class EurostatDatasetComponent {
  @Input() datasetInfo: EurostatDataset[] | undefined;

  constructor() {}
}
