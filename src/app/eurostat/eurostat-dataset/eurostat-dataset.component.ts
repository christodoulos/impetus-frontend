import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EurostatDataset } from '../eurostat-interfaces';
import { PillSetComponent } from 'src/app/ui/pill-set/pill-set.component';
import { AccordionPillSetsComponent } from 'src/app/ui/accordion-pill-sets/accordion-pill-sets.component';

@Component({
  selector: 'eurostat-dataset',
  standalone: true,
  imports: [CommonModule, PillSetComponent, AccordionPillSetsComponent],
  templateUrl: './eurostat-dataset.component.html',
  styleUrls: ['./eurostat-dataset.component.scss'],
})
export class EurostatDatasetComponent implements OnChanges {
  // @Input() datasetInfo: EurostatDataset[] | undefined;
  @Input() datasetInfo: EurostatDataset | undefined;
  data: any | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    const data: any[] = [];
    if (changes['datasetInfo']) {
      console.log(
        'EurostatDatasetComponent (Before Object Entries)',
        this.datasetInfo?.dimension
      );
      this.data = Object.entries(this.datasetInfo?.dimension);
      const lala = this.data.map((d: any) => {
        return d[1];
      });
      this.data = lala;
      console.log('EurostatDatasetComponent', this.data);
    }
  }

  constructor() {}
}
