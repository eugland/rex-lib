import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DemoUIRoutingModule } from './demo-ui-routing.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    DemoUIRoutingModule,
    DatePickerModule
  ],
  declarations: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoUIModule {
}
