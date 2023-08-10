import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillSetComponent } from 'src/app/ui/pill-set/pill-set.component';
import { EurostatDimension } from '../eurostat-interfaces';

@Component({
  selector: 'eurostat-pill-sets',
  standalone: true,
  imports: [CommonModule, PillSetComponent],
  templateUrl: './eurostat-pill-sets.component.html',
  styleUrls: ['./eurostat-pill-sets.component.scss'],
})
export class EurostatPillSetsComponent implements OnChanges {
  @Input() data: EurostatDimension[] | undefined;
  @Output() selections = new EventEmitter<EurostatDimension[]>();
  currentSelections: EurostatDimension[] = [];

  first: EurostatDimension | undefined;
  rest: EurostatDimension[] | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('EurostatPillSetsComponent', this.data);
      this.first = this.data ? this.data[0] : undefined;
      this.rest = this.data ? this.data.slice(1) : undefined;
    }
  }

  onPillSelections(selections: any) {
    console.log('EurostatPillSetsComponent', selections);
    this.currentSelections.push(selections);
    this.selections.emit(this.currentSelections);
  }
}
