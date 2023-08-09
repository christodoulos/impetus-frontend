import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillSetComponent } from '../../ui/pill-set/pill-set.component';

@Component({
  selector: 'eurostat-pill-sets',
  standalone: true,
  imports: [CommonModule, PillSetComponent],
  templateUrl: './eurostat-pill-sets.component.html',
  styleUrls: ['./eurostat-pill-sets.component.scss'],
})
export class EurostatPillSetsComponent implements OnChanges {
  @Input() data:
    | { id: string; label: string; categories: string[] }[]
    | undefined;

  first: { id: string; label: string; categories: string[] } | undefined;
  rest: { id: string; label: string; categories: string[] }[] | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('EurostatPillSetsComponent', this.data);
      this.first = this.data ? this.data[0] : undefined;
      this.rest = this.data ? this.data.slice(1) : undefined;
    }
  }

  onPillSelections(selections: any) {
    console.log('EurostatPillSetsComponent', selections);
  }
}
