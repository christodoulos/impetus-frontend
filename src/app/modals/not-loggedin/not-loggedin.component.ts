import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-not-loggedin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-loggedin.component.html',
  styleUrls: ['./not-loggedin.component.scss'],
})
export class ModalNotLoggedinComponent {
  constructor(public modal: NgbActiveModal) {}
}
