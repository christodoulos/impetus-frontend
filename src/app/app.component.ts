import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import {
  NgbActiveModal,
  NgbAlertModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

import { AppState, login, mapSourceUpdate, mapload, nutsUpdate } from './state';
import { MapService } from './services/map.service';

import { LeftSideBarComponent } from './layout/left-side-bar/left-side-bar.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { AppService } from './services';
import { ModalWelcomeComponent } from './modals/welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgbAlertModule,
    LeftSideBarComponent,
    MapComponent,
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

  @ViewChild('mapComponent', { read: ElementRef }) mapComponentRef!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private modalService: NgbModal,
    private authService: SocialAuthService,
    private appService: AppService,
    private mapService: MapService,
    private store: Store<AppState>,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.applyTheme();

    if (this.appService.showWelcome) {
      this.modalService.open(ModalWelcomeComponent, {
        size: 'lg',
        centered: true,
        backdrop: 'static',
      });
      this.appService.showWelcome = false;
    }

    this.router.navigate(['/']);
    this.authService.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        const { idToken } = user;
        this.http
          .post('https://backend.atticadt.uwmh.eu/api/auth/google-login', {
            idToken,
          })
          .subscribe((res) => {
            console.log(res);
          });
        this.store.dispatch(login({ user }));
      }
    });

    this.displatchStartupActions();
  }

  onAfterMapInit() {
    const mapRef = this.mapComponentRef.nativeElement.querySelector(
      '#map'
    ) as HTMLDivElement;
    this.mapService.newMap(mapRef);
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

  displatchStartupActions() {
    this.store.dispatch(mapload());
    this.store.dispatch(nutsUpdate({ level: 'nuts0' }));
    this.store.dispatch(nutsUpdate({ level: 'nuts1' }));
    this.store.dispatch(nutsUpdate({ level: 'nuts2' }));
    this.store.dispatch(nutsUpdate({ level: 'nuts3' }));
    this.store.dispatch(mapSourceUpdate({ source: 'hellinikonInnundation' }));
  }
}
