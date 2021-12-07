import { NgModule } from '@angular/core';
import { TimePickerRoutingModule } from './time-picker-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OneUIModule } from '@rex-lib/one-ui';
import { TimePickerComponent } from './time-picker.component';

@NgModule({
  imports: [
    TimePickerRoutingModule,
    HttpClientModule,
    OneUIModule
  ],
  declarations: [TimePickerComponent]
})
export class TimePickerModule {
}
