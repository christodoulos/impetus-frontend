import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from 'src/app/ui/icon-button/icon-button.component';
import { MapService } from '../map.service';

@Component({
  selector: 'map-toolbar',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class MapToolbarComponent {
  constructor(private mapService: MapService) {}
  onClick(id: string): void {
    console.log(id);
    switch (id) {
      case 'save':
        this.mapService.downloadMap();
        break;
      default:
        console.log(id);
        break;
    }
  }
}
