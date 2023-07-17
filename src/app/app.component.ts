import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LeftSideBarComponent } from './layout/left-side-bar/left-side-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Store } from '@ngrx/store';

import { login, logout } from './state/auth';
import { AppState } from './interfaces/appstate';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    NgbAlertModule,
    LeftSideBarComponent,
    FooterComponent,
    TopbarComponent,
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataBsTheme = 'light';
  dataLayoutMode = 'fluid';
  dataMenuColor = 'dark';
  dataTopbarColor = 'light';
  dataLayoutPosition = 'fixed';
  dataSidenavSize = 'default';

  user: SocialUser | undefined;
  loggedIn = false;

  constructor(
    private renderer: Renderer2,
    private authService: SocialAuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.applyTheme();
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.store.dispatch(login({ user }));
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setSidenavSize();
  }

  applyTheme() {
    this.renderer.setAttribute(
      document.documentElement,
      'data-bs-theme',
      this.dataBsTheme
    );
    this.renderer.setAttribute(
      document.documentElement,
      'data-layout-mode',
      this.dataLayoutMode
    );
    this.renderer.setAttribute(
      document.documentElement,
      'data-menu-color',
      this.dataMenuColor
    );
    this.renderer.setAttribute(
      document.documentElement,
      'data-topbar-color',
      this.dataTopbarColor
    );
    this.renderer.setAttribute(
      document.documentElement,
      'data-layout-position',
      this.dataLayoutPosition
    );
    this.setSidenavSize();
  }

  setSidenavSize() {
    if (window.innerWidth < 576) {
      this.dataSidenavSize = 'full';
    } else if (window.innerWidth >= 576 && window.innerWidth <= 768) {
      this.dataSidenavSize = 'condensed';
    } else if (window.innerWidth > 768) {
      this.dataSidenavSize = 'default';
    }
    this.renderer.setAttribute(
      document.documentElement,
      'data-sidenav-size',
      this.dataSidenavSize
    );
  }
}
