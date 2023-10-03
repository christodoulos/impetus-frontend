import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { AppState, loggedIn } from 'src/app/state';

function formatDecimal(data: number, type: any, row: any) {
  return data.toFixed(2);
}

@Component({
  selector: 'modal-apnplc',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './apnplc.component.html',
  styleUrls: ['./apnplc.component.scss'],
})
export class ApnplcModalComponent {
  dtOptions: any = {
    ajax: {
      url: 'https://backend.atticadt.uwmh.eu/api/apn-nursery/metrics/144',
      dataSrc: '',
    },
    order: [[0, 'desc']],
    // dom: "<'wrapperr'lfB>rtip",
    // dom: 'flrtiBp',
    // dom: 'lfrtip',
    buttons: [
      {
        extend: 'excelHtml5',
        text: "<i class='ri-file-excel-2-line'></i>",
        exportOptions: {
          columns: ':visible',
        },
      },
      {
        extend: 'pdfHtml5',
        text: "<i class='ri-file-pdf-line'></i>",
        exportOptions: {
          columns: ':visible',
        },
      },
    ],
    columns: [
      {
        title:
          '<i class="mdi mdi-calendar-month-outline"></i> <i class="mdi mdi-alarm"></i>',
        data: 'ts',
        createdCell: function (cell: any) {
          $(cell).attr('title', 'Timestamp DD/MM/YY H:mm');
        },
      },
      {
        title: '<i class="mdi mdi-coolant-temperature"></i>',
        data: 'col3',
        render: formatDecimal,
        createdCell: function (cell: any) {
          $(cell).attr('title', 'Temperature membrane tank 5');
        },
      },
      {
        title: '<i class="mdi mdi-ph"></i>',
        data: 'col4',
        render: formatDecimal,
        createdCell: function (cell: any) {
          $(cell).attr('title', 'pH membrane tank 5');
        },
      },
      {
        title: '<i class="mdi mdi-flask-outline"></i>',
        data: 'col5',
        render: formatDecimal,
        createdCell: function (cell: any) {
          $(cell).attr('title', 'DO ppm LDO aeriation tank 4A');
        },
      },
      {
        title: '<i class="mdi mdi-flask-outline"></i>',
        data: 'col6',
        render: formatDecimal,
        createdCell: function (cell: any) {
          $(cell).attr('title', 'DO ppm anoxic tank3');
        },
      },
      {
        title: '<i class="mdi mdi-flask-outline"></i>',
        data: 'col7',
        render: formatDecimal,
        createdCell: function (cell: any) {
          $(cell).attr('title', 'MLSS SOLID mg/l membrane tank 5');
        },
      },
      {
        title: '<i class="mdi mdi-flask-outline"></i>',
        data: 'col8',
        render: formatDecimal,
        createdCell: function (cell: any) {
          $(cell).attr('title', 'MLSS SOLID mg/l membrane tank 4A');
        },
      },
      {
        title: '<i class="mdi mdi-flask-outline"></i>',
        data: 'col9',
        render: formatDecimal,
        createdCell: function (cell: any) {
          $(cell).attr('title', 'LDO DO ppm anoxic');
        },
      },
      {
        title: '<i class="mdi mdi-coolant-temperature"></i>',
        data: 'col10',
        render: formatDecimal,
        createdCell: function (cell: any) {
          $(cell).attr('title', 'Temperature anoxic tank');
        },
      },
      {
        title: '<i class="mdi mdi-car-turbocharger"></i>',
        data: 'col11',
        render: formatDecimal,
        createdCell: function (cell: any) {
          $(cell).attr('title', 'Turbidity NTU tank 10');
        },
      },
      {
        title: '<i class="mdi mdi-waves"></i>',
        data: 'col12',
        defaultContent: '<i>N/A</i>',
        createdCell: function (cell: any) {
          $(cell).attr('title', 'LT1 tank level in mm');
        },
      },
      {
        title: '<i class="mdi mdi-waves"></i>',
        data: 'col13',
        defaultContent: '<i>N/A</i>',
        createdCell: function (cell: any) {
          $(cell).attr('title', 'LT2 tank level in mm');
        },
      },
      {
        title: '<i class="mdi mdi-waves"></i>',
        data: 'col14',
        defaultContent: '<i>N/A</i>',
        createdCell: function (cell: any) {
          $(cell).attr('title', 'LT3 tank level in mm');
        },
      },
    ],
    columnDefs: [
      {
        targets: 0,
        render: function (data: any, type: string, row: any) {
          if (type === 'display' || type === 'filter') {
            return moment.utc(data).format('DD/MM/YY HH:mm');
          }
          return data;
        },
        type: 'date',
      },
    ],
    responsive: true,
  };

  loggedIn$ = this.store.select(loggedIn);
  constructor(public modal: NgbActiveModal, private store: Store<AppState>) {}
}
