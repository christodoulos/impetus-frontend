import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from 'src/app/map/map.service';
import { LngLatLike } from 'mapbox-gl';

declare let THREE: any;

@Component({
  selector: 'app-hellinikon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hellinikon.component.html',
  styleUrls: ['./hellinikon.component.scss'],
})
export class HellinikonComponent implements OnInit, OnDestroy {
  map = this.mapService.map;
  tb = this.mapService.tb;
  floodLayer = this.mapService.hellinikonFloodLayer;
  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    const mapWidth = $('#map').width() ?? 0;
    const mapHeight = $('#map').height() ?? 0;
    $('#map').width(mapWidth);
    $('#map').height(mapHeight);
    this.mapService.flyToHellinikonFlood();

    // create two three.js lights to illuminate the model
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, -70, 100).normalize();
    this.tb.scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    this.tb.scene.add(directionalLight2);

    this.map.addLayer(this.floodLayer);

    this.map.on('mousemove', (e) => {
      const features = this.map.queryRenderedFeatures(e.point);

      // Limit the number of properties we're displaying for
      // legibility and performance
      const displayProperties = [
        'type',
        'properties',
        'id',
        'layer',
        'source',
        'sourceLayer',
        'state',
      ];

      const displayFeatures = features.map((feat: any) => {
        const displayFeat = {} as any;
        displayProperties.forEach((prop) => {
          displayFeat[prop] = feat[prop];
        });
        return displayFeat;
      });

      // Write object as string with an indent of two spaces.
      console.log(
        JSON.stringify(displayFeatures[0]['properties']['height'], null, 2),
        this.map.queryTerrainElevation(e.lngLat)
      );
    });
  }

  ngOnDestroy(): void {
    this.map.removeLayer(this.floodLayer.id);
  }
}
