import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-disabled-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disabled-input.component.html',
  styleUrls: ['./disabled-input.component.scss'],
})
export class DisabledInputComponent {
  @Input() label = '';
  @Input() value = '';

  isDate(value: string) {
    return !isNaN(Date.parse(value));
  }
}
