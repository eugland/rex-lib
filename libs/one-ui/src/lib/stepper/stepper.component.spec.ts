import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperStep, StepperStepState, StepperType } from '../models/stepper.models';

import { StepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  const stepsMock: StepperStep[] = [
    {
      id: 'step1',
      title: 'Complete & Valid',
      desc: 'Horizontal, Next Step, Valid and Active',
      state: StepperStepState.Complete,
      valid: true,
      active: true
    },
    {
      id: 'step2',
      title: 'Complete & Current',
      desc: 'Horizontal, Next Step, Valid, Active and Current',
      state: StepperStepState.Complete,
      valid: true,
      active: true
    },
    {
      id: 'step3',
      title: 'Next Step & Invalid',
      desc: 'Horizontal, Next Step, Invalid and Active',
      state: StepperStepState.NextStep,
      valid: false,
      active: true
    },
    {
      id: 'step4',
      title: 'Default & Inactive',
      desc: 'Horizontal, Next Step, Valid and Inactive',
      state: StepperStepState.Default,
      valid: true,
      active: false
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Setup component', () => {
    describe('stepperClass', () => {
      it('with type set to Default, stepperClass should return expected value', () => {
        component.type = StepperType.Default;
        expect(component.stepperClass).toBe('');
      });

      it('with type set to Horizontal, stepperClass should return expected value', () => {
        component.type = StepperType.Horizontal;
        expect(component.stepperClass).toBe('horizontal d-flex');
      });
    });

    describe('stepClass', () => {
      it('with mock steps set, stepClass for step 1 should return expected value', () => {
        component.type = StepperType.Default;
        component.steps = stepsMock;
        expect(component.stepClass(0)).toContain('first');
      });

      it('with mock steps set, stepClass for step 2 should return expected value', () => {
        component.type = StepperType.Default;
        component.steps = stepsMock;
        expect(component.stepClass(1)).toContain('middle');
      });

      it('with mock steps set, stepClass for step 3 should return expected value', () => {
        component.type = StepperType.Default;
        component.steps = stepsMock;
        expect(component.stepClass(2)).toContain('middle');
      });

      it('with mock steps set, stepClass for step 4 should return expected value', () => {
        component.type = StepperType.Default;
        component.steps = stepsMock;
        expect(component.stepClass(3)).toContain('last');
      });

      it('with mock steps set and currentStepId set to step2, stepClass should return current class only for step2', () => {
        component.type = StepperType.Default;
        component.steps = stepsMock;
        component.currentStepId = 'step2';
        expect(component.stepClass(0)).not.toContain('current');
        expect(component.stepClass(1)).toContain('current');
        expect(component.stepClass(2)).not.toContain('current');
        expect(component.stepClass(3)).not.toContain('current');
      });
    });

    describe('stepClick', () => {
      it('with mock steps set, currentStepId set to step2, click event should be fired for step1', () => {
        const stepClickSpy = jest.spyOn(component.stepClick, 'emit');
        component.type = StepperType.Default;
        component.steps = stepsMock;
        component.currentStepId = 'step2';
        component.onStepClick('step1');
        expect(stepClickSpy).toHaveBeenCalledWith('step1');
        expect(component.currentStepId).toBe('step1');
      });

      it('with mock steps set, currentStepId set to step2, click event should not fire for step2', () => {
        const stepClickSpy = jest.spyOn(component.stepClick, 'emit');
        component.type = StepperType.Default;
        component.steps = stepsMock;
        component.currentStepId = 'step2';
        component.onStepClick('step2');
        expect(stepClickSpy).not.toHaveBeenCalledWith('step2');
        expect(component.currentStepId).toBe('step2');
      });

      it('with mock steps set, currentStepId set to step2, click event should be fired for step3', () => {
        const stepClickSpy = jest.spyOn(component.stepClick, 'emit');
        component.type = StepperType.Default;
        component.steps = stepsMock;
        component.currentStepId = 'step2';
        component.onStepClick('step3');
        expect(stepClickSpy).toHaveBeenCalledWith('step3');
        expect(component.currentStepId).toBe('step3');
      });
    })
  });
});
