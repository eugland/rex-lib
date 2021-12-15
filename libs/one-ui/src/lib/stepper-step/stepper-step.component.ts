import { Attribute, Component, EventEmitter, HostBinding, Input, Optional, Output } from '@angular/core';
import { StepperStep, StepperStepState, StepperType } from '../models/stepper.models';

@Component({
  selector: 'rex-stepper-step,[rexStepperStep]',
  templateUrl: './stepper-step.component.html',
  styleUrls: ['./stepper-step.component.scss']
})
export class StepperStepComponent {
  @HostBinding('class') class = `rex-stepper-step`;
  @HostBinding('class.horizontal') isTypeHorizontal = false;
  @HostBinding('class.next-step') isStateNextStep = false;
  @HostBinding('class.complete') isStateComplete = false;
  @HostBinding('class.valid') isValid = false;
  @HostBinding('class.invalid') isInvalid = false;
  @HostBinding('class.active') isActive = false;
  @HostBinding('class.inactive') isInactive = false;

  private _type: StepperType = StepperType.Default;
  /**
   * Get type of Stepper
   */
  get type(): StepperType {
    return this._type;
  }
  /**
   * Set type of Stepper
   */
  @Input() set type(val: StepperType) {
    this._type = val;
    this.isTypeHorizontal = this._type === StepperType.Horizontal;
  }

  private _step?: StepperStep;
  /**
   * Get step in a stepper
   */
  get step(): StepperStep | undefined {
    return this._step;
  }
  /**
   * Step in a stepper
   */
  @Input() set step(val: StepperStep | undefined) {
    this._step = val;
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
    const _iconClass = this.step?.pill ? '' : `${this.step?.icon}`;
    return _iconClass;
  }

  @Output() stepClick = new EventEmitter<string>();

  constructor(@Optional() @Attribute('data-type') dataType: string, @Attribute('data-step') dataStep: string) {
    this.type = (dataType && dataType.toLowerCase() === 'horizontal') ? StepperType.Horizontal : StepperType.Default;
    this.step = JSON.parse(dataStep);
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
