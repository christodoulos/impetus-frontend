import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

type fill = { colors: string[]; opacity: number };

@Component({
  selector: 'apex-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss'],
})
export class ApexChartComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';

  @Input() chartType: string = 'line';
  @Input() data: Array<number> = [];
  @Input() chartColor: string = '#727cf5';

  series: any = [{ name: '', data: [] }];
  xaxis: any = {};
  yaxis: any = {};
  chartData: any = {};
  titleRef: any = {};
  subTitleRef: any = {};
  plotOptions: any = {};
  tooltip: any = {};
  stroke = {};
  fillData!: fill;
  labels: string[] = [];
  grid = {};
  dataLabels = {};

  ngOnInit(): void {
    this.series = [{ name: 'Hyper Sales', data: this.data }];
    this.xaxis = {
      type: 'datetime',
      crosshairs: {
        width: 1,
      },
    };
    this.yaxis = { min: 0 };

    this.plotOptions = {
      bar: {
        columnWidth: '60%',
      },
    };

    this.titleRef = {
      text: this.title,
      offsetX: 20,
      offsetY: 20,
      style: {
        fontSize: '24px',
      },
    };

    this.labels = [];
    let i = 1;
    for (const d of this.data) {
      this.labels.push('2018-09-' + i);
      i++;
    }

    this.subTitleRef = {
      text: this.subTitle,
      offsetX: 20,
      offsetY: 55,
      style: {
        fontSize: '14px',
      },
    };

    this.tooltip = {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    };

    if (this.chartType === 'area') {
      this.stroke = {
        width: 2,
        curve: 'straight',
      };
    }

    this.fillData = {
      colors: [this.chartColor],
      opacity: 0.5,
    };

    if (this.chartType === 'area') {
      this.fillData['opacity'] = 0.2;
    }

    this.grid = {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    };

    this.dataLabels = {
      enabled: false,
    };

    this.chartData = {
      type: this.chartType,
      height: 172,
      sparkline: {
        enabled: true,
      },
      markers: {
        size: 0,
      },
    };
  }

  // checks whether val is string or number
  isNumber(val: string | number): boolean {
    return typeof val === 'number';
  }
}
