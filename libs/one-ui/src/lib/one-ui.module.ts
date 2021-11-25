import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperStepComponent } from './stepper-step/stepper-step.component';
import { StepperComponent } from './stepper/stepper.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TimepickerComponent } from './timepicker/timepicker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    StepperStepComponent,
    StepperComponent,
    DatepickerComponent,
    TimepickerComponent
  ],
  exports: [
    StepperStepComponent,
    StepperComponent,
    DatepickerComponent,
    TimepickerComponent
  ]
})
export class OneUIModule {
}
