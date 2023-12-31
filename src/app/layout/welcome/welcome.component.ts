import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeometryType } from 'src/app/interfaces/geojson';
import { AnySourceData, Popup } from 'mapbox-gl';

import { MapPlacesService, MapService } from '@atticadt/services';
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
              <p>FarmAIr technology (patented) uses thermal images and Artificial Intelligence to reveal Plant Stress before the onset of any symptom. FarmAIr helps farmers and agronomists spot what they cannot see with the naked eye, be aware, and take all necessary precautions to help prevent any spread. FarmAIr technology is currently available for vineyards, planning to gradually expand to virtually any plant with leaves.</p>`,
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
            title: 'Flood Risk Analysis',
            description: `<img src="/assets/images/flood.png" style="width:100%">
            <h6>Flood Risk Analysis</h6>
              <p>A hydraulic model plays a significant role in hydrodynamic analysis by simulating how water
                flows within rivers, channels, and floodplains. It acts like a digital river simulator that
                helps engineers and stakeholders understand complex hydrodynamic processes
                without physically being on-site. It considers factors like river shape, slope,
                roughness, and inflow hydrographs to predict how water moves, where it might
                flood, and how fast it will flow during various conditions, such as storms or changes
                in the river's structure and geometry.</p>`,
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
            title: 'Advanced Sewer Mining Application',
            description: `<img src="/assets/images/markopoulo.jpg" style="width:100%">
            <h6>Advanced Sewer Mining Application</h6>
            <p>The <em>Advanced Sewer Mining application</em> is essentially a treatment plant in a
            container, which, <strong>at the most energy efficient way</strong>, is able to extract wastewater from
            the local sewers that run under an urban environment, the Municipality of
            Markopoulo, treat it directly on site and produce high quality reused water at the
            point of demand, suitable for irrigation of green areas, groundwater recharge and
            other urban uses.</p>
            <p>
            Through the circular, distributed and flexible Sewer Mining technology, we intent to
            test energy efficiency schemes in order to achieve further reduction of energy needs
            and solve more holistically a more generic problem of all the cities and towns that
            face water scarcity issues due to population growth and urbanisation, the economic
            crisis and of course climate change, leading to a reduction of water availability and
            deterioration of water quality.
            </p>
            `,
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
            route: 'innovations/subsol',
            title: 'Controlled Environment Agriculture solution',
            description: `<img src="/assets/images/alagro.png" style="width:100%">
            <h6>Controlled Environment Agriculture solution</h6>
            <p>
            <em>Controlled Environmental Agriculture (CEA) solutions</em> refer to agricultural
            systems where crops or fruits are cultivated in indoor environments (greenhouses),
            where with the use of the appropriate equipment the crop microclimate is monitored
            and regulated to: </p>
            <ul>
            <li>optimize water and fertilizer efficiency;</li>
            <li>reduce the energy consumption;</li>
            <li>attain similar and if possible better-quality crop parameters.</li>
            </ul>
            <p>In the framework of IMPETUS, we selected the pilot site of the Attica Green
            agricultural enterprise, in a peri-urban area with many environmental constraints
            (high salinity water, close to the airport), in which a series of greenhouses are closely
            monitored in order to increase resources efficiency and in general increase the
            resilience and sustainability of the Attica’s agricultural sector and adjacent natural
            habitats of the region.</p>
            `,
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
            route: 'innovations/subsol',
            description: `<img src="/assets/images/subsol.jpg" style="width:100%">
              <h6>Subsurface Water Solutions</h6>
              <p>Subsurface Water Solutions (SWS) are a novel approach combining management and technology to protect, enlarge and utilize fresh groundwater resources. In Schinias (Marathon), we have tested an SWS configuration coupled with novel pollution remediation techniques, including Reverse Osmosis (RO) and Advanced Oxidation Methods (AOPs) to utilize deeper groundwater resources from karstic coastal aquifers, brackish groundwater treatment and groundwater recharge with infiltration in coastal aquifers to address a widespread problem in the Mediterranean: saltwater intrusion.</p>
              `,
          },
        },
      ],
      properties: {},
    },
  };

  popup = new Popup({
    closeButton: false,
    closeOnClick: false,
    maxWidth: '500px',
  });

  constructor(
    private mapService: MapService,
    private mapPlacesService: MapPlacesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mapPlacesService.flyTo('attica');

    if (this.mapService.mapLoaded) this.showPins();
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
      this.popup.setLngLat(coordinates).setHTML(description).addTo(this.map);
    });

    this.map.on('mouseleave', 'places', () => {
      this.map.getCanvas().style.cursor = '';
      this.popup.remove();
    });

    this.map.on('dblclick', this.ondblclick);
  }

  ngAfterViewInit(): void {
    this.map.on('load', () => {
      this.mapService.mapLoaded = true;
      this.showPins();
    });
  }

  ngOnDestroy(): void {
    if (this.map.getLayer('points')) this.map.removeLayer('points');
    if (this.map.getLayer('places')) this.map.removeLayer('places');
    if (this.map.getSource('pins')) this.map.removeSource('pins');
    // TODO: Remove event listeners like dblclick with a NAMED function.
    this.map.off('mouseenter', 'places', () => {});
    this.map.off('mouseleave', 'places', () => {});
    this.map.off('dblclick', this.ondblclick);
  }

  ondblclick = (e: any) => {
    e.preventDefault();
    this.popup.remove();
    this.router.navigateByUrl(this.potentialRoute);
  };

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
