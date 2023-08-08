import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EurostatTreeComponent } from '../eurostat-tree/eurostat-tree.component';
import { EurostatDatasetComponent } from '../eurostat-dataset/eurostat-dataset.component';
import { EurostatDataset } from '../eurostat-interfaces';

@Component({
  selector: 'eurostat-tool',
  standalone: true,
  imports: [CommonModule, EurostatTreeComponent, EurostatDatasetComponent],
  templateUrl: './eurostat-tool.component.html',
  styleUrls: ['./eurostat-tool.component.scss'],
})
export class EurostatToolComponent {
  datasetInfo: EurostatDataset[] | undefined;
  onInfo(info: EurostatDataset[]) {
    this.datasetInfo = info;
    console.log('AAAAAAAAAAAAAAAAAA', this.datasetInfo);
  }
}
