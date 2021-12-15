import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OneUIModule, StepperComponent } from '@rex-lib/one-ui';
import { SteppersRoutingModule } from './steppers-routingmodule';
import { SteppersComponent } from './steppers.component';

@NgModule({
  imports: [CommonModule, SteppersRoutingModule, OneUIModule],
  declarations: [SteppersComponent],
})
export class SteppersModule {}
