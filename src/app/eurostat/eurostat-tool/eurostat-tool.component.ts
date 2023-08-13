import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EurostatTreeComponent } from '../eurostat-tree/eurostat-tree.component';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentMetadataId } from 'src/app/state';
import { EurostatMyDatasetsComponent } from '../eurostat-my-datasets/eurostat-my-datasets.component';
import { EurostatQueryToolComponent } from '../eurostat-query-tool/eurostat-query-tool.component';
import * as EuroJSONstat from 'jsonstat-euro';
import JSONstat from 'jsonstat-toolkit';

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
export class EurostatToolComponent implements OnDestroy {
  loading = false;
  selectCurrentMetadataId$ = this.store.select(selectCurrentMetadataId);
  currentMetadataId: string | null = null;
  subscription = this.selectCurrentMetadataId$.subscribe((id) => {
    this.currentMetadataId = id;
  });

  constructor(private store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onInfo(info: any) {
    console.log('EurostatToolComponent', info);
  }

  onLoading(loading: boolean) {
    this.loading = loading;
  }

  onEurostatQuery(query: { [key: string]: string[] }) {
    console.log('EurostatToolComponent', query);

    const dquery = {
      dataset: this.currentMetadataId,
    };

    const fquery = EuroJSONstat.addParamQuery(dquery, query);
    const url = EuroJSONstat.getURL(fquery);
    console.log(url);

    // EuroJSONstat.fetchFullQuery(fquery).then((fq: any) => {
    //   if (fq.class === 'query') {
    //     //Convert the fully explicit query into a dataset instance
    //     const ds = EuroJSONstat.getEmptyDataset(fq);
    //     console.log(
    //       `"${ds.extension.datasetId}" dataset has label "${ds.label}".`
    //     );
    //     console.log(`Classification dimensions: ${ds.role.classification}`);
    //     console.log(`Available time periods: ${ds.Dimension('time', false)}`);
    //     console.log(
    //       `Available geographical areas: ${ds.Dimension('geo', false)}`
    //     );
    //   }
    // });

    EuroJSONstat.fetchDataset(fquery).then((ds: any) => {
      ds = JSONstat(ds);
      console.log(ds);
      // if (ds.class === 'dataset') {
      //   console.log(`"${fquery.dataset}" dataset has label "${ds.label}".`);

      //   const status = ds.Data(0).status;

      //   //Eurostat status meaning is easily retrieved
      //   console.log(
      //     `Status symbol of first observation is "${status}" which means "${EuroJSONstat.getStatusLabel(
      //       ds,
      //       status
      //     )}".`
      //   );

      //   //When standardized, Eurostat&rsquo;s datasets are enriched with roles
      //   console.log(`Classification dimensions: ${ds.role.classification}`);
      // }
    });
  }
}
