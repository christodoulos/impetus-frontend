import { Injectable } from '@angular/core';
import * as EuroJSONstat from 'jsonstat-euro';
import JSONstat from 'jsonstat-toolkit';

@Injectable({
  providedIn: 'root',
})
export class EurostatService {
  async getDataset(dataset: string) {
    const query = { dataset };
    const ds = await EuroJSONstat.fetchEmptyDataset(query);
    const json = JSONstat(ds);
    delete json.value; // all values are null
    return json;
  }
}
