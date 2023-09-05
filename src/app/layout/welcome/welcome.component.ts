import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWelcomeComponent } from 'src/app/modals/welcome/welcome.component';
import { MapService } from 'src/app/map/map.service';
import { FeatureCollection, GeometryType } from 'src/app/interfaces/geojson';
import { AnySourceData, Popup } from 'mapbox-gl';
import { Store } from '@ngrx/store';
import {
  AppState,
  getNavigationId,
  shouldShowWelcomePins,
} from 'src/app/state';
import {
  Subject,
  Subscription,
  distinct,
  distinctUntilChanged,
  takeUntil,
  withLatestFrom,
} from 'rxjs';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent implements OnInit, AfterViewInit, OnDestroy {
  shouldShowWelcomePins$ = this.store.select(shouldShowWelcomePins);
  subscription: Subscription | undefined;
  pins = {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          _id: 'pin-1',
          id: 'pin-1',
          type: 'Feature',
          geometry: {
            type: GeometryType.Point,
            coordinates: [23.781372557061157, 37.988260208268386],
          },
          properties: {
            title: 'Plant Nursery',
            description:
              '<strong>Athens Plant Nursery</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
          },
        },
        {
          _id: 'pin-2',
          id: 'pin-2',
          type: 'Feature',
          geometry: {
            type: GeometryType.Point,
            coordinates: [23.89076532854162, 38.12430221183547],
          },
          properties: {
            title: 'Kokkotou Vineyards',
            description:
              '<strong>Athens Plant Nursery</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
          },
        },
        {
          _id: 'pin-3',
          id: 'pin-3',
          type: 'Feature',
          geometry: {
            type: GeometryType.Point,
            coordinates: [23.73508263685423, 37.87729612062206],
          },
          properties: {
            title: 'Hellinikon Development',
            description:
              '<strong>Athens Plant Nursery</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
          },
        },
        {
          _id: 'pin-4',
          id: 'pin-4',
          type: 'Feature',
          geometry: {
            type: GeometryType.Point,
            coordinates: [23.927596535047954, 37.88231031893016],
          },
          properties: {
            title: 'Markopoulo Station',
            description:
              '<strong>Athens Plant Nursery</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
          },
        },
        {
          _id: 'pin-5',
          id: 'pin-5',
          type: 'Feature',
          geometry: {
            type: GeometryType.Point,
            coordinates: [23.911037590576747, 37.9402394070189],
          },
          properties: {
            title: 'Attica Green',
            description:
              '<strong>Athens Plant Nursery</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
          },
        },
        {
          _id: 'pin-6',
          id: 'pin-6',
          type: 'Feature',
          geometry: {
            type: GeometryType.Point,
            coordinates: [24.031015046843585, 38.15361073507763],
          },
          properties: {
            title: 'Subsol',
            description:
              '<strong>Athens Plant Nursery</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
          },
        },
      ],
      properties: {},
    },
  };
  constructor(
    private modalService: NgbModal,
    private mapService: MapService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.mapService.fitToAttica();
    const stop$ = new Subject<void>();
    // Create a popup, but don't add it to the map yet.
    const popup = new Popup({
      closeButton: false,
      closeOnClick: false,
    });
    this.subscription = this.shouldShowWelcomePins$
      .pipe(distinctUntilChanged())
      .subscribe((show) => {
        console.log('SHOW', show);
        if (show) {
          this.showPins();
          stop$.next();
        }
      });
    this.mapService.map.on('mouseenter', 'places', (e: any) => {
      // Change the cursor style as a UI indicator.
      this.mapService.map.getCanvas().style.cursor = 'pointer';

      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(this.mapService.map);
    });

    this.mapService.map.on('mouseleave', 'places', () => {
      this.mapService.map.getCanvas().style.cursor = '';
      popup.remove();
    });
  }

  ngAfterViewInit(): void {
    this.mapService.map.on('load', () => {
      console.log('GAMO TO FELEKAKI MOU');
      this.modalService.open(ModalWelcomeComponent, {
        size: 'lg',
        centered: true,
      });
      this.showPins();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.mapService.map.removeLayer('points');
    this.mapService.map.removeLayer('places');
    this.mapService.map.removeSource('pins');
  }

  showPins() {
    console.log('SKATA');
    this.mapService.map.addSource('pins', this.pins as AnySourceData);
    console.log('AAAAAAAAAAAAAAA');
    this.mapService.map.addLayer({
      id: 'points',
      type: 'symbol',
      source: 'pins',
      layout: {
        'icon-image': 'custom-marker',
        'icon-allow-overlap': true,
        // get the title name from the source's "title" property
        'text-field': ['get', 'title'],
        'text-size': 12,
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-offset': [0, 1.25],
        'text-anchor': 'top',
        'icon-offset': [0, -30],
      },
    });
    console.log('BBBBBBBBBBB');
    this.mapService.map.addLayer({
      id: 'places',
      type: 'circle',
      source: 'pins',
      paint: {
        'circle-color': '#4264fb',
        'circle-radius': 6,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
      },
    });
  }
}
