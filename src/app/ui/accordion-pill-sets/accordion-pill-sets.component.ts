import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillSetComponent } from '../pill-set/pill-set.component';

@Component({
  selector: 'accordion-pill-sets',
  standalone: true,
  imports: [CommonModule, PillSetComponent],
  templateUrl: './accordion-pill-sets.component.html',
  styleUrls: ['./accordion-pill-sets.component.scss'],
})
export class AccordionPillSetsComponent implements OnChanges {
  // @Input() data: { label: string; category: string[] }[] | undefined;
  @Input() data:
    | {
        label: string;
        category: {
          index: { [key: string]: number };
          label: { [key: string]: string };
        };
      }[]
    | undefined;
  // first: { label: string; category: string[] } | undefined;
  // rest: { label: string; category: string[] }[] | undefined;
  first: any;
  rest: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('AccordionPillSetsComponent', this.data);
      this.first = this.data ? this.data[0] : undefined;
      this.rest = this.data ? this.data.slice(1) : undefined;
    }
  }
}
