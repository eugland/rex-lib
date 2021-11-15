import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimePickerRoutingModule } from './time-picker-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { TimePickerComponent } from './date-picker.component';
import { OneUIModule } from '@rex-lib/one-ui';

@NgModule({
  imports: [
    TimePickerRoutingModule,
    HttpClientModule,
    OneUIModule
  ],
  declarations: [TimePickerComponent],
})
export class TimePickerModule {}
