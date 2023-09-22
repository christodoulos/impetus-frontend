import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { uniqueId } from 'lodash-es';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'icon-button',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() icon = 'ri-question-line';
  @Input() tooltip = '';
  @Input() id = uniqueId();
  @Output() buttonClick = new EventEmitter<string>();

  onClick(): void {
    this.buttonClick.emit(this.id);
  }
}
