import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridsRoutingModule } from './grids-routing.module';
import { GridsComponent } from './grids.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    GridsRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [GridsComponent],
})
export class GridsModule {}
