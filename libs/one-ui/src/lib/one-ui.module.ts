import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperStepComponent } from './stepper-step/stepper-step.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    StepperStepComponent,
    StepperComponent
  ],
  exports: [
    StepperStepComponent,
    StepperComponent
  ],
})
export class OneUIModule {}
