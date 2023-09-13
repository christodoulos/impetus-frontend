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
import { Store } from '@ngrx/store';
import { AppState, getRouteData } from '../state';
import { map } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, MapDropdownsComponent, MapToolbarComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  routeInfo$ = this.store.select(getRouteData).pipe(
    map((data) => {
      return data?.['info'] as string;
    })
  );
  routeInfo = '';
  @Output() afterMapInit = new EventEmitter<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.routeInfo$.subscribe((info) => {
      this.routeInfo = info;
      console.log('ROUTEINFO CHANGE', this.routeInfo);
    });
  }

  ngAfterViewInit(): void {
    this.afterMapInit.emit();
  }
}
