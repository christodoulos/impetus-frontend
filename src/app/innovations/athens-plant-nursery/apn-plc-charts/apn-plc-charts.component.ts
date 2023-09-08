import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthensPlantNurseryService } from '../athens-plant-nursery.service';
import { map as _map } from 'lodash-es';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimplebarAngularModule } from 'simplebar-angular';

@Component({
  selector: 'app-apn-plc-charts',
  standalone: true,
  imports: [CommonModule, SimplebarAngularModule, NgApexchartsModule],
  templateUrl: './apn-plc-charts.component.html',
  styleUrls: ['./apn-plc-charts.component.scss'],
})
export class ApnPlcChartsComponent implements OnInit {
  optionsArray: any[] | undefined;
  constructor(private plcService: AthensPlantNurseryService) {}

  async ngOnInit() {
    this.plcService.getPlantNursery(144).subscribe((data) => {
      this.optionsArray = this.mapOptions(data);
    });
  }

  mapOptions(data: any) {
    const attrData = _map(data, (item) => {
      return {
        x: item.ts,
        y0: item.col3,
        y1: item.col4,
        y2: item.col5,
        y3: item.col6,
        y4: item.col7,
        y5: item.col8,
        y6: item.col9,
        y7: item.col10,
        y8: item.col11,
        y9: item.col12,
        y10: item.col13,
        y11: item.col14,
      };
    });

    const series = [
      {
        name: 'Temperature membrane tank 5',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y0.toFixed(2),
        })),
      },
      {
        name: 'pH membrane tank 5',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y1.toFixed(2),
        })),
      },
      {
        name: 'DO ppm LDO aeriation tank 4A',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y2.toFixed(2),
        })),
      },
      {
        name: 'DO ppm anoxic tank3',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y3.toFixed(2),
        })),
      },
      {
        name: 'MLSS SOLID mg/l membrane tank 5',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y4.toFixed(2),
        })),
      },
      {
        name: 'MLSS SOLID mg/l membrane tank 4A',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y5.toFixed(2),
        })),
      },
      {
        name: 'LDO DO ppm anoxic',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y6.toFixed(2),
        })),
      },
      {
        name: 'Temperature anoxic tank',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y7.toFixed(2),
        })),
      },
      {
        name: 'Turbidity NTU tank 10',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y8.toFixed(2),
        })),
      },
      {
        name: 'LT1',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y9.toFixed(2),
        })),
      },
      {
        name: 'LT2',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y10.toFixed(2),
        })),
      },
      {
        name: 'LT3',
        data: _map(attrData, (item) => ({
          x: item.x,
          y: item.y11.toFixed(2),
        })),
      },
    ];

    const createOptions = (seriesData: any) => {
      return {
        chart: {
          id: seriesData.name,
          type: 'line',
          height: 350,
          offsetX: 0,
          offsetY: 0,
          zoom: {
            enabled: false,
          },
        },
        title: { text: seriesData.name, align: 'left' },
        series: [seriesData],
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          min: function (min: number) {
            return min * 0.9;
          },
          max: function (max: number) {
            return max * 1.1;
          },
        },
        noData: {
          text: 'Loading...',
          align: 'center',
          verticalAlign: 'middle',
          offsetX: 0,
          offsetY: 0,
        },
      };
    };

    const optionsArray = series.map((seriesData) => createOptions(seriesData));

    return optionsArray;
  }
}
