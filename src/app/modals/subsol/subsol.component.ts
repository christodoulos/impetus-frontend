import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-subsol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subsol.component.html',
  styleUrls: ['./subsol.component.scss'],
})
export class SubsolModalComponent {
  constructor(public modal: NgbActiveModal) {}
}
