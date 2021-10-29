import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepperStep, StepperType } from '../stepper.models';

@Component({
  selector: 'rex-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() stepperId = '';
  @Input() type: StepperType = StepperType.Default;
  @Input() steps: Array<StepperStep> | undefined;

  @Output() stepClick = new EventEmitter<string>();
  
  // Currently selected step's id value
  currentStepId = '';

  /**
   * Gets claases to be added to stepper
   */
  get stepperClass(): string {
    return `${this.type ? this.type : ''}${this.type === StepperType.Horizontal ? ' d-flex' : ''}`;
  }

  /**
   * Compute the id to be associated with a specific step
   * @param index position number of the step in the array
   * @returns id to be associated with the specific step
   */
  stepId(index: number): string {
    return `${(this.stepperId ? this.stepperId + '-' : '')}${this.steps ? this.steps[index].id : 'step'}-${index}`;
  }
  
  /**
   * Compute the classes to be associated with a specific step
   * @param index position number of the step in the array
   * @returns class to be assiciated with the specific step
   */
  stepClass(index: number): string {
    const stepsLength = (this.steps ? this.steps.length : 0);
    const step = this.steps ? this.steps[index] : undefined;
    const stepPosition = stepsLength === 1 ? '' : (index === 0 ? 'first' : (index === stepsLength - 1 ? 'last' : 'middle'));
    const _stepClass = step ? `${step.id === this.currentStepId ? ' current': ''}` : ``;
    return `${this.type === StepperType.Horizontal ? this.type : ''} ${stepPosition} ${_stepClass}`;
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
