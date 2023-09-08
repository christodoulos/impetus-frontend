import { ViewContainerRef } from '@angular/core';
import { Map } from 'mapbox-gl';
import { LineChartComponent } from 'src/app/ui/line-chart/line-chart.component';

export class AthensPlantNurseryLegendControl {
  map: Map | undefined;
  container: HTMLDivElement;
  viewContainerRef: ViewContainerRef;

  constructor(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    this.container = document.createElement('div');
    this.container.className = 'mapboxgl-ctrl';
    this.container.innerHTML = `<div class="card" style="background-color: rgba(255, 255, 255, 0.9)">
    <div class="card-body">
      <h5 class="card-title">Sewer Mining Technology</h5>
      <h6 class="card-subtitle mb-2 text-muted">PLC metrics fror the Athens Plant Nursery 
      </h6>
      <div id="chart-container" class="card-text d-flex align-items-center gap-2">
      </div>
    </div>
    </div>`;
  }

  onAdd(map: Map) {
    this.map = map;
    const componentRef =
      this.viewContainerRef.createComponent(LineChartComponent);
    const chartContainer = this.container.querySelector('#chart-container');
    if (chartContainer)
      chartContainer.appendChild(componentRef.location.nativeElement);

    return this.container;
  }

  onRemove() {
    this.container.parentNode?.removeChild(this.container);
    this.map = undefined;
  }
}
