import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepperStep, StepperType } from '../stepper.models';

@Component({
  selector: 'rex-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() stepperId!: string | '';
  @Input() type!: StepperType | StepperType.Default;
  @Input() steps!: Array<StepperStep>;

  @Output() stepClick = new EventEmitter<string>();
  
  currentStepId = '';

  get stepperClass(): string {
    return `${this.type}${this.type === StepperType.Horizontal ? ' d-flex' : ''}`;
  }
  
  stepClass(index: number): string {
    const stepPosition = this.steps.length === 1 ? '' : (index === 0 ? 'first' : (index === this.steps.length - 1 ? 'last' : 'middle'));
    const _stepClass = this.steps[index] ? `${this.steps[index].id === this.currentStepId ? ' current': ''}` : ``;
    return `${this.type} ${stepPosition} ${_stepClass}`;
  }
  
  /**
   * Method to trigger the stepClick event
   * @param id string
   */
  onStepClick(id: string) {
    if (this.currentStepId !== id) {
      this.currentStepId = id;
      this.stepClick.emit(id);
    }
  }
}
