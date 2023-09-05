import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from '../map.service';

@Component({
  selector: 'map-legend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
})
export class MapLegendComponent implements OnInit {
  map = this.mapService.map;
  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    // this.map.getStyle().layers?.forEach((layer) => {
    //   console.log(layer);
    // });
  }
}
