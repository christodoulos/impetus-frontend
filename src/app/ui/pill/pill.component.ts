import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Pill {
  id: string | undefined;
  tooltip: string | undefined;
}

export interface PillInfo {
  isSelected: boolean;
  id: string;
}

@Component({
  selector: 'pill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
})
export class PillComponent {
  @Input() pill: Pill = { id: '', tooltip: '' };
  @Input() isSelected = false;
  @Output() selected = new EventEmitter<PillInfo>();

  onClick() {
    this.isSelected = !this.isSelected;
    this.selected.emit({ isSelected: this.isSelected, id: this.pill.id ?? '' });
  }
}
