import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState, isLoading } from 'src/app/state';

@Component({
  selector: 'modal-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class ModalWelcomeComponent {
  isLoading$ = this.store.select(isLoading);
  constructor(public modal: NgbActiveModal, private store: Store<AppState>) {}
}
