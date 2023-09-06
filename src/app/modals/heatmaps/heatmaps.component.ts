import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heatmaps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heatmaps.component.html',
  styleUrls: ['./heatmaps.component.scss'],
})
export class HeatmapsComponent {
  constructor(public modal: NgbActiveModal) {}
}
