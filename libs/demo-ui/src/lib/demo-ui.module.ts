import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DemoUIRoutingModule } from './demo-ui-routing.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from './input-text/input-text.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DemoUIRoutingModule,
    DatePickerModule,
    InputTextModule
  ],
  declarations: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoUIModule {
}
