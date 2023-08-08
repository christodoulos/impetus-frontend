import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from '../../ui/tree/tree.component';
import { EurostatService } from '../eurostat.service';
import * as EuroJSONstat from 'jsonstat-euro';
import * as JSONstat from 'jsonstat-toolkit';
declare var $: any;

@Component({
  selector: 'eurostat-tree',
  standalone: true,
  imports: [CommonModule, TreeComponent],
  templateUrl: './eurostat-tree.component.html',
  styleUrls: ['./eurostat-tree.component.scss'],
})
export class EurostatTreeComponent {
  title = 'Eurostat Explorer';
  selection = '';
  geo: any;
  freq: any;

  constructor(private service: EurostatService) {}

  async onSelection(selection: string) {
    this.selection = selection;
    console.log(this.selection);
    // EuroJSONstat.fetchEmptyDataset('ei_cphi_m').then(
    //   (js: { [key: string]: any }) => {
    //     if (js['class'] === 'error') {
    //       console.log(`Error ${js['status']} (${js['label']})`);
    //     } else {
    //       console.log(js); //JSON-stat dataset with "value" as an empty array
    //       console.log(js['length']);
    //       this.geo = js['dimension']['geo'];
    //       this.freq = js['dimension']['freq'];
    //       console.log(this.geo, this.freq);
    //     }
    //   }
    // );
    const query = { dataset: this.selection };
    const url = EuroJSONstat.getURL(query);
    console.log(url);

    // const uquery = EuroJSONstat.addParamQuery(query, { geo: ['EU28'] });
    // console.log(uquery);
    const ds = await EuroJSONstat.fetchEmptyDataset(query);
    console.log(ds);
    console.log(ds['id']);

    const info: any[] = [];
    for (const id of ds['id']) {
      const label = ds['dimension'][id]['label'];
      info[id] = { label, category: [] };
      for (const i in ds['dimension'][id]['category']['index']) {
        info[id]['category'].push(ds['dimension'][id]['category']['label'][i]);
      }
    }

    console.log(info);
  }
}
