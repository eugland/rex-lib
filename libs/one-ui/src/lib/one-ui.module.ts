import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperStepComponent } from './stepper-step/stepper-step.component';
import { StepperComponent } from './stepper/stepper.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    StepperStepComponent,
    StepperComponent,
    DatepickerComponent
  ],
  exports: [
    StepperStepComponent,
    StepperComponent,
    DatepickerComponent
  ],
})
export class OneUIModule {}
