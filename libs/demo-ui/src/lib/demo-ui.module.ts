import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoUIRoutingModule } from './demo-ui-routing.module';


@NgModule({
  imports: [
    CommonModule,
    DemoUIRoutingModule
  ],
  declarations: [
  

  ],
  exports: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoUIModule {}
