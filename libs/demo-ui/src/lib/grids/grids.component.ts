import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef, ColGroupDef, GridOptions, ColumnApi } from 'ag-grid-community';

@Component({
  selector: 'rex-lib-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.scss'],
})
export class GridsComponent implements OnInit {
  private gridApi!: GridOptions;
  private gridColumnApi!: ColumnApi;

  columnDefs: (ColDef | ColGroupDef)[] | null = null;
  autoGroupColumnDef: any;
  defaultColDef!: ColDef;
  rowSelection: any;
  rowGroupPanelShow: any;
  pivotPanelShow: any;
  rowData!: any[];

  rowData2: any;
  columnDefs2: any;

  gridApi1: any;
  gridColumnApi1: any;

  columnDefs1: any;
  defaultColDef1: any;
  rowSelection1: any;
  rowData1: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.columnDefs2 = [
      {
        field: 'athlete',
        minWidth: 170,
        checkboxSelection: this.checkboxSelection,
        headerCheckboxSelection: this.headerCheckboxSelection,
      },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];
    this.autoGroupColumnDef = {
      headerName: 'Group',
      minWidth: 170,
      field: 'athlete',
      valueGetter: (params: any) => {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true },
    };
    this.defaultColDef = {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
    this.rowSelection = 'multiple';
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';

    this.columnDefs = [
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
    ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ];

    this.columnDefs1 = [
      {
        field: 'athlete',
        minWidth: 130,
      },
      {
        field: 'age',
        maxWidth: 90,
      },
      {
        field: 'country',
        minWidth: 120,
      },
      {
        field: 'year',
        maxWidth: 90,
      },
      {
        field: 'date',
        minWidth: 120,
      },
      {
        field: 'sport',
        minWidth: 120,
      },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];
    this.defaultColDef1 = {
      flex: 1,
      minWidth: 100,
    };
    this.rowSelection1 = 'single';
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data: any) => {
        this.rowData2 = data;
      });
  }

  checkboxSelection = (params: any) => {
    return params.columnApi.getRowGroupColumns().length === 0;
  };

  headerCheckboxSelection = (params: any) => {
    return params.columnApi.getRowGroupColumns().length === 0;
  };

  onSelectionChanged(event: any) {
    const selectedRows = this.gridApi1.getSelectedRows();
    // document.querySelector('#selectedRows').innerHTML = selectedRows.length === 1 ? selectedRows[0].athlete : '';
  }

  onGridReady1(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => {
        this.rowData1 = data;
      });
  }
}
