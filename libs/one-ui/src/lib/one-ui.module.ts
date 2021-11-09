import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperStepComponent } from './stepper-step/stepper-step.component';
import { StepperComponent } from './stepper/stepper.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    StepperStepComponent,
    StepperComponent,
    DatepickerComponent
  ],
  exports: [
    StepperStepComponent,
    StepperComponent,
    DatepickerComponent
  ]
})
export class OneUIModule {
}
