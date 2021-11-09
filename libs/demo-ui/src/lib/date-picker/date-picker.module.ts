import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatePickerRoutingModule } from './date-picker-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { DatePickerComponent } from './date-picker.component';
import { OneUIModule } from '@rex-lib/one-ui';

@NgModule({
  imports: [
    DatePickerRoutingModule,
    HttpClientModule,
    OneUIModule
  ],
  declarations: [DatePickerComponent],
})
export class DatePickerModule {}
