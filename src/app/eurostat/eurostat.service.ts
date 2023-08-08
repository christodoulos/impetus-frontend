import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as EuroJSONstat from 'jsonstat-euro';
import { EurostatDataset } from './eurostat-interfaces';

@Injectable({
  providedIn: 'root',
})
export class EurostatService {
  constructor(private http: HttpClient) {}

  async getDataset(dataset: string) {
    const query = { dataset };
    const ds = await EuroJSONstat.fetchEmptyDataset(query);
    const info: EurostatDataset[] = [];
    for (const id of ds['id']) {
      const label = ds['dimension'][id]['label'];
      const inf: EurostatDataset = { label, category: [] };
      info.push(inf);
      // info[id] = { label, category: [] };
      for (const i in ds['dimension'][id]['category']['index']) {
        // info[id]['category'].push(ds['dimension'][id]['category']['label'][i]);
        inf.category.push(ds['dimension'][id]['category']['label'][i]);
      }
    }
    console.log('SERVICE', info.length);
    return info;
  }
}
