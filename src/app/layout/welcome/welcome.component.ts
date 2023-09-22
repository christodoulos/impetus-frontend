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
import { GeometryType } from 'src/app/interfaces/geojson';
import { AnySourceData, Popup } from 'mapbox-gl';
import { Store } from '@ngrx/store';
import { AppState, shouldShowWelcomePins } from 'src/app/state';
import { Subscription, distinctUntilChanged } from 'rxjs';

import { AppService, MapService } from '@atticadt/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, AfterViewInit, OnDestroy {
  map = this.mapService.map;
  shouldShowWelcomePins$ = this.store.select(shouldShowWelcomePins);
  subscription: Subscription | undefined;
  potentialRoute = '';
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
            route: 'innovations/athens-plant-nursery',
            title: 'Sewer Mining Technology',
            description: `<img src="/assets/images/apn.jpg" style="width:100%">
            <h6>Athens Plant Nursery</h6>
            <p>Sewer Mining is a treatment plant in a container in which:</p>
            <ul>
              <li>wastewater is extracted from local sewers that run under every location of a city</li>
              <li>treated directly on site in a distributed system</li>
              <li>high quality water is produced (at the point of demand) suitable for irrigation of green areas, groundwater recharge and other urban uses.</li>
            </ul>
            <p>The main idea of this technology is that we use a resource (wastewater) that lies beneath every part of a city to produce clean water and reduce pressures due to water scarcity.</p>
            <p>Sewer Mining technology is a distributed, flexible and autonomous circular economy solution.</p>
            `,
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
            route: 'innovations/farmair',
            title: 'Plant Stress Detection',
            description: `<img src="/assets/images/farmair-drone.png" style="width:100%">
              <h6>farmAIr @Kokkotou Vineyards</h6>
              <p><img src="/assets/images/farmAIr.png" style="float:right;width:100px;" /></p> 
              <p>Unlike what is currently available in the market, farmAIr technology (patented) uses thermal images and 
              Artificial Intelligence to reveal Plant Stress before the onset of any symptom. farmAIr helps farmers and agronomists 
              spot what they can’t see with the naked eye, be aware, and take all necessary precautions to help prevent any spread. 
              farmAIr technology is currently available for vineyards, planning to gradually expand to virtually any plant with leaves.</p>`,
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
            route: 'analyses/hellinikon',
            title: 'Flood Risk Assessment',
            description:
              '<strong>Hellinikon Development</strong><p>Incididunt laboris consequat culpa do labore labore eiusmod aute duis nisi labore. Non sit minim fugiat qui. Tempor adipisicing enim est minim irure id mollit incididunt ex ad sit reprehenderit sit. Excepteur proident consequat ut esse adipisicing pariatur. Dolore sunt nisi irure dolor enim ipsum enim minim eu consectetur proident. Adipisicing est consectetur dolore consequat velit do adipisicing consequat. Non excepteur nostrud cupidatat sint id id veniam.</p>',
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
            title: 'Advanced Sewer Mining',
            description:
              '<strong>Markopoulo Municipality</strong><p>Anim sit aliqua incididunt id ea et minim laboris excepteur. Et consequat proident duis do elit mollit amet. Cillum ad ea ad duis laborum. Qui pariatur voluptate fugiat est mollit ullamco veniam tempor commodo consequat culpa ad. Enim proident mollit aute proident Lorem ipsum tempor amet deserunt ex officia esse quis. Duis sit fugiat ad consequat Lorem velit duis aute velit tempor velit.</p>',
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
            title: 'Controlled Environment Agriculture solution',
            description:
              '<strong>Attica Green, Spata</strong><p>Laboris et consectetur aliquip ut aliqua ut ipsum minim aliqua eiusmod. Nostrud consectetur aliqua duis labore aliqua dolore exercitation veniam cupidatat exercitation velit. Dolor veniam cupidatat excepteur nisi. Cupidatat nulla magna magna ea et laborum commodo officia do ipsum dolore fugiat excepteur.</p>',
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
            title: 'Subsurface Water Solutions',
            description: `<img src="/assets/images/subsol.jpg" style="width:100%">
              <h6>Schinias, Marathon</h6>
              <p>Subsurface Water Solutions (SWS) are a novel approach combining management and technology to protect, enlarge and utilize fresh groundwater resources.</p>
              <p>In coastal areas, decentralized SWS can be implemented through an aquifer storage and recovery configuration to address seawater intrusion and over-abstraction of groundwater. </p>
              <p>SWS make use of the subsurface’s potential to store water and it is distinguished by new well designs and configurations as well as new management features to precisely control the fresh groundwater resources. SWS are adaptable to changing environmental and socio-economic conditions.</p>
              `,
          },
        },
      ],
      properties: {},
    },
  };
  constructor(
    private mapService: MapService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mapService.flyTo('attica');
    // Create a popup, but don't add it to the map yet.
    const popup = new Popup({
      closeButton: false,
      closeOnClick: false,
      maxWidth: '500px',
    });
    this.subscription = this.shouldShowWelcomePins$
      .pipe(distinctUntilChanged())
      .subscribe((show) => {
        if (show) {
          this.showPins();
        }
      });
    this.map.on('mouseenter', 'places', (e: any) => {
      // Change the cursor style as a UI indicator.
      this.map.getCanvas().style.cursor = 'pointer';

      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
      // Be prepared for a route change.
      this.potentialRoute = e.features[0].properties.route;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup.setLngLat(coordinates).setHTML(description).addTo(this.map);
    });

    this.map.on('mouseleave', 'places', () => {
      this.map.getCanvas().style.cursor = '';
      popup.remove();
    });

    this.map.on('click', () => {
      popup.remove();
      this.router.navigateByUrl(this.potentialRoute);
    });
  }

  ngAfterViewInit(): void {
    this.map.on('load', () => {
      this.showPins();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.map.removeLayer('points');
    this.map.removeLayer('places');
    this.map.removeSource('pins');
    this.map.off('mouseenter', 'places', () => {});
    this.map.off('mouseleave', 'places', () => {});
    this.map.off('click', () => {});
  }

  showPins() {
    this.map.addSource('pins', this.pins as AnySourceData);
    this.map.addLayer({
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
      paint: {
        'text-color': '#ffffff',
        'text-halo-color': '#4264fb',
        'text-halo-width': 2,
      },
    });
    this.map.addLayer({
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
