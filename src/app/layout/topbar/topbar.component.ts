import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Output() mobileMenuButtonClicked = new EventEmitter();

  toggleSidebarWidth(): void {
    document.body.classList.toggle('sidebar-enable');
    if (
      document.body.hasAttribute('data-leftbar-compact-mode') &&
      document.body.getAttribute('data-leftbar-compact-mode') === 'condensed'
    ) {
      document.body.setAttribute('data-leftbar-compact-mode', 'fixed');
    }
    document.body.setAttribute('data-leftbar-compact-mode', 'condensed');
  }
}
