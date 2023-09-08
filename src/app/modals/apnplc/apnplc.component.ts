import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LineChartComponent } from 'src/app/ui/line-chart/line-chart.component';

@Component({
  selector: 'modal-apnplc',
  standalone: true,
  imports: [CommonModule, LineChartComponent],
  templateUrl: './apnplc.component.html',
  styleUrls: ['./apnplc.component.scss'],
})
export class ApnplcModalComponent {
  constructor(public modal: NgbActiveModal) {}
}
