import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  RouterOutlet,
  Router,
  RouterState,
} from '@angular/router';
import { LeftSideBarComponent } from './layout/left-side-bar/left-side-bar.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Store } from '@ngrx/store';

import { AppState, login, nutsUpdate } from './state';
import { HttpClient } from '@angular/common/http';
import { MapService } from './map/map.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    NgbAlertModule,
    LeftSideBarComponent,
    MapComponent,
    FooterComponent,
    TopbarComponent,
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
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
    private authService: SocialAuthService,
    private mapService: MapService,
    private store: Store<AppState>,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    localStorage.removeItem('heatmap');
    localStorage.setItem('heatmap', 'temperature');
    this.store.dispatch(nutsUpdate({ level: 'nuts0' }));
    this.store.dispatch(nutsUpdate({ level: 'nuts1' }));
    this.store.dispatch(nutsUpdate({ level: 'nuts2' }));
    this.store.dispatch(nutsUpdate({ level: 'nuts3' }));
    this.applyTheme();
    this.router.navigate(['/']);
    this.authService.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        const { idToken } = user;
        this.http
          .post('http://localhost:3456/api/auth/google-login', { idToken })
          .subscribe((res) => {
            console.log(res);
          });
        this.store.dispatch(login({ user }));
      }
    });
  }

  ngAfterViewInit(): void {
    // console.log(this.mapComponentRef);
    // const mapRef: ElementRef =
    //   this.mapComponentRef.nativeElement.querySelector('#map');
    // console.log(mapRef);
    // const { map } = this.mapService.newMap(mapRef.nativeElement);
    // map.on('style.load', () => this.mapService.onStyleLoad(map));
    // map.on('load', () => this.mapService.onLoad(map));
    // map.on('wheel', () => this.mapService.onWheel());
    // map.on('boxzoomend', () => this.mapService.onBoxZoomEnd());
    // map.on('rotateend', () => this.mapService.onRotateEnd());
    // map.on('pitchend', () => this.mapService.onPitchEnd());
    // map.on('dragend', () => this.mapService.onDragEnd());
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
}
