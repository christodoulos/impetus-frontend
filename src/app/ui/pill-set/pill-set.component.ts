import {
  Component,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillComponent } from '../pill/pill.component';

@Component({
  selector: 'pill-set',
  standalone: true,
  imports: [CommonModule, PillComponent],
  templateUrl: './pill-set.component.html',
  styleUrls: ['./pill-set.component.scss'],
})
export class PillSetComponent {
  @Input() pills: { id: string; tooltip: string }[] = [];

  // @Input() multipleSelection: boolean = false;
  private _multipleSelection: boolean = false;
  @Input()
  set multipleSelection(value: boolean) {
    if (this._multipleSelection && !value) {
      this.selectedPills = [];
      this.selectedPillsChange.emit(this.selectedPills);
    }
    this._multipleSelection = value;
  }

  get multipleSelection(): boolean {
    return this._multipleSelection;
  }

  @Output() selectedPillsChange = new EventEmitter<string[]>();

  selectedPills: string[] = [];

  onSelectedChange(event: { id: string; selected: boolean }) {
    if (event.selected) {
      if (!this.multipleSelection) {
        this.selectedPills = [event.id];
      } else {
        this.selectedPills.push(event.id);
      }
    } else {
      this.selectedPills = this.selectedPills.filter((id) => id !== event.id);
    }
    this.selectedPillsChange.emit(this.selectedPills);
  }
}
