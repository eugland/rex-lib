import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { StepperStep, StepperStepState, StepperType } from '../stepper.models';

@Component({
  selector: 'rex-stepper-step,[rexStepperStep]',
  templateUrl: './stepper-step.component.html',
  styleUrls: ['./stepper-step.component.scss']
})
export class StepperStepComponent implements OnInit {
  @HostBinding('class') class = `rex-stepper-step`;
  @HostBinding('class.horizontal') isTypeHorizontal: boolean | undefined;
  @HostBinding('class.next-step') isStateNextStep: boolean | undefined;
  @HostBinding('class.complete') isStateComplete: boolean | undefined;
  @HostBinding('class.valid') isValid: boolean | undefined;
  @HostBinding('class.invalid') isInvalid: boolean | undefined;
  @HostBinding('class.active') isActive: boolean | undefined;
  @HostBinding('class.inactive') isInactive: boolean | undefined;

  @Input() type: StepperType = StepperType.Default;
  @Input() step: StepperStep | undefined;

  @Output() stepClick = new EventEmitter<string>();

  ngOnInit() {
    this.isTypeHorizontal = this.type === StepperType.Horizontal;
    this.isStateNextStep = this.step ? this.step.state === StepperStepState.NextStep : false;
    this.isStateComplete = this.step ? this.step.state === StepperStepState.Complete : false;
    this.isValid = this.step ? this.step.valid : false;
    this.isInvalid = this.step ? !this.step.valid : false;
    this.isActive = this.step ? this.step.active : false;
    this.isInactive = this.step ? !this.step.active : false;
  }

  /**
   * TODO: Update to add icon within the bullet
   */
  get iconClass(): string {
    const _iconClass = ``;
    return _iconClass;
  }

  /**
   * Component method to trigger the stepClick event
   * @param id string
   */
  onStepClick(id: string) {
    if (this.step && this.step.active) {
      if (this.step.state === StepperStepState.Complete
        || this.step.state === StepperStepState.NextStep) {
          this.stepClick.emit(id);
        }
    }
  }
}
