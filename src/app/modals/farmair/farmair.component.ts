import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-farmair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farmair.component.html',
  styleUrls: ['./farmair.component.scss'],
})
export class FarmairModalComponent {
  constructor(public modal: NgbActiveModal) {}
}
