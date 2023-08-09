import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as EuroJSONstat from 'jsonstat-euro';
import { EurostatDataset } from './eurostat-interfaces';
import * as JSONstat from 'jsonstat-toolkit';

@Injectable({
  providedIn: 'root',
})
export class EurostatService {
  constructor(private http: HttpClient) {}

  async getDataset(dataset: string) {
    const query = { dataset };
    const ds = (await EuroJSONstat.fetchEmptyDataset(
      query
    )) as JSONstat.Dataset;
    // const info: EurostatDataset[] = [];
    // for (const id of ds['id']) {
    //   const label = ds['dimension'][id]['label'];
    //   const inf: EurostatDataset = { label, category: [] };
    //   info.push(inf);
    //   // info[id] = { label, category: [] };
    //   for (const i in ds['dimension'][id]['category']['index']) {
    //     // info[id]['category'].push(ds['dimension'][id]['category']['label'][i]);
    //     inf.category.push(ds['dimension'][id]['category']['label'][i]);
    //   }
    // }
    // console.log('SERVICE', info.length);
    // return info;
    // Enumerate the dimensions of the dataset
    const dimensions = ds.id;
    console.log('Dimensions:', dimensions);

    // Access a specific dimension
    const firstDimension = dimensions[0];
    const firstDimensionObj = ds.Dimension(firstDimension);
    console.log('First dimension:', firstDimensionObj);

    // Enumerate the categories of a dimension
    const firstDimensionCategories = firstDimensionObj
      .Category()
      .map((category: any) => category.label);
    console.log('First dimension categories:', firstDimensionCategories);

    return ds;
  }
}
