import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EurostatDataset } from '../eurostat-interfaces';
import { PillSetComponent } from 'src/app/ui/pill-set/pill-set.component';

@Component({
  selector: 'eurostat-dataset',
  standalone: true,
  imports: [CommonModule, PillSetComponent],
  templateUrl: './eurostat-dataset.component.html',
  styleUrls: ['./eurostat-dataset.component.scss'],
})
export class EurostatDatasetComponent {
  @Input() datasetInfo: EurostatDataset[] | undefined;

  constructor() {}
}
