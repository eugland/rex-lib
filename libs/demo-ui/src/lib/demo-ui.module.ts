import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DemoUIRoutingModule } from './demo-ui-routing.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from './input-text/input-text.module';
import { TimePickerModule } from './time-picker/time-picker.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DemoUIRoutingModule,
    DatePickerModule,
    InputTextModule,
    TimePickerModule,
    ModalModule,
  ],
  declarations: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoUIModule {
}
