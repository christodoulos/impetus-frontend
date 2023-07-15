import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// layout constants

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {}
