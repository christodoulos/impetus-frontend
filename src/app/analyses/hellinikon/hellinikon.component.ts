import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from 'src/app/services/map.service';

import initGdalJs from 'gdal3.js';
import * as proj4 from 'proj4';
import * as geotiff from 'geotiff';
import { CustomLayerInterface } from 'mapbox-gl';
import { th } from 'date-fns/locale';

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

  models = this.mapService.threeDModels;

  model: any;
  // floodLayer = this.mapService.hellinikonFloodLayer;
  layer: CustomLayerInterface | undefined;
  band: any;
  transformation: any;
  constructor(private mapService: MapService) {}

  ngOnInit() {
    // await initGdalJs({ path: '/assets/gdal3' }).then(async (gdal: any) => {
    //   const tif = await gdal.open('/assets/maxdepth.tif');
    //   this.band = tif.bands.get(0);
    //   console.log(this.band);
    //   const sourceSpatialReference = new gdal.SpatialReference();
    //   sourceSpatialReference.importFromEPSG(4326); // EPSG 4326 is WGS 84

    //   // Load the EPSG 2100 projection definition
    //   const targetSpatialReference = new gdal.SpatialReference();
    //   targetSpatialReference.importFromEPSG(2100); // Replace with the appropriate EPSG code for EPSG 2100
    //   this.transformation = new gdal.CoordinateTransformation(
    //     sourceSpatialReference,
    //     targetSpatialReference
    //   );
    // });

    // this.mapService
    //   .glbLayer0(
    //     'hellilikon-flood',
    //     [23.745103, 37.885798],
    //     true, // elevated
    //     'assets/glbs/flood6.glb',
    //     { x: 1, y: 1, z: 1 }, // scale
    //     { x: 0, y: 0, z: 180 }, // rotation
    //     'top-right',
    //     false, // modelCastShadow
    //     'Flood Risk Analysis Result'
    //   )
    //   .then(() => {
    //     const layer = this.mapService.customLayers['hellilikon-flood'];
    //     const model = this.mapService.threeDModels['hellilikon-flood'];
    //     // Now you can safely use the model
    //     console.log('>>>>>>>>>>>>>>>>>', model);
    //     console.log('>>>>>>>>>>>>>>>>>', layer);
    //     this.mapService.addLayer(layer);
    //   });

    // await this.mapService.glbLayer0(
    //   'hellilikon-flood',
    //   [23.745103, 37.885798],
    //   true, // elevated
    //   'assets/glbs/flood6.glb',
    //   { x: 1, y: 1, z: 1 }, // scale
    //   { x: 0, y: 0, z: 180 }, // rotation
    //   'top-right',
    //   false, // modelCastShadow
    //   ''
    // );
    this.model = this.mapService.threeDModels['hellilikon-flood'];
    this.layer = this.mapService.customLayers['hellilikon-flood'];
    this.mapService.addLayer(this.layer);

    // this.mapService.modelLoaded.then((model) => (this.model = model));
    // console.log(this.model);

    // const gdal = await initGdalJs({ path: '/assets/gdal3' });
    // console.log('GDAL initialized');
    // const fileData = await fetch('/assets/maxdepth.tif');
    // const file = new File([await fileData.blob()], 'maxdepth.tif');
    // const tif = (await gdal.open(file)).datasets[0];
    // console.log('GDAL TIF', tif);
    // const datasetInfo = await gdal.getInfo(tif);
    // console.log('GDAL INFO', datasetInfo);

    // const tiff = await geotiff.fromUrl('/assets/maxdepth.tif');
    // const image = await tiff.getImage();
    // const width0 = image.getWidth();
    // const height0 = image.getHeight();
    // console.log('TIFF width, height', width0, height0);

    // const rasters = (await image.readRasters()) as any;
    // const { width, [0]: raster } = rasters;
    // const elevation = raster[x + y * width];
    // console.log(
    //   `The elevation at (${lat.toFixed(6)},${long.toFixed(6)}) is ${elevation}m`
    // );

    // console.log(`The value at pixel (${x}, ${y}) is ${value}`);

    // const mapWidth = $('#map').width() ?? 0;
    // const mapHeight = $('#map').height() ?? 0;
    // $('#map').width(mapWidth);
    // $('#map').height(mapHeight);

    this.mapService.flyToHellinikonFlood();

    // create two three.js lights to illuminate the model
    // const directionalLight = new THREE.DirectionalLight(0xffffff);
    // directionalLight.position.set(0, -70, 100).normalize();
    // this.tb.scene.add(directionalLight);

    // const directionalLight2 = new THREE.DirectionalLight(0xffffff);
    // directionalLight2.position.set(0, 70, 100).normalize();
    // this.tb.scene.add(directionalLight2);

    // this.map.addLayer(this.floodLayer);

    // this.map.on('mousemove', (e) => {
    //   const features = this.map.queryRenderedFeatures(e.point);

    //   // Limit the number of properties we're displaying for
    //   // legibility and performance
    //   const displayProperties = [
    //     'type',
    //     'properties',
    //     'id',
    //     'layer',
    //     'source',
    //     'sourceLayer',
    //     'state',
    //   ];

    //   const displayFeatures = features.map((feat: any) => {
    //     const displayFeat = {} as any;
    //     displayProperties.forEach((prop) => {
    //       displayFeat[prop] = feat[prop];
    //     });
    //     return displayFeat;
    //   });

    //   // Write object as string with an indent of two spaces.
    //   console.log(
    //     JSON.stringify(displayFeatures[0]['properties']['height'], null, 2),
    //     this.map.queryTerrainElevation(e.lngLat)
    //   );
    // });

    // this.map.on('dblclick', (e) => {
    //   const where = e.lngLat;
    //   const [x, y] = this.transformation.transformPoint(where.lng, where.lat);
    //   const value = this.band.readRaster(x, y, 1, 1);
    //   console.log('RASTER DEPTH', value);
    // });
  }

  ngOnDestroy(): void {
    if (this.layer) this.map.removeLayer(this.layer.id);
  }

  onclickminus(): void {
    this.model.position.z -= 0.05;
    // this.tb.update();
    this.map.triggerRepaint();
    console.log(this.model.position);
  }

  onclickplus(): void {
    this.model.position.z += 0.05;
    // this.tb.update();
    this.map.triggerRepaint();
    console.log(this.model.position);
  }

  onclickminusT(): void {
    this.mapService.decExaggeration();
  }

  onclickplusT(): void {
    this.mapService.incExaggeration();
  }
}
