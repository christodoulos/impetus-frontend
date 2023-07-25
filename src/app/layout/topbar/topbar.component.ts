import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SocialAuthService,
  GoogleSigninButtonModule,
} from '@abacritt/angularx-social-login';

import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/appstate';
import { email, loggedIn, name, photoUrl, logout } from 'src/app/state/auth';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, GoogleSigninButtonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  loggedIn$ = this.store.select(loggedIn);
  name$ = this.store.select(name);
  photoUrl$ = this.store.select(photoUrl);
  email$ = this.store.select(email);
  constructor(
    private renderer: Renderer2,
    private authService: SocialAuthService,
    private store: Store<AppState>
  ) {}

  onButtonClick() {
    this.sidebarToggle();
  }

  sidebarToggle() {
    const htmlTag = document.getElementsByTagName('html')[0];
    const bodyTag = document.getElementsByTagName('body')[0];
    if (htmlTag.classList.contains('sidebar-enable')) {
      this.renderer.removeClass(bodyTag, 'overflow-hidden');
      this.renderer.removeClass(htmlTag, 'sidebar-enable');
    } else {
      this.renderer.addClass(htmlTag, 'sidebar-enable');
      this.renderer.addClass(bodyTag, 'overflow-hidden');
    }
  }

  signIn(): void {}

  signOut(): void {
    this.authService.signOut();
    this.store.dispatch(logout());
  }
}
