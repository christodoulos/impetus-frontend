import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  @Input() id = '';
  @Input() tooltip = '';
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<{
    id: string;
    selected: boolean;
  }>();

  toggleSelected() {
    console.log('toggleSelected');
    this.selected = !this.selected;
    this.selectedChange.emit({ id: this.id, selected: this.selected });
  }
}
