import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LeftSideBarComponent } from './layout/left-side-bar/left-side-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

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
export class AppComponent implements OnInit, AfterViewInit {
  title = 'impetus-ng-frontend';

  layout = 'vertical';
  layoutWidth = 'fluid';
  sidebarTheme = 'dark';
  sidebarType = 'fixed';
  layoutColor = 'light';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // this.applyTheme();
  }

  ngAfterViewInit() {
    this.applyTheme();
  }

  applyTheme() {
    this.renderer.setAttribute(document.body, 'data-layout', this.layout);
    this.renderer.setAttribute(
      document.body,
      'data-layout-mode',
      this.layoutWidth
    );
    this.renderer.setAttribute(
      document.body,
      'data-layout-color',
      this.layoutColor
    );
    this.renderer.setAttribute(
      document.body,
      'data-leftbar-theme',
      this.sidebarTheme
    );
    this.renderer.setAttribute(
      document.body,
      'data-leftbar-compact-mode',
      this.sidebarType
    );
  }
}
