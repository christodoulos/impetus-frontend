import { Map } from 'mapbox-gl';
import { capitalize } from 'lodash-es';

export class NutsExplorerLegendControl {
  map: Map | undefined;
  container: HTMLDivElement | undefined;

  private nuts_id = '';
  private name_latin = '';
  private nuts_name = '';

  constructor(nuts_id: string, name_latin: string, nuts_name: string) {
    this.nuts_id = nuts_id;
    this.name_latin = name_latin;
    this.nuts_name = nuts_name;
  }

  onAdd(map: Map) {
    this.map = map;
    this.container = document.createElement('div');
    this.container.className = 'mapboxgl-ctrl';
    this.container.innerHTML = `
        <div class="card" style="background-color: rgba(255, 255, 255, 0.9)">
        <div class="card-body">
            <h5 class="card-title">NUTS Explorer Details</h5>
            <div class="card-text">
                <p>Hover over a NUTS region to see its details.</p>
            </div>
        </div>
        </div>
    `;
    return this.container;
  }

  onRemove() {
    if (this.map && this.container) {
      this.container.parentNode?.removeChild(this.container);
      this.map.off('mousemove', () => {}); // Unbind event listener
    }
    this.map = undefined;
  }

  update(nuts_id: string, name_latin: string, nuts_name: string) {
    this.nuts_id = nuts_id;
    this.name_latin = name_latin;
    this.nuts_name = nuts_name;

    if (this.container) {
      this.container.innerHTML = `
        <div class="card" style="background-color: rgba(255, 255, 255, 0.9)">
        <div class="card-body">
            <h5 class="card-title">NUTS Explorer Details</h5>
            <div class="card-text">    
                <table class="table mb-0">
                    <tr>
                        <td class="semi-bold">NUTS ID</td>
                        <td>${this.nuts_id}</td>
                    </tr>
                    <tr>
                        <td class="semi-bold">Latin name</td>
                        <td>${this.name_latin}</td>
                    </tr>
                    <tr>
                        <td class="semi-bold">Local name</td>
                        <td>${this.nuts_name}</td>
                    </tr>
                </table>
            </div>
        </div>
        </div>`;
    }
  }
}
