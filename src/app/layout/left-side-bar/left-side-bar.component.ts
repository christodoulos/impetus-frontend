import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from '../models/menu.model';
import { RouterModule } from '@angular/router';
import { findAllParent, findMenuItem } from '../helper/utils';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MENU } from '../config/menu-meta';

@Component({
  selector: 'app-left-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, SimplebarAngularModule, NgbCollapse],
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
})
export class LeftSideBarComponent implements AfterViewInit {
  activeMenuItems: string[] = [];
  menuItems: MenuItem[] = MENU;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._activateMenu();
    });
  }

  closeSidebar() {
    const htmlTag = document.getElementsByTagName('html')[0];
    if (htmlTag.classList.contains('sidebar-enable')) {
      this.renderer.removeClass(htmlTag, 'sidebar-enable');
    }
  }

  /**
   * activates menu
   */
  _activateMenu(): void {
    const div = document.getElementById('leftside-menu-container');
    let matchingMenuItem = null;

    if (div) {
      let items: any = div.getElementsByClassName('side-nav-link-ref');
      for (let i = 0; i < items.length; ++i) {
        if (window.location.pathname === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }

      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute('data-menu-key');
        const activeMt = findMenuItem(this.menuItems, mid);
        if (activeMt) {
          const matchingObjs = [
            activeMt['key'],
            ...findAllParent(this.menuItems, activeMt),
          ];

          this.activeMenuItems = matchingObjs;

          this.menuItems.forEach((menu: MenuItem) => {
            menu.collapsed = !matchingObjs.includes(menu.key!);
          });
        }
      }
    }
  }

  /**
   * toggles open menu
   * @param menuItem clicked menuitem
   * @param collapse collpase instance
   */
  toggleMenuItem(menuItem: MenuItem, collapse: NgbCollapse): void {
    collapse.toggle();
    let openMenuItems: string[];
    if (!menuItem.collapsed) {
      openMenuItems = [
        menuItem['key'],
        ...findAllParent(this.menuItems, menuItem),
      ];
      this.menuItems.forEach((menu: MenuItem) => {
        if (!openMenuItems.includes(menu.key!)) {
          menu.collapsed = true;
        }
      });
    }
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasSubmenu(menu: MenuItem): boolean {
    return menu.children ? true : false;
  }
}
