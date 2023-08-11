import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillComponent, Pill } from '../pill/pill.component';

@Component({
  selector: 'pill-set',
  standalone: true,
  imports: [CommonModule, PillComponent],
  templateUrl: './pill-set.component.html',
  styleUrls: ['./pill-set.component.scss'],
})
export class PillSetComponent implements OnInit {
  @ViewChildren(PillComponent) pillComponents!: QueryList<PillComponent>;
  @Input() pills: Pill[] = [];
  @Input() preselectedPills: string[] = [];
  @Input() multiple = false;
  @Output() pillSelections = new EventEmitter<Pill[]>();
  selectedPills: string[] = [];

  ngOnInit() {}

  updatePillSelections() {
    this.pillComponents.forEach((pillComponent) => {
      pillComponent.isSelected = this.selectedPills.includes(
        pillComponent.pill.id ?? ''
      );
    });
  }

  onSelected($event: { isSelected: boolean; id: string }) {
    if (!this.multiple) {
      this.selectedPills = [];
    }

    if ($event.isSelected) {
      this.selectedPills.push($event.id);
    } else {
      this.selectedPills = this.selectedPills.filter((p) => p !== $event.id);
    }

    this.updatePillSelections();

    if ($event.isSelected)
      this.pillSelections.emit(
        this.pills.filter((p) => this.selectedPills.includes(p.id ?? ''))
      );
  }

  inPreselected(pill: Pill) {
    if (pill) return this.preselectedPills.includes(pill.id ?? '');
    else return false;
  }
}
