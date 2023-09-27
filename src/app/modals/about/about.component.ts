import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState, isLoading } from 'src/app/state';
import { PleaseWaitComponent } from 'src/app/ui/please-wait/please-wait.component';

@Component({
  standalone: true,
  imports: [CommonModule, PleaseWaitComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class ModalAboutComponent {
  isLoading$ = this.store.select(isLoading);
  constructor(public modal: NgbActiveModal, private store: Store<AppState>) {}
}
