import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapToolbarComponent } from './toolbar/toolbar.component';
import { MapDropdownsComponent } from './dropdowns/dropdowns.component';

import { RouteDataService } from '@atticadt/services';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, MapDropdownsComponent, MapToolbarComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  routeInfo = '';
  routeData$ = this.routeDataService.routeData$;
  @Output() afterMapInit = new EventEmitter<void>();

  constructor(private routeDataService: RouteDataService) {}

  ngOnInit(): void {
    this.routeData$.subscribe((data) => {
      this.routeInfo = data?.['info'];
    });
  }

  ngAfterViewInit(): void {
    this.afterMapInit.emit();
  }
}
