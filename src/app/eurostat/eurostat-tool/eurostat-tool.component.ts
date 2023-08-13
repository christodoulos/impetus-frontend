import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EurostatTreeComponent } from '../eurostat-tree/eurostat-tree.component';
import { EurostatDimension, EurostatDataset } from '../eurostat-interfaces';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentMetadataId } from 'src/app/state';
import { EurostatMyDatasetsComponent } from '../eurostat-my-datasets/eurostat-my-datasets.component';
import { EurostatQueryToolComponent } from '../eurostat-query-tool/eurostat-query-tool.component';

@Component({
  selector: 'eurostat-tool',
  standalone: true,
  imports: [
    CommonModule,
    EurostatTreeComponent,
    EurostatMyDatasetsComponent,
    EurostatQueryToolComponent,
  ],
  templateUrl: './eurostat-tool.component.html',
  styleUrls: ['./eurostat-tool.component.scss'],
})
export class EurostatToolComponent {
  loading = false;
  selectCurrentMetadataId$ = this.store.select(selectCurrentMetadataId);

  constructor(private store: Store<AppState>) {}

  onInfo(info: any) {
    console.log('EurostatToolComponent', info);
  }

  onLoading(loading: boolean) {
    this.loading = loading;
  }

  onEurostatQuery(query: any) {
    console.log('EurostatToolComponent', query);
  }
}
