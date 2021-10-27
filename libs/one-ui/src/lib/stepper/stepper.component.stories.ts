import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StepperStepComponent } from '../stepper-step/stepper-step.component';
import { StepperComponent } from './stepper.component';
import * as stepperStepComponentStories from '../stepper-step/stepper-step.component.stories';
import { StepperStepState, StepperType } from '../stepper.models';
import { CommonModule } from '@angular/common';

export default {
  title: 'Stepper Component',
  excludeStories: /.*Data$/,
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      declarations: [StepperComponent, StepperStepComponent],
      imports: [CommonModule],
    })
  ],
} as Meta<StepperComponent>;

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  component: StepperComponent,
  props: {
    ...args,
    stepClick: stepperStepComponentStories.actionsData.stepClick,
  },
});

export const Default = Template.bind({});
Default.args = {
  steps: [
    {
      id: 'stepper1',
      title: 'Single Step',
      desc: 'Only displays one left aligned step in the stepper',
      state: StepperStepState.Default,
      isValid: true,
      active: true
    },
  ]
};

export const DefaultHorizontal = Template.bind({});
DefaultHorizontal.args = {
  type: StepperType.Horizontal,
  steps: [
    {
      id: 'stepper2',
      title: 'Single Step Horizontal',
      desc: 'Only displays one centered step in the stepper',
      state: StepperStepState.Default,
      isValid: true,
      active: true
    },
  ]
};

export const TwoStepsDefault = Template.bind({});
TwoStepsDefault.args = {
  stepperId: 'stepper3',
  type: StepperType.Default,
  steps: [
    {
      id: 'step1',
      title: 'Step 1 of 2 Default',
      desc: 'Vertical stepper',
      state: StepperStepState.Default,
      isValid: true,
      active: true
    },
    {
      id: 'step2',
      title: 'Step 2 of 2 Default',
      desc: 'Vertical stepper',
      state: StepperStepState.Default,
      isValid: true,
      active: true
    }
  ]
};

export const TwoStepsHorizontal = Template.bind({});
TwoStepsHorizontal.args = {
  stepperId: 'stepper4',
  type: StepperType.Horizontal,
  steps: [
    {
      id: 'step1',
      title: 'Step 1 of 2 Horizontal',
      desc: 'Horizontal stepper',
      state: StepperStepState.Default,
      isValid: true,
      active: true
    },
    {
      id: 'step2',
      title: 'Step 2 of 2 Horizontal',
      desc: 'Horizontal Stepper',
      state: StepperStepState.Default,
      isValid: true,
      active: true
    }
  ]
};

export const FourStepsDefault = Template.bind({});
FourStepsDefault.args = {
  stepperId: 'stepper5',
  type: StepperType.Default,
  steps: [
    {
      id: 'step1',
      number: 1,
      title: 'Step 1 of 4 Default',
      desc: 'Vertical, Valid and Complete',
      state: StepperStepState.Complete,
      isValid: true,
      active: true
    },
    {
      id: 'step2',
      number: 2,
      title: 'Step 2 of 4 Default',
      desc: 'Vertical, Invalid and Complete',
      state: StepperStepState.Complete,
      isValid: false,
      active: true
    },
    {
      id: 'step3',
      number: 3,
      title: 'Step 3 of 4 Default',
      desc: 'Vertical, Invalid and Next Step',
      state: StepperStepState.NextStep,
      isValid: false,
      active: true
    },
    {
      id: 'step4',
      number: 4,
      title: 'Step 4 of 4 Default',
      desc: 'Vertical, Valid and Inactive',
      state: StepperStepState.Default,
      isValid: true,
      active: false
    }
  ]
};

export const FourStepsHorizontal = Template.bind({});
FourStepsHorizontal.args = {
  stepperId: 'stepper6',
  type: StepperType.Horizontal,
  currentStepId: 'step2',
  steps: [
    {
      id: 'step1',
      number: 1,
      title: 'Step 1 of 4 Horizontal',
      desc: 'Horizontal, Valid and Complete',
      state: StepperStepState.Complete,
      isValid: true,
      active: true
    },
    {
      id: 'step2',
      number: 2,
      title: 'Step 2 of 4 Horizontal',
      desc: 'Horizontal, Invalid and Complete',
      state: StepperStepState.Complete,
      isValid: false,
      active: true
    },
    {
      id: 'step3',
      number: 3,
      title: 'Step 3 of 4 Horizontal',
      desc: 'Horizontal, Invalid and Next Step',
      state: StepperStepState.NextStep,
      isValid: false,
      active: true
    },
    {
      id: 'step4',
      number: 4,
      title: 'Step 4 of 4 Horizontal',
      desc: 'Horizontal, Valid and Inactive',
      state: StepperStepState.Default,
      isValid: true,
      active: false
    }
  ]
};

export const AllPossibleDefaultStates = Template.bind({});
AllPossibleDefaultStates.args = {
  stepperId: 'stepper7',
  type: StepperType.Horizontal,
  currentStepId: 'step2',
  steps: [
    {
      id: 'step1',
      title: 'Default & Valid',
      desc: 'Horizontal, Valid and Active',
      state: StepperStepState.Default,
      isValid: true,
      active: true
    },
    {
      id: 'step2',
      title: 'Default & Current',
      desc: 'Horizontal, Valid, Active and Current',
      state: StepperStepState.Default,
      isValid: true,
      active: true
    },
    {
      id: 'step3',
      title: 'Default & Invalid',
      desc: 'Horizontal, Invalid and Active',
      state: StepperStepState.Default,
      isValid: false,
      active: true
    },
    {
      id: 'step4',
      title: 'Default & Inactive',
      desc: 'Horizontal, Valid and Inactive',
      state: StepperStepState.Default,
      isValid: true,
      active: false
    }
  ]
};

export const AllPossibleNextStepStates = Template.bind({});
AllPossibleNextStepStates.args = {
  stepperId: 'stepper8',
  type: StepperType.Horizontal,
  currentStepId: 'step2',
  steps: [
    {
      id: 'step1',
      title: 'Next Step & Valid',
      desc: 'Horizontal, Next Step, Valid and Active',
      state: StepperStepState.NextStep,
      isValid: true,
      active: true
    },
    {
      id: 'step2',
      title: 'Next Step & Current',
      desc: 'Horizontal, Next Step, Valid, Active and Current',
      state: StepperStepState.NextStep,
      isValid: true,
      active: true
    },
    {
      id: 'step3',
      title: 'Next Step & Invalid',
      desc: 'Horizontal, Next Step, Invalid and Active',
      state: StepperStepState.NextStep,
      isValid: false,
      active: true
    },
    {
      id: 'step4',
      title: 'Next Step & Inactive',
      desc: 'Horizontal, Next Step, Valid and Inactive',
      state: StepperStepState.NextStep,
      isValid: true,
      active: false
    }
  ]
};

export const AllPossibleCompleteStates = Template.bind({});
AllPossibleCompleteStates.args = {
  stepperId: 'stepper9',
  type: StepperType.Horizontal,
  currentStepId: 'step2',
  steps: [
    {
      id: 'step1',
      title: 'Complete & Valid',
      desc: 'Horizontal, Complete, Valid and Active',
      state: StepperStepState.Complete,
      isValid: true,
      active: true
    },
    {
      id: 'step2',
      title: 'Complete & Current',
      desc: 'Horizontal, Complete, Valid, Active and Current',
      state: StepperStepState.Complete,
      isValid: true,
      active: true
    },
    {
      id: 'step3',
      title: 'Complete & Invalid',
      desc: 'Horizontal, Complete, Invalid and Active',
      state: StepperStepState.Complete,
      isValid: false,
      active: true
    },
    {
      id: 'step4',
      title: 'Complete & Inactive',
      desc: 'Horizontal, Complete, Valid and Inactive',
      state: StepperStepState.Complete,
      isValid: true,
      active: false
    }
  ]
};
