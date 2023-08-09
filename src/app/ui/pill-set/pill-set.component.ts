import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillComponent } from '../pill/pill.component';

export interface PillMetadata {
  id: string;
  label: string;
}

export interface PillSetSelections {
  metadata: PillMetadata;
  pills: string[];
}

@Component({
  selector: 'pill-set',
  standalone: true,
  imports: [CommonModule, PillComponent],
  templateUrl: './pill-set.component.html',
  styleUrls: ['./pill-set.component.scss'],
})
export class PillSetComponent {
  @Input() metadata: PillMetadata = { id: 'pillsetId', label: 'pillsetLabel' };
  @Input() pills: string[] = [];
  @Output() pillSelections = new EventEmitter<PillSetSelections>();
  selectedPills: string[] = [];

  onSelection(pill: string) {
    this.selectedPills.push(pill);
    this.pillSelections.emit({
      metadata: this.metadata,
      pills: this.selectedPills,
    });
  }

  onDeselection(pill: string) {
    this.selectedPills = this.selectedPills.filter((p) => p !== pill);
    this.pillSelections.emit({
      metadata: this.metadata,
      pills: this.selectedPills,
    });
  }
}
