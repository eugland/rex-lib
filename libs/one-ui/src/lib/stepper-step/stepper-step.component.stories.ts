import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StepperStepComponent } from './stepper-step.component';
import { action } from '@storybook/addon-actions';
import { StepperStepState, StepperType } from '../models/stepper.models';
import { CommonModule } from '@angular/common';

export default {
  title: 'Custom Components/Steppers/Stepper Step',
  excludeStories: /.*Data$/,
  component: StepperStepComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    type: { control: { type: 'radio', options: StepperType }, description: 'Type of stepper' },
    step: { control: { type: 'object' }, description: 'Object of step' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Single step in a stepper. Can be used as part of a stepper or by itself.',
        code: '<rex-stepper-step>',
      },
    },
  },
} as Meta<StepperStepComponent>;

export const actionsData = {
  stepClick: action('stepClick'),
};

const Template: Story<StepperStepComponent> = (args: StepperStepComponent) => ({
  component: StepperStepComponent,
  props: {
    ...args,
    stepClick: actionsData.stepClick,
  },
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      type: 'code',
      code: '<rex-stepper-step [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
Default.args = {
  step: {
    id: 'step1',
    title: 'Step Default Self Default Active',
    desc: 'Displays left aligned and unfilled circle step with primary colour without any number or icon and is not clickable',
    state: StepperStepState.Default,
    valid: true,
    active: true,
  },
};

export const StepTypeNotDefined = Template.bind({});
StepTypeNotDefined.storyName = 'Step where arguments are not defined';
StepTypeNotDefined.parameters = {
  docs: {
    source: {
      type: 'code',
      code: '<rex-stepper-step (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepTypeNotDefined.args = {};

export const StepDefaultSelfDefaultInactive = Template.bind({});
StepDefaultSelfDefaultInactive.parameters = {
  docs: {
    description: {
      story: 'Inactive default step with default state',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepDefaultSelfDefaultInactive.args = {
  step: {
    id: 'step2',
    title: 'Step Default Self Default Inactive',
    desc: 'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Default,
    valid: true,
    active: false,
  },
};

export const StepDefaultSelfNextStepActive = Template.bind({});
StepDefaultSelfNextStepActive.parameters = {
  docs: {
    description: {
      story:
        'Displays left aligned and unfilled circle step with primary colour without any number or icon and is clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepDefaultSelfNextStepActive.args = {
  step: {
    id: 'step3',
    pill: 'A',
    icon: 'fal fa-user',
    title: 'Step Default Self NextStep Active',
    desc: 'Displays left aligned and unfilled circle step with primary colour without any number or icon and is clickable',
    state: StepperStepState.NextStep,
    valid: true,
    active: true,
  },
};

export const StepDefaultSelfNextStepInactive = Template.bind({});
StepDefaultSelfNextStepInactive.parameters = {
  docs: {
    description: {
      story:
        'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepDefaultSelfNextStepInactive.args = {
  step: {
    id: 'step4',
    icon: 'fal fa-user',
    title: 'Step Default Self NextStep Inactive',
    desc: 'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.NextStep,
    valid: true,
    active: false,
  },
};

export const StepDefaultSelfCompleteActive = Template.bind({});
StepDefaultSelfCompleteActive.parameters = {
  docs: {
    description: {
      story:
        'Displays left aligned and filled circle step with primary colour without any number or icon and is clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepDefaultSelfCompleteActive.args = {
  step: {
    id: 'step5',
    title: 'Step Default Self Complete Active',
    desc: 'Displays left aligned and filled circle step with primary colour without any number or icon and is clickable',
    state: StepperStepState.Complete,
    valid: true,
    active: true,
  },
};

export const StepDefaultSelfCompleteInactive = Template.bind({});
StepDefaultSelfCompleteInactive.parameters = {
  docs: {
    description: {
      story:
        'Displays left aligned and filled circle step with gray colour without any number or icon and is not clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepDefaultSelfCompleteInactive.args = {
  step: {
    id: 'step6',
    title: 'Step Default Self Complete Inactive',
    desc: 'Displays left aligned and filled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Complete,
    valid: true,
    active: false,
  },
};

export const StepDefaultSelfInvalidActive = Template.bind({});
StepDefaultSelfInvalidActive.parameters = {
  docs: {
    description: {
      story:
        'Displays left aligned and unfilled circle step with danger colour without any number or icon and is clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepDefaultSelfInvalidActive.args = {
  step: {
    id: 'step7',
    title: 'Step Default Self Invalid Active',
    desc: 'Displays left aligned and unfilled circle step with danger colour without any number or icon and is clickable',
    state: StepperStepState.NextStep,
    valid: false,
    active: true,
  },
};

export const StepDefaultSelfInvalidInactive = Template.bind({});
StepDefaultSelfInvalidInactive.parameters = {
  docs: {
    description: {
      story:
        'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepDefaultSelfInvalidInactive.args = {
  step: {
    id: 'step8',
    title: 'Step Default Self Invalid Inactive',
    desc: 'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.NextStep,
    valid: false,
    active: false,
  },
};

export const StepDefaultSelfCompleteInvalidActive = Template.bind({});
StepDefaultSelfCompleteInvalidActive.parameters = {
  docs: {
    description: {
      story:
        'Displays left aligned and unfilled circle step with danger colour without any number or icon and is clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepDefaultSelfCompleteInvalidActive.args = {
  step: {
    id: 'step9',
    title: 'Step Default Self Complete Invalid Active',
    desc: 'Displays left aligned and unfilled circle step with danger colour without any number or icon and is clickable',
    state: StepperStepState.Complete,
    valid: false,
    active: true,
  },
};

export const StepDefaultSelfCompleteInvalidInactive = Template.bind({});
StepDefaultSelfCompleteInvalidInactive.parameters = {
  docs: {
    description: {
      story:
        'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepDefaultSelfCompleteInvalidInactive.args = {
  step: {
    id: 'step10',
    title: 'Step Default Self Complete Invalid Inactive',
    desc: 'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Complete,
    valid: false,
    active: false,
  },
};

export const StepHorizontalSelfDefaultActive = Template.bind({});
StepHorizontalSelfDefaultActive.parameters = {
  docs: {
    description: {
      story:
        'Displays centered and unfilled circle step with primary colour without any number or icon and is not clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step type="horizontal" [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepHorizontalSelfDefaultActive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step11',
    title: 'Step Horizontal Self Default Active',
    desc: 'Displays centered and unfilled circle step with primary colour without any number or icon and is not clickable',
    state: StepperStepState.Default,
    valid: true,
    active: true,
  },
};

export const StepHorizontalSelfDefaultInactive = Template.bind({});
StepHorizontalSelfDefaultInactive.parameters = {
  docs: {
    description: {
      story:
        'Displays centered and unfilled circle step with gray colour without any number or icon and is not clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step type="horizontal" [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepHorizontalSelfDefaultInactive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step12',
    title: 'Step Horizontal Self Default Inactive',
    desc: 'Displays centered and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Default,
    valid: true,
    active: false,
  },
};

export const StepHorizontalSelfNextStepActive = Template.bind({});
StepHorizontalSelfNextStepActive.parameters = {
  docs: {
    description: {
      story:
        'Displays centered and unfilled circle step with primary colour without any number or icon and is clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step type="horizontal" [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepHorizontalSelfNextStepActive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step13',
    title: 'Step Horizontal Self NextStep Active',
    desc: 'Displays centered and unfilled circle step with primary colour without any number or icon and is clickable',
    state: StepperStepState.NextStep,
    valid: true,
    active: true,
  },
};

export const StepHorizontalSelfNextStepInactive = Template.bind({});
StepHorizontalSelfNextStepInactive.parameters = {
  docs: {
    description: {
      story:
        'Displays centered and unfilled circle step with gray colour without any number or icon and is not clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step type="horizontal" [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepHorizontalSelfNextStepInactive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step14',
    title: 'Step Horizontal Self NextStep Inactive',
    desc: 'Displays centered and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.NextStep,
    valid: true,
    active: false,
  },
};

export const StepHorizontalSelfCompleteActive = Template.bind({});
StepHorizontalSelfCompleteActive.parameters = {
  docs: {
    description: {
      story:
        'Displays centered and filled circle step with primary colour without any number or icon and is clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step type="horizontal" [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepHorizontalSelfCompleteActive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step15',
    title: 'Step Horizontal Self Complete Active',
    desc: 'Displays centered and filled circle step with primary colour without any number or icon and is clickable',
    state: StepperStepState.Complete,
    valid: true,
    active: true,
  },
};

export const StepHorizontalSelfCompleteInactive = Template.bind({});
StepHorizontalSelfCompleteInactive.parameters = {
  docs: {
    description: {
      story:
        'Displays centered and filled circle step with gray colour without any number or icon and is not clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step type="horizontal" [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepHorizontalSelfCompleteInactive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step16',
    title: 'Step Horizontal Self Complete Inactive',
    desc: 'Displays centered and filled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Complete,
    valid: true,
    active: false,
  },
};

export const StepHorizontalSelfInvalidActive = Template.bind({});
StepHorizontalSelfInvalidActive.parameters = {
  docs: {
    description: {
      story:
        'Displays centered and unfilled circle step with danger colour without any number or icon and is clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step type="horizontal" [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepHorizontalSelfInvalidActive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step17',
    title: 'Step Horizontal Self Invalid Active',
    desc: 'Displays centered and unfilled circle step with danger colour without any number or icon and is clickable',
    state: StepperStepState.NextStep,
    valid: false,
    active: true,
  },
};

export const StepHorizontalSelfInvalidInactive = Template.bind({});
StepHorizontalSelfInvalidInactive.parameters = {
  docs: {
    description: {
      story:
        'Displays centered and unfilled circle step with gray colour without any number or icon and is not clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step type="horizontal" [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepHorizontalSelfInvalidInactive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step18',
    title: 'Step Horizontal Self Invalid Inactive',
    desc: 'Displays centered and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.NextStep,
    valid: false,
    active: false,
  },
};

export const StepHorizontalSelfCompleteInvalidActive = Template.bind({});
StepHorizontalSelfCompleteInvalidActive.parameters = {
  docs: {
    description: {
      story: 'Displays centered and filled circle step with danger colour without any number or icon and is clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step type="horizontal" [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepHorizontalSelfCompleteInvalidActive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step19',
    title: 'Step Horizontal Self Complete Invalid Active',
    desc: 'Displays centered and filled circle step with danger colour without any number or icon and is clickable',
    state: StepperStepState.Complete,
    valid: false,
    active: true,
  },
};

export const StepHorizontalSelfCompleteInvalidInactive = Template.bind({});
StepHorizontalSelfCompleteInvalidInactive.parameters = {
  docs: {
    description: {
      story:
        'Displays centered and filled circle step with gray colour without any number or icon and is not clickable.',
    },
    source: {
      type: 'code',
      code: '<rex-stepper-step type="horizontal" [step]="step" (stepClick)="stepClick($event)"></rex-stepper-step>',
    },
  },
};
StepHorizontalSelfCompleteInvalidInactive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step20',
    title: 'Step Horizontal Self Complete Invalid Inactive',
    desc: 'Displays centered and filled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Complete,
    valid: false,
    active: false,
  },
};
