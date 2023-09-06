import { Map } from 'mapbox-gl';
import { capitalize } from 'lodash-es';
import { format } from 'date-fns';

export class HeatmapsLegendControl {
  map: Map | undefined;
  container: HTMLDivElement | undefined;

  private metric = '';
  private min = 0;
  private max = 0;
  private unit = '';
  private time = new Date();

  constructor(
    metric: string,
    min: number,
    max: number,
    unit: string,
    time: string
  ) {
    this.metric = metric;
    this.min = min;
    this.max = max;
    this.unit = unit;
    this.time = new Date(time);
  }

  onAdd(map: Map) {
    this.map = map;
    this.container = document.createElement('div');
    // this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    this.container.className = 'mapboxgl-ctrl';
    this.container.innerHTML = `<div class="card" style="background-color: rgba(255, 255, 255, 0.9)">
      <div class="card-body">
        <h5 class="card-title">${capitalize(this.metric)} heatmap at ${format(
      this.time,
      'MMMM d yyyy HH:mm'
    )}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Unit of measurement: ${
          this.unit
        }</h6>
        <div class="card-text d-flex align-items-center gap-2">
          <div>${this.min}</div>
          <div style="height: 10px; width: 100%; background: linear-gradient(to right, blue, green, red);"></div>
          <div>${this.max}</div>
        </div>
      </div>
    </div>`;
    return this.container;
  }
  onRemove() {
    this.container?.parentNode?.removeChild(this.container);
    this.map = undefined;
  }
}
