import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StepperStepComponent } from '../stepper-step/stepper-step.component';
import { StepperComponent } from './stepper.component';
import { StepperStepState, StepperType } from '../models/stepper.models';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Custom Components/Steppers/Stepper',
  excludeStories: /.*Data$/,
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      declarations: [StepperStepComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    stepperId: {
      control: { type: 'text' },
      description: 'Id of the stepper.',
      table: {
        category: 'Parameters',
      },
    },
    type: {
      control: { type: 'radio', options: StepperType },
      description: 'Type of stepper',
      table: {
        category: 'Parameters',
      },
    },
    currentStepId: {
      control: { type: 'text' },
      description: 'Id of the step that the user is currently on. Id value must match the id in one of the step.',
      table: {
        category: 'Parameters',
      },
    },
    steps: { control: { type: 'object' }, description: 'Array of steps' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Stepper can be implemented either vertically (default) or horizontally.',
        code: '<rex-stepper>',
      },
    },
  },
} as Meta<StepperComponent>;

export const actionsData = {
  stepClick: action('stepClick'),
};

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  component: StepperComponent,
  props: {
    ...args,
    stepClick: actionsData.stepClick,
  },
});

export const FourStepsDefault = Template.bind({});
FourStepsDefault.parameters = {
  docs: {
    description: {
      story: 'Stepper with four steps.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper stepperId="stepper5" type="" [steps]="steps" (stepClick)="stepClick($event)"></rex-stepper>',
    },
  },
};
FourStepsDefault.args = {
  stepperId: 'stepper5',
  type: StepperType.Default,
  steps: [
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
      icon: 'fal fa-user',
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
  ],
};

export const DefaultUndefined = Template.bind({});
DefaultUndefined.parameters = {
  docs: {
    description: {
      story: 'Stepper without any arguments.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper (stepClick)="stepClick($event)"></rex-stepper>',
    },
  },
};
DefaultUndefined.args = {};

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      story: 'Stepper with one left aligned step.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper [steps]="steps" (stepClick)="stepClick($event)"></rex-stepper>',
    },
  },
};
Default.args = {
  steps: [
    {
      id: 'stepper1',
      title: 'Single Step',
      desc: 'Only displays one left aligned step in the stepper',
      state: StepperStepState.Default,
      valid: true,
      active: true,
    },
  ],
};

export const DefaultHorizontal = Template.bind({});
DefaultHorizontal.parameters = {
  docs: {
    description: {
      story: 'Horizontal stepper with one centered step.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper stepperId="stepper2" type="horizontal" [steps]="steps" (stepClick)="stepClick($event)"></rex-stepper>',
    },
  },
};
DefaultHorizontal.args = {
  type: StepperType.Horizontal,
  steps: [
    {
      id: 'stepper2',
      title: 'Single Step Horizontal',
      desc: 'Only displays one centered step in the stepper',
      state: StepperStepState.Default,
      valid: true,
      active: true,
    },
  ],
};

export const TwoStepsDefault = Template.bind({});
TwoStepsDefault.parameters = {
  docs: {
    description: {
      story: 'Stepper with two steps.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper stepperId="stepper3" type="" [steps]="steps" (stepClick)="stepClick($event)"></rex-stepper>',
    },
  },
};
TwoStepsDefault.args = {
  stepperId: 'stepper3',
  type: StepperType.Default,
  steps: [
    {
      id: 'step1',
      title: 'Step 1 of 2 Default',
      desc: 'Vertical stepper',
      state: StepperStepState.Default,
      valid: true,
      active: true,
    },
    {
      id: 'step2',
      title: 'Step 2 of 2 Default',
      desc: 'Vertical stepper',
      state: StepperStepState.Default,
      valid: true,
      active: true,
    },
  ],
};

export const TwoStepsHorizontal = Template.bind({});
TwoStepsHorizontal.parameters = {
  docs: {
    description: {
      story: 'Horizontal stepper with two steps.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper stepperId="stepper4" type="horizontal" [steps]="steps" (stepClick)="stepClick($event)"></rex-stepper>',
    },
  },
};
TwoStepsHorizontal.args = {
  stepperId: 'stepper4',
  type: StepperType.Horizontal,
  steps: [
    {
      id: 'step1',
      title: 'Step 1 of 2 Horizontal',
      desc: 'Horizontal stepper',
      state: StepperStepState.Default,
      valid: true,
      active: true,
    },
    {
      id: 'step2',
      title: 'Step 2 of 2 Horizontal',
      desc: 'Horizontal Stepper',
      state: StepperStepState.Default,
      valid: true,
      active: true,
    },
  ],
};

export const FourStepsHorizontal = Template.bind({});
FourStepsHorizontal.parameters = {
  docs: {
    description: {
      story: 'Horizontal stepper with four steps.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper stepperId="stepper6" type="horizontal" currentStepId="step2" [steps]="steps" (stepClick)="stepClick($event)"></rex-stepper>',
    },
  },
};
FourStepsHorizontal.args = {
  stepperId: 'stepper6',
  type: StepperType.Horizontal,
  currentStepId: 'step2',
  steps: [
    {
      id: 'step1',
      pill: 1,
      title: 'Step 1 of 4 Horizontal',
      desc: 'Horizontal, Valid and Complete',
      state: StepperStepState.Complete,
      valid: true,
      active: true,
    },
    {
      id: 'step2',
      pill: 2,
      title: 'Step 2 of 4 Horizontal',
      desc: 'Horizontal, Invalid and Complete',
      state: StepperStepState.Complete,
      valid: false,
      active: true,
    },
    {
      id: 'step3',
      pill: 3,
      title: 'Step 3 of 4 Horizontal',
      desc: 'Horizontal, Invalid and Next Step',
      state: StepperStepState.NextStep,
      valid: false,
      active: true,
    },
    {
      id: 'step4',
      pill: 4,
      title: 'Step 4 of 4 Horizontal',
      desc: 'Horizontal, Valid and Inactive',
      state: StepperStepState.Default,
      valid: true,
      active: false,
    },
  ],
};

export const AllPossibleDefaultStates = Template.bind({});
AllPossibleDefaultStates.parameters = {
  docs: {
    description: {
      story: 'Four steps stepper with all default steps.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper stepperId="stepper7" type="horizontal" currentStepId="step2" [steps]="steps" (stepClick)="stepClick($event)"></rex-stepper>',
    },
  },
};
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
      valid: true,
      active: true,
    },
    {
      id: 'step2',
      title: 'Default & Current',
      desc: 'Horizontal, Valid, Active and Current',
      state: StepperStepState.Default,
      valid: true,
      active: true,
    },
    {
      id: 'step3',
      title: 'Default & Invalid',
      desc: 'Horizontal, Invalid and Active',
      state: StepperStepState.Default,
      valid: false,
      active: true,
    },
    {
      id: 'step4',
      title: 'Default & Inactive',
      desc: 'Horizontal, Valid and Inactive',
      state: StepperStepState.Default,
      valid: true,
      active: false,
    },
  ],
};

export const AllPossibleNextStepStates = Template.bind({});
AllPossibleNextStepStates.parameters = {
  docs: {
    description: {
      story: 'Four steps stepper with all next steps.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper stepperId="stepper8" type="horizontal" currentStepId="step2" [steps]="steps" (stepClick)="stepClick($event)"></rex-stepper>',
    },
  },
};
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
      valid: true,
      active: true,
    },
    {
      id: 'step2',
      title: 'Next Step & Current',
      desc: 'Horizontal, Next Step, Valid, Active and Current',
      state: StepperStepState.NextStep,
      valid: true,
      active: true,
    },
    {
      id: 'step3',
      title: 'Next Step & Invalid',
      desc: 'Horizontal, Next Step, Invalid and Active',
      state: StepperStepState.NextStep,
      valid: false,
      active: true,
    },
    {
      id: 'step4',
      title: 'Next Step & Inactive',
      desc: 'Horizontal, Next Step, Valid and Inactive',
      state: StepperStepState.NextStep,
      valid: true,
      active: false,
    },
  ],
};

export const AllPossibleCompleteStates = Template.bind({});
AllPossibleCompleteStates.parameters = {
  docs: {
    description: {
      story: 'Four steps stepper with all complete steps.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper stepperId="stepper9" type="horizontal" currentStepId="step2" [steps]="steps" (stepClick)="stepClick($event)"></rex-stepper>',
    },
  },
};
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
      valid: true,
      active: true,
    },
    {
      id: 'step2',
      title: 'Complete & Current',
      desc: 'Horizontal, Complete, Valid, Active and Current',
      state: StepperStepState.Complete,
      valid: true,
      active: true,
    },
    {
      id: 'step3',
      title: 'Complete & Invalid',
      desc: 'Horizontal, Complete, Invalid and Active',
      state: StepperStepState.Complete,
      valid: false,
      active: true,
    },
    {
      id: 'step4',
      title: 'Complete & Inactive',
      desc: 'Horizontal, Complete, Valid and Inactive',
      state: StepperStepState.Complete,
      valid: true,
      active: false,
    },
  ],
};
