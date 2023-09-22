import { LngLatLike, Map } from 'mapbox-gl';

export class HellinikonLegendControl {
  map: Map | undefined;
  container: HTMLDivElement | undefined;

  private where: LngLatLike;
  private depth: number;

  constructor(where: LngLatLike, depth: number) {
    this.where = where;
    this.depth = depth;
  }

  onAdd(map: Map) {
    this.map = map;
    this.container = document.createElement('div');
    this.container.className = 'mapboxgl-ctrl';
    this.container.innerHTML = `<div class="card" style="background-color: rgba(255, 255, 255, 0.9)">
        <div class="card-body">
            <h5 class="card-title">Flood Depth Information</h5>
            <h6 class="card-subtitle mb-2 text-muted">Location: ${this.where}</h6>
            <div class="card-text d-flex align-items-center gap-2">
                <div>Double click in inundation boundary for flood depth</div>
            </div>
        </div>
    </div>`;
    return this.container;
  }

  onRemove() {
    if (this.map && this.container) {
      this.container.parentNode?.removeChild(this.container);
    }
    this.map = undefined;
  }

  update(where: LngLatLike, depth: number) {
    this.where = where;
    this.depth = depth;
    if (this.container)
      this.container.innerHTML = `<div class="card" style="background-color: rgba(255, 255, 255, 0.9)">
        <div class="card-body">
            <h5 class="card-title">Flood Depth Information</h5>
            <h6 class="card-subtitle mb-2 text-muted">Location: ${where}</h6>
            <div class="card-text d-flex align-items-center gap-2">
                <div>Depth: ${depth}</div>
            </div>
        </div>
    </div>`;
  }
}
