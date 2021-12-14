import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';
import { RexAccordionModule } from '@rex-lib/one-ui';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    RexAccordionModule,
    AccordionRoutingModule
  ]
})
export class AccordionModule { }
