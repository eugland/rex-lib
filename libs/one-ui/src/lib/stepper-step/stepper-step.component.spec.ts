import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperStep, StepperStepState, StepperType } from '../models/stepper.models';

import { StepperStepComponent } from './stepper-step.component';

describe('StepperStepComponent', () => {
  let component: StepperStepComponent;
  let fixture: ComponentFixture<StepperStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Setup component', () => {
    describe('ngOnInit', () => {
      it('without step set, all HostBinding properties should be false', () => {
        component.ngOnInit();
        expect(component.isTypeHorizontal).toBe(false);
        expect(component.isStateNextStep).toBe(false);
        expect(component.isStateComplete).toBe(false);
        expect(component.isValid).toBe(false);
        expect(component.isInvalid).toBe(false);
        expect(component.isActive).toBe(false);
        expect(component.isInactive).toBe(false);
      });

      it('with stepper type set to Default, all HostBinding properties should have expected values', () => {
        component.type = StepperType.Default;
        component.ngOnInit();
        expect(component.isTypeHorizontal).toBe(false);
        expect(component.isStateNextStep).toBe(false);
        expect(component.isStateComplete).toBe(false);
        expect(component.isValid).toBe(false);
        expect(component.isInvalid).toBe(false);
        expect(component.isActive).toBe(false);
        expect(component.isInactive).toBe(false);
      });

      it('with stepper type set to Horizontal, all HostBinding properties should have expected values', () => {
        component.type = StepperType.Horizontal;
        component.ngOnInit();
        expect(component.isTypeHorizontal).toBe(true);
        expect(component.isStateNextStep).toBe(false);
        expect(component.isStateComplete).toBe(false);
        expect(component.isValid).toBe(false);
        expect(component.isInvalid).toBe(false);
        expect(component.isActive).toBe(false);
        expect(component.isInactive).toBe(false);
      });

      it('with step\'s state set to Default, valid set to true, active set to true, all HostBinding properties should have expected values', () => {
        component.step = {
          id: 'step1',
          number: 1,
          title: 'Step 1',
          desc: '',
          state: StepperStepState.Default,
          valid: true,
          active: true
        };
        component.ngOnInit();
        expect(component.isTypeHorizontal).toBe(false);
        expect(component.isStateNextStep).toBe(false);
        expect(component.isStateComplete).toBe(false);
        expect(component.isValid).toBe(true);
        expect(component.isInvalid).toBe(false);
        expect(component.isActive).toBe(true);
        expect(component.isInactive).toBe(false);
      });

      it('with step\'s state set to Next Step, valid set to true, active set to true, all HostBinding properties should have expected values', () => {
        component.step = {
          id: 'step1',
          number: 1,
          title: 'Step 1',
          desc: '',
          state: StepperStepState.NextStep,
          valid: true,
          active: true
        };
        component.ngOnInit();
        expect(component.isTypeHorizontal).toBe(false);
        expect(component.isStateNextStep).toBe(true);
        expect(component.isStateComplete).toBe(false);
        expect(component.isValid).toBe(true);
        expect(component.isInvalid).toBe(false);
        expect(component.isActive).toBe(true);
        expect(component.isInactive).toBe(false);
      });

      it('with step\'s state set to Complete, valid set to true, active set to true, all HostBinding properties should have expected values', () => {
        component.step = {
          id: 'step1',
          number: 1,
          title: 'Step 1',
          desc: '',
          state: StepperStepState.Complete,
          valid: true,
          active: true
        };
        component.ngOnInit();
        expect(component.isTypeHorizontal).toBe(false);
        expect(component.isStateNextStep).toBe(false);
        expect(component.isStateComplete).toBe(true);
        expect(component.isValid).toBe(true);
        expect(component.isInvalid).toBe(false);
        expect(component.isActive).toBe(true);
        expect(component.isInactive).toBe(false);
      });

      it('with step\'s state set to Complete, valid set to true, active set to false, all HostBinding properties should have expected values', () => {
        component.step = {
          id: 'step1',
          number: 1,
          title: 'Step 1',
          desc: '',
          state: StepperStepState.Complete,
          valid: true,
          active: false
        };
        component.ngOnInit();
        expect(component.isTypeHorizontal).toBe(false);
        expect(component.isStateNextStep).toBe(false);
        expect(component.isStateComplete).toBe(true);
        expect(component.isValid).toBe(true);
        expect(component.isInvalid).toBe(false);
        expect(component.isActive).toBe(false);
        expect(component.isInactive).toBe(true);
      });
    });

    describe('Click event', () => {
      it('does not raise stepClick event when step is not defined', () => {
        const stepClickSpy = jest.spyOn(component.stepClick, 'emit');
        component.onStepClick('step1');
        expect(stepClickSpy).not.toHaveBeenCalledWith('step1');
      });

      it('does not raise the stepClick event for Default', () => {
        const stepClickSpy = jest.spyOn(component.stepClick, 'emit');
        component.step = {
          id: 'step1',
          number: 1,
          title: 'Step 1',
          desc: '',
          state: StepperStepState.Default,
          valid: true,
          active: true
        };
        component.onStepClick('step1');
        expect(stepClickSpy).not.toHaveBeenCalledWith('step1');
      });

      it('raises the stepClick event on onStepClick for NextStep', () => {
        const stepClickSpy = jest.spyOn(component.stepClick, 'emit');
        const step: StepperStep = {
          id: 'step1',
          number: 1,
          title: 'Step 1',
          desc: '',
          state: StepperStepState.NextStep,
          valid: true,
          active: true
        };
        component.step = step;
        component.onStepClick('step1');
        expect(stepClickSpy).toHaveBeenCalledWith('step1');
      });

      it('raises the stepClick event on onStepClick for Complete', () => {
        const stepClickSpy = jest.spyOn(component.stepClick, 'emit');
        const step: StepperStep = {
          id: 'step1',
          number: 1,
          title: 'Step 1',
          desc: '',
          state: StepperStepState.Complete,
          valid: true,
          active: true
        };
        component.step = step;
        component.onStepClick('step1');
        expect(stepClickSpy).toHaveBeenCalledWith('step1');
      });

      it('does not raises the stepClick event on onStepClick for Inactive', () => {
        const stepClickSpy = jest.spyOn(component.stepClick, 'emit');
        const step: StepperStep = {
          id: 'step1',
          number: 1,
          title: 'Step 1',
          desc: '',
          state: StepperStepState.Complete,
          valid: true,
          active: false
        };
        component.step = step;
        component.onStepClick('step1');
        expect(stepClickSpy).not.toHaveBeenCalledWith('step1');
      });
    });
  });
});
