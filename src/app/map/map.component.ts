import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapToolbarComponent } from './toolbar/toolbar.component';
import { MapLegendComponent } from './legend/legend.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, MapToolbarComponent, MapLegendComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @Output() afterMapInit = new EventEmitter<void>();

  ngAfterViewInit(): void {
    this.afterMapInit.emit();
  }
}
