import { Component, Input } from '@angular/core';
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
  @Input() pills: string[] = [];
}
