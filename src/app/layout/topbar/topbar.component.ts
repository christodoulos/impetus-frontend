import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  constructor(private renderer: Renderer2) {}

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
}
