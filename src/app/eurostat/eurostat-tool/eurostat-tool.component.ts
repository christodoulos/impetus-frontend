import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EurostatTreeComponent } from '../eurostat-tree/eurostat-tree.component';
import { EurostatDatasetComponent } from '../eurostat-dataset/eurostat-dataset.component';
import { EurostatDimension, EurostatDataset } from '../eurostat-interfaces';
import { Store } from '@ngrx/store';
import {
  AppState,
  selectAllMetadataIds,
  selectCurrentMetadataId,
} from 'src/app/state';
import { map } from 'rxjs';
import { EurostatMyDatasetsComponent } from '../eurostat-my-datasets/eurostat-my-datasets.component';
import { EurostatQueryToolComponent } from '../eurostat-query-tool/eurostat-query-tool.component';

@Component({
  selector: 'eurostat-tool',
  standalone: true,
  imports: [
    CommonModule,
    EurostatTreeComponent,
    EurostatMyDatasetsComponent,
    EurostatDatasetComponent,
    EurostatQueryToolComponent,
  ],
  templateUrl: './eurostat-tool.component.html',
  styleUrls: ['./eurostat-tool.component.scss'],
})
export class EurostatToolComponent {
  datasetInfo: EurostatDataset | undefined;
  dimensions: any;
  loading = false;
  selectCurrentMetadataId$ = this.store.select(selectCurrentMetadataId);

  constructor(private store: Store<AppState>) {}

  onInfo(info: any) {
    console.log('EurostatToolComponent', info);

    const ds = info;
    const dimensions = ds.id;

    // console.log('Dimensions:', dimensions);
    // for (const dimension of dimensions) {
    //   console.log('Dimension:', dimension);
    //   const dimensionObj = ds.Dimension(dimension);
    //   console.log('Dimension object:', dimensionObj);
    //   console.log('Dimension label:', dimensionObj.label);
    //   const dimensionCategories = dimensionObj
    //     .Category()
    //     .map((category: any) => category.label);
    //   console.log('Dimension categories:', dimensionCategories);
    // }

    this.datasetInfo = this.getDatasetInfo(info);
  }

  onLoading(loading: boolean) {
    this.loading = loading;
  }

  getDatasetInfo(info: any) {
    const { id, label, source, updated, n } = info;

    const dimensions: EurostatDimension[] = [];
    for (const dimension of id) {
      const dimensionObj = info.Dimension(dimension);
      const dimensionCategories = dimensionObj
        .Category()
        .map((category: any) => category.label);
      dimensions.push({
        id: dimension,
        label: dimensionObj.label,
        categories: dimensionCategories,
      });
    }

    return { label, source, updated, n, dimensions };
  }
}
