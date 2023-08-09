import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
})
export class PillComponent {
  @Input() text: string = 'text';
  @Input() style: string =
    'btn btn-sm btn-outline-secondary rounded-pill me-1 mt-1';
  @Output() selection = new EventEmitter<string>();
  @Output() deselection = new EventEmitter<string>();
  selected: boolean = false;

  onClick() {
    this.selected = !this.selected;
    this.style = this.selected
      ? 'btn btn-sm btn-secondary rounded-pill me-1 mt-1'
      : 'btn btn-sm btn-outline-secondary rounded-pill me-1 mt-1';
    if (this.selected) {
      this.selection.emit(this.text);
    } else {
      this.deselection.emit(this.text);
    }
  }
}
