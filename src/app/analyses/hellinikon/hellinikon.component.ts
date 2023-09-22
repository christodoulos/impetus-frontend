import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from 'src/app/services/map.service';

import initGdalJs from 'gdal3.js';
import { CustomLayerInterface, LngLatLike } from 'mapbox-gl';
import { th } from 'date-fns/locale';

import * as _ from 'lodash';
import { GeoJsonService, MapSourcesService } from '@atticadt/services';
import { Feature, FeatureCollection } from '@turf/turf';
import { State } from '@ngrx/store';
import { AppState } from 'src/app/state';

import geoblaze from 'geoblaze';
import proj4 from 'proj4';
import * as geotiff from 'geotiff';
import chroma from 'chroma-js';
declare let THREE: any;

type GeoJsonPointFeature = {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: number[];
  };
  properties: {
    [key: string]: number | string;
  };
};

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

  innundation: FeatureCollection | undefined;

  constructor(
    private mapService: MapService,
    private mapSourcesService: MapSourcesService,
    private geojsonService: GeoJsonService
  ) {}

  async ngOnInit() {
    this.mapSourcesService.addHellinikonInnundation();
    // await initGdalJs({ path: '/assets/gdal3' }).then(async (gdal: any) => {
    //   fetch('/assets/maxdepth.tif')
    //     .then((response) => response.arrayBuffer())
    //     .then(async (buffer) => {
    //       const tif = await gdal.open(buffer);
    //       console.log('BBBBBBBB');
    //       const datasetInfo = await gdal.getInfo(tif);
    //       console.log('GDAL INFO', datasetInfo);
    //     });
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

    // this.model = this.mapService.threeDModels['hellilikon-flood'];
    // this.layer = this.mapService.customLayers['hellilikon-flood'];

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

    this.mapService.flyTo('hellinikon');

    // create two three.js lights to illuminate the model
    // const directionalLight = new THREE.DirectionalLight(0xffffff);
    // directionalLight.position.set(0, -70, 100).normalize();
    // this.tb.scene.add(directionalLight);

    // const directionalLight2 = new THREE.DirectionalLight(0xffffff);
    // directionalLight2.position.set(0, 70, 100).normalize();
    // this.tb.scene.add(directionalLight2);

    // const sphere = this.tb
    //   .sphere({ color: 'red', material: 'MeshToonMaterial' })
    //   .setCoords([23.745103, 37.885798, 40]);
    // this.tb.add(sphere);
    // this.tb.update();

    // const geometry = new THREE.BoxGeometry(10, 10, 10);
    // const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.set(
    //   -67541.6263111111,
    //   -116601.94194029529,
    //   0.16205962225837955
    // );
    // this.tb.scene.add(cube);
    // this.tb.update();

    // console.log('>>>>>>>>>>>>>>>>>', this.tb.scene);

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

    // this.map.addLayer({
    //   id: 'hellinikon-innundation',
    //   type: 'fill',
    //   source: 'hellinikon-innundation', // reference the data source
    //   layout: {},
    //   paint: {
    //     'fill-color': '#0080ff', // blue color fill
    //     'fill-opacity': 0.8,
    //   },
    // });

    // this.mapService.addLayer(this.layer);

    // geotiff
    //   .fromFile('/assets/maxdepth.tif')
    //   .then((tiff: any) => {
    //     // Read the first image (assuming it's a single-band GeoTIFF)
    //     return tiff.getImage();
    //   })
    //   .then((image: any) => {
    //     // Read the pixel values as a typed array
    //     return [image, image.readRasters()];
    //   })
    //   .then((data: any) => {
    //     const image = data[0];
    //     const rasters = data[1];
    //     // Get the geospatial information
    //     const geoKeys = image.getFileDirectory().GeoKeys;
    //     const geoTransform = image.getGeoTransform();

    //     // Access the longitude and latitude for each pixel
    //     const [width, height] = image.getShape();
    //     const [xOrigin, yOrigin] = geoTransform.slice(0, 2);
    //     const [xScale, yScale] = geoTransform.slice(1, 3);

    //     const lonlatCoordinates = [];
    //     for (let y = 0; y < height; y++) {
    //       for (let x = 0; x < width; x++) {
    //         const value = rasters[0][y * width + x]; // Assuming a single-band GeoTIFF
    //         const lon = xOrigin + x * xScale;
    //         const lat = yOrigin + y * yScale;
    //         lonlatCoordinates.push({ lon, lat, value });
    //       }
    //     }

    //     console.log(lonlatCoordinates);
    //   })
    //   .catch((err) => {
    //     console.error('Error:', err);
    //   });

    // const url = 'http://localhost:4200/assets/maxdepth.tif';
    // const georaster = await geoblaze.parse(url);
    // console.log(georaster);
    // const mean = await geoblaze.mean(georaster);
    // console.log('MEAN', mean);

    const data = await fetch('/assets/pixel_data.json');
    const json = await data.json();
    console.log('JSON HERE', json);

    const _lnglatData = await fetch('/assets/lnglat_data.json');
    const lnglatData: { lng: number; lat: number; value: number }[] =
      await _lnglatData.json();

    const geojson: {
      type: 'FeatureCollection';
      features: GeoJsonPointFeature[];
    } = {
      type: 'FeatureCollection',
      features: [],
    };

    // Define the projections
    // const wgs84 = 'EPSG:3857'; // WGS84 projection used by GPS
    // const epsg2100 =
    //   '+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs'; // Greek grid

    // // Register the projections
    // proj4.defs(wgs84);
    // proj4.defs('EPSG:2100', epsg2100);

    // Define the projection definitions for EPSG:2100 and EPSG:4326
    // proj4.defs(
    //   'EPSG:2100',
    //   '+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs'
    // );
    // proj4.defs(
    //   'EPSG:3857',
    //   '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs'
    // );
    // proj4.defs('EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs');

    // Define the projections
    const wgs84 = 'EPSG:4326'; // WGS84 projection used by GPS
    const epsg2100 =
      '+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs'; // Greek grid

    // Register the projections
    proj4.defs(wgs84);
    proj4.defs('EPSG:2100', epsg2100);

    // Convert the coordinates
    // const [x, y] = proj4(wgs84, 'EPSG:2100', [longitude, latitude]);

    // Convert the coordinates
    // const [x, y] = proj4(wgs84, 'EPSG:2100', [longitude, latitude]);

    lnglatData.forEach((item: { lng: number; lat: number; value: number }) => {
      const coords = proj4('EPSG:2100', wgs84, [item.lng, item.lat]);

      const feature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          // coordinates: [item.coordx, item.coordy],
          coordinates: coords,
        },
        properties: {
          flooddepth: item.value,
        },
      } as GeoJsonPointFeature;
      geojson.features.push(feature);
    });

    this.map.addSource('point-data', {
      type: 'geojson',
      data: geojson,
    });

    // this.map.addLayer({
    //   id: 'heatmap-layer',
    //   type: 'heatmap',
    //   source: 'point-data', // Use the source you created in step 1.
    //   paint: {
    //     'heatmap-weight': {
    //       property: 'flooddepth', // Use the property that represents flood depth.
    //       type: 'exponential',
    //       stops: [
    //         [0, 0], // Minimum weight for flood depth 0
    //         [6, 1], // Maximum weight for flood depth 10 (adjust as needed)
    //       ],
    //     },
    //     'heatmap-intensity': 1,
    //     'heatmap-color': [
    //       'interpolate',
    //       ['linear'],
    //       ['heatmap-density'],
    //       0,
    //       'rgba(0, 0, 255, 0)', // Adjust the color as needed.
    //       0.1,
    //       'royalblue',
    //       0.3,
    //       'cyan',
    //       0.5,
    //       'lime',
    //       0.7,
    //       'yellow',
    //       1,
    //       'red',
    //     ],
    //     'heatmap-radius': 2, // Adjust the radius of influence as needed.
    //     'heatmap-opacity': 0.8,
    //   },
    // });

    // this.map.addLayer({
    //   id: 'flood-heatmap',
    //   type: 'heatmap',
    //   source: 'point-data',
    //   paint: {
    //     'heatmap-weight': [
    //       'interpolate',
    //       ['linear'],
    //       ['get', 'flooddepth'],
    //       0,
    //       0, // Lowest depth has zero weight
    //       5.8,
    //       1, // Highest depth has weight of 1
    //     ],
    //     'heatmap-intensity': 1,
    //     'heatmap-color': [
    //       'interpolate',
    //       ['linear'],
    //       ['heatmap-density'],
    //       0,
    //       'rgba(0, 0, 255, 0)', // Low density is transparent blue
    //       1,
    //       'rgba(0, 0, 255, 1)', // High density is solid blue
    //     ],
    //     'heatmap-radius': 20,
    //   },
    // });

    // this.map.addLayer({
    //   id: 'flood-heatmap',
    //   type: 'heatmap',
    //   source: 'point-data',
    //   paint: {
    //     'heatmap-weight': 1,
    //     'heatmap-intensity': 1,
    //     'heatmap-color': [
    //       'get',
    //       'flooddepth', // Use the "color" property for color mapping
    //     ],
    //     'heatmap-radius': 20, // Set a fixed radius for the heatmap
    //   },
    // });

    this.map.addSource('yourSourceName', {
      type: 'raster',
      url: 'mapbox://christodoulos.5uirn5ry',
    });

    this.map.addLayer({
      id: 'yourLayerName',
      type: 'fill',
      source: 'yourSourceName',
      'source-layer': 'yourSourceLayerName',
      layout: {},
      paint: {
        'fill-color': '#088',
        'fill-opacity': 0.8,
      },
    });

    // this.map.addLayer({
    //   id: 'flood-3d-heatmap',
    //   type: 'fill-extrusion',
    //   source: 'point-data',
    //   paint: {
    //     'fill-extrusion-color': [
    //       'interpolate',
    //       ['linear'],
    //       ['get', 'flood-depth'],
    //       0,
    //       'rgba(0, 0, 255, 0)', // Low depth is transparent blue
    //       10,
    //       'rgba(0, 0, 255, 1)', // High depth is solid blue
    //     ],
    //     'fill-extrusion-height': [
    //       'interpolate',
    //       ['linear'],
    //       ['get', 'flood-depth'],
    //       0,
    //       0, // Lowest depth has zero height
    //       10,
    //       100, // Highest depth has a height of 100 (adjust as needed)
    //     ],
    //     'fill-extrusion-opacity': 0.8,
    //   },
    // });

    const lala = geojson.features[500].properties['flooddepth'];
    console.log(lala, lala.toString());
    // Define a color scale based on your value range
    const colorScale = chroma.scale(['white', 'blue']).domain([0, 1]);
    console.log(colorScale(0.5).hex()); // #FF0000
    // Add a layer for your points
    var colorGradient = {
      property: 'flooddepth', // The property to base the gradient on
      stops: [
        [0, '#d8f9ff'], // Lowest depth, assign a color
        [3, '#02557a'], // Highest depth, assign a color
      ],
    };
    // this.map.addLayer({
    //   id: 'point-layer',
    //   type: 'circle',
    //   source: 'point-data',
    //   paint: {
    //     'circle-color': colorGradient,
    //     'circle-radius': 4,
    //     'circle-opacity': 0.8,
    //   },
    // });

    console.log(geojson.features[0].geometry.coordinates);
    // this.map.setCenter(
    //   geojson.features[500].geometry.coordinates as LngLatLike
    // );

    this.map.on('dblclick', async (e) => {
      e.preventDefault();
      // Use queryRenderedFeatures to get the features at the clicked point
      // var features = this.map.queryRenderedFeatures(e.point, {
      //   layers: ['hellinikon-innundation'],
      // });

      // If there's a feature (the user clicked on the geojson layer), then query the raster
      // if (features.length > 0) {
      console.log(e.lngLat);
      const longitude = e.lngLat.lng;
      const latitude = e.lngLat.lat;

      // Define the projections
      const wgs84 = 'EPSG:4326'; // WGS84 projection used by GPS
      const epsg2100 =
        '+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs'; // Greek grid

      // Register the projections
      proj4.defs(wgs84);
      proj4.defs('EPSG:2100', epsg2100);

      // Convert the coordinates
      const [x, y] = proj4(wgs84, 'EPSG:2100', [longitude, latitude]);

      console.log('COORDS', x, y);

      const originX = 473655.57819999998901;
      const originY = 4197244.39950199984014;
      const pixelWidth = 5;
      const pixelHeight = 5;

      const pixelX = Math.floor((x - originX) / pixelWidth);
      const pixelY = Math.floor((originY - y) / pixelHeight);

      // console.log('PIXEL', pixelX, pixelY, json[pixelY][pixelX]);
      const lala = json.find(
        (obj: any) => obj.x === pixelY && obj.y === pixelX
      );
      console.log(
        'PYTHON VALUE',
        pixelX,
        pixelY,
        _.find(json, { x: pixelY, y: pixelX }).value
      );

      const georaster = await geoblaze.parse(
        'http://localhost:4200/assets/maxdepth.tif'
      );

      const value = await geoblaze.identify(georaster, [x, y]);
      console.log('GEOBLAZE VALUE', value);

      // // Load the GeoTIFF file
      // const tiff = await geotiff.fromUrl('/assets/maxdepth.tif');

      // // Get the first image in the TIFF file
      // const image = await tiff.getImage();

      // console.log('TIFF image', image);

      // // Read the value at the pixel coordinates
      // const value = await image.readRasters();

      // console.log(value); // This is your flood depth
      // }
    });

    // Add a black outline around the polygon.
    // this.map.addLayer({
    //   id: 'outline',
    //   type: 'line',
    //   source: 'hellinikon-innundation',
    //   layout: {},
    //   paint: {
    //     'line-color': '#000',
    //     'line-width': 3,
    //   },
    // });
  }

  ngOnDestroy(): void {
    if (this.layer) this.map.removeLayer(this.layer.id);
  }
}
