import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from '../tree/tree.component';
import { EurostatExplorerService } from './eurostat-explorer.service';
import * as EuroJSONstat from 'jsonstat-euro';

@Component({
  selector: 'eurostat-explorer',
  standalone: true,
  imports: [CommonModule, TreeComponent],
  templateUrl: './eurostat-explorer.component.html',
  styleUrls: ['./eurostat-explorer.component.scss'],
})
export class EurostatExplorerComponent {
  title = 'Eurostat Explorer';
  selection = '';

  constructor(private service: EurostatExplorerService) {}

  onSelection(selection: string) {
    this.selection = selection;
    console.log(this.selection);
    EuroJSONstat.fetchEmptyDataset('ei_cphi_m').then(
      (js: { class: string; status: any; label: any }) => {
        if (js.class === 'error') {
          console.log(`Error ${js.status} (${js.label})`);
        } else {
          console.log(js); //JSON-stat dataset with "value" as an empty array
        }
      }
    );
  }
}
