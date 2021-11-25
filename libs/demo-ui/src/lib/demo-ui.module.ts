import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DemoUIRoutingModule } from './demo-ui-routing.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimePickerModule } from './time-picker/time-picker.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DemoUIRoutingModule,
    DatePickerModule,
    TimePickerModule
  ],
  declarations: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoUIModule {
}
