import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { LeftSideBarComponent } from './layout/left-side-bar/left-side-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopbarComponent } from './layout/topbar/topbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgbAlert,
    RouterOutlet,
    LeftSideBarComponent,
    FooterComponent,
    TopbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'impetus-ng-frontend';
}
