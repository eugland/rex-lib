import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'ngx-bootstrap/accordion';

import { RexAccordionComponent } from './accordion.component';

@NgModule({
  imports: [
    CommonModule, 
    AccordionModule.forRoot()
  ],
  declarations: [
    RexAccordionComponent
  ],
  exports: [
    RexAccordionComponent
  ]
})
export class RexAccordionModule {}
