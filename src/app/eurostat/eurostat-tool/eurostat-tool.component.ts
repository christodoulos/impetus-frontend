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
  // datasetInfo: EurostatDataset[] | undefined;
  datasetInfo: EurostatDataset | undefined;
  dimensions: any;
  loading = false;
  // onInfo(info: EurostatDataset[]) {
  onInfo(info: any) {
    console.log('EurostatToolComponent', info);
    this.datasetInfo = this.getDatasetInfo(info);
    console.log(Object.entries(this.datasetInfo.dimension));
  }

  onLoading(loading: boolean) {
    this.loading = loading;
  }

  getDatasetInfo(info: any) {
    const { iclass, label, source, updated, dimension } = info;
    this.dimensions = dimension;
    return { iclass, label, source, updated, dimension };
  }
}
