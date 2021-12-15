import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StepperStepState, StepperType } from '@rex-lib/one-ui';

@Component({
  templateUrl: './steppers.component.html',
  styleUrls: ['./steppers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SteppersComponent implements OnInit {
  StepperType = StepperType;

  constructor() {}

  ngOnInit(): void {}

  stepperType = StepperType.Horizontal;

  step = {
    id: 'step2',
    pill: 2,
    title: 'Step 2 of 4 Default',
    desc: 'Vertical, Invalid and Complete',
    state: StepperStepState.Complete,
    valid: false,
    active: true,
  };
  step1CodeSnippet = `<rex-stepper-step [step]="step"></rex-stepper-step>`;
  step1CodeSnippetNoBinding = `<rex-stepper-step
  data-step='{"id":"step2","pill":"A","title":"Step 1 of 4 Default","desc":"Vertical, Valid and Complete","state":"complete","valid":true,"active":true}'></rex-stepper-step>`;
  step2CodeSnippet = `<rex-stepper-step [type]="stepperType" [step]="step"></rex-stepper-step>`;
  step2CodeSnippetNoBinding = `<rex-stepper-step
  data-type="horizontal"
  data-step='{"id":"step2","pill":"A","title":"Step 1 of 4 Default","desc":"Vertical, Valid and Complete","state":"complete","valid":true,"active":true}'></rex-stepper-step>`;

  stepper1Steps = [
    {
      id: 'step1',
      pill: 1,
      title: 'Step 1 of 4 Default',
      desc: 'Vertical, Valid and Complete',
      state: StepperStepState.Complete,
      valid: true,
      active: true,
    },
    {
      id: 'step2',
      pill: 2,
      title: 'Step 2 of 4 Default',
      desc: 'Vertical, Invalid and Complete',
      state: StepperStepState.Complete,
      valid: false,
      active: true,
    },
    {
      id: 'step3',
      pill: 3,
      title: 'Step 3 of 4 Default',
      desc: 'Vertical, Invalid and Next Step',
      state: StepperStepState.NextStep,
      valid: false,
      active: true,
    },
    {
      id: 'step4',
      pill: 4,
      title: 'Step 4 of 4 Default',
      desc: 'Vertical, Valid and Inactive',
      state: StepperStepState.Default,
      valid: true,
      active: false,
    },
  ];
  stepper1Type = StepperType.Default;
  stepper1CodeSnippet = `<rex-stepper stepperId="stepper1" [type]="stepper1Type" [steps]="stepper1Steps"></rex-stepper>`;
  stepper1CodeSnippetNoBinding = `<rex-stepper
  stepperId="stepper1"
  data-type="default"
  data-steps='[{"id": "step1","pill": 1,"title": "Step 1 of 4 Default","desc": "Vertical, Valid and Complete","state": "complete","valid": true,"active": true},{"id": "step2","pill": 2,"title": "Step 2 of 4 Default","desc": "Vertical, Invalid and Complete","state": "complete","valid": false,"active": true},{"id": "step3","pill": 3,"title": "Step 3 of 4 Default","desc": "Vertical, Invalid and Next Step","state": "next-step","valid": false,"active": true},{"id": "step4","pill": 4,"title": "Step 4 of 4 Default","desc": "Vertical, Valid and Inactive","state": "default","valid": true,"active": false}]'></rex-stepper>`;

  stepper2Steps = [
    {
      id: 'step1',
      pill: 'A',
      title: 'Step 1 of 4 Default',
      desc: 'Vertical, Valid and Complete',
      state: StepperStepState.Complete,
      valid: true,
      active: true,
    },
    {
      id: 'step2',
      pill: 'B',
      title: 'Step 2 of 4 Default',
      desc: 'Vertical, Invalid and Complete',
      state: StepperStepState.Complete,
      valid: false,
      active: true,
    },
    {
      id: 'step3',
      pill: 'C',
      title: 'Step 3 of 4 Default',
      desc: 'Vertical, Invalid and Next Step',
      state: StepperStepState.NextStep,
      valid: false,
      active: true,
    },
    {
      id: 'step4',
      pill: 'D',
      title: 'Step 4 of 4 Default',
      desc: 'Vertical, Valid and Inactive',
      state: StepperStepState.Default,
      valid: true,
      active: false,
    },
  ];
  stepper2CodeSnippet = `<rex-stepper stepperId="stepper2" [type]="stepper2Type" [steps]="stepper2Steps"></rex-stepper>`;
  stepper2CodeSnippetNoBinding = `<rex-stepper
  stepperId="stepper1"
  data-type="horizontal"
  data-steps='[{"id": "step1","pill": "A","title": "Step 1 of 4 Default","desc": "Vertical, Valid and Complete","state": "complete","valid": true,"active": true},{"id": "step2","pill": "B","title": "Step 2 of 4 Default","desc": "Vertical, Invalid and Complete","state": "complete","valid": false,"active": true},{"id": "step3","pill": "C","title": "Step 3 of 4 Default","desc": "Vertical, Invalid and Next Step","state": "next-step","valid": false,"active": true},{"id": "step4","pill": "D","title": "Step 4 of 4 Default","desc": "Vertical, Valid and Inactive","state": "default","valid": true,"active": false}]'></rex-stepper>`;
}
