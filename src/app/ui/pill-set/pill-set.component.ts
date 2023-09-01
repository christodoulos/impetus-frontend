import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PillComponent } from '../pill/pill.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'pill-set',
  standalone: true,
  imports: [CommonModule, FormsModule, PillComponent],
  templateUrl: './pill-set.component.html',
  styleUrls: ['./pill-set.component.scss'],
})
export class PillSetComponent implements OnChanges {
  @Input() pills: { id: string; tooltip: string }[] = [];
  @Input() selectOptions: boolean = false;
  selectAll: boolean = false;
  selectAllUuid = uuidv4(); // This is used to make the select all checkbox unique

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pills']) {
      this.pills.sort((a, b) => a.id.localeCompare(b.id));
    }
  }

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

  selectAllPills() {
    if (this.selectAll) {
      this.selectedPills = this.pills.map((pill) => pill.id);
    } else {
      this.selectedPills = [];
    }
    this.selectedPillsChange.emit(this.selectedPills);
  }
}
