import { LngLat, Map } from 'mapbox-gl';

export class HellinikonLegendControl {
  map: Map | undefined;
  container: HTMLDivElement | undefined;

  onAdd(map: Map) {
    this.map = map;
    this.container = document.createElement('div');
    this.container.className = 'mapboxgl-ctrl';
    this.container.innerHTML = `<div class="card" style="background-color: rgba(255, 255, 255, 0.9)">
        <div class="card-body">
            <h5 class="card-title">Query Information</h5>
            <div class="card-text d-flex align-items-center gap-2">
                <strong>Double click in inundation boundary for query information</strong>
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

  update(where: LngLat, what: string, value: number) {
    const unit = what === 'depth' ? 'm' : 'm/s';
    const capitalizedString = what.charAt(0).toUpperCase() + what.slice(1);
    if (this.container)
      this.container.innerHTML = `<div class="card" style="background-color: rgba(255, 255, 255, 0.9)">
        <div class="card-body">
            <h5 class="card-title">Flood ${capitalizedString} Information</h5>
            <div class="card-text d-flex align-items-center gap-2">
                <table class="table table-borderless mb-0">
                    <tbody>
                        <tr>
                            <th scope="row">Logntitude</th>
                            <td>${where.lng.toFixed(6)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Latitude</th>
                            <td>${where.lat.toFixed(6)}</td>
                        </tr>
                        <tr>
                            <th scope="row">${capitalizedString}</th>
                            <td>${value.toFixed(2)} ${unit}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;
  }
}
