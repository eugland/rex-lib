
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StepperStepComponent } from './stepper-step.component';
import { action } from '@storybook/addon-actions';
import { StepperStepState, StepperType } from '../stepper.models';
import { CommonModule } from '@angular/common';
import { OneUIModule } from '../one-ui.module';

export default {
  title: 'Stepper Step Component',
  excludeStories: /.*Data$/,
  component: StepperStepComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        OneUIModule
      ],
    })
  ],
} as Meta<StepperStepComponent>;

export const actionsData = {
  stepClick: action('stepClick')
};

const Template: Story<StepperStepComponent> = (args: StepperStepComponent) => ({
  component: StepperStepComponent,
  props: {
    ...args,
    stepClick: actionsData.stepClick,
  },
});

export const StepDefaultSelfDefaultActive = Template.bind({});
StepDefaultSelfDefaultActive.args = {
  step: {
    id: 'step1',
    title: 'Step Default Self Default Active',
    desc: 'Displays left aligned and unfilled circle step with primary colour without any number or icon and is not clickable',
    state: StepperStepState.Default,
    isValid: true,
    active: true
  }
};

export const StepDefaultSelfDefaultInactive = Template.bind({});
StepDefaultSelfDefaultInactive.args = {
  step: {
    id: 'step2',
    title: 'Step Default Self Default Inactive',
    desc: 'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Default,
    isValid: true,
    active: false
  }
}

export const StepDefaultSelfNextStepActive = Template.bind({});
StepDefaultSelfNextStepActive.args = {
  step: {
    id: 'step3',
    title: 'Step Default Self NextStep Active',
    desc: 'Displays left aligned and unfilled circle step with primary colour without any number or icon and is clickable',
    state: StepperStepState.NextStep,
    isValid: true,
    active: true
  }
}

export const StepDefaultSelfNextStepInactive = Template.bind({});
StepDefaultSelfNextStepInactive.args = {
  step: {
    id: 'step4',
    title: 'Step Default Self NextStep Inactive',
    desc: 'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.NextStep,
    isValid: true,
    active: false
  }
}

export const StepDefaultSelfCompleteActive = Template.bind({});
StepDefaultSelfCompleteActive.args = {
  step: {
    id: 'step5',
    title: 'Step Default Self Complete Active',
    desc: 'Displays left aligned and filled circle step with primary colour without any number or icon and is clickable',
    state: StepperStepState.Complete,
    isValid: true,
    active: true
  }
}

export const StepDefaultSelfCompleteInactive = Template.bind({});
StepDefaultSelfCompleteInactive.args = {
  step: {
    id: 'step6',
    title: 'Step Default Self Complete Inactive',
    desc: 'Displays left aligned and filled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Complete,
    isValid: true,
    active: false
  }
}

export const StepDefaultSelfInvalidActive = Template.bind({});
StepDefaultSelfInvalidActive.args = {
  step: {
    id: 'step7',
    title: 'Step Default Self Invalid Active',
    desc: 'Displays left aligned and unfilled circle step with danger colour without any number or icon and is clickable',
    state: StepperStepState.NextStep,
    isValid: false,
    active: true
  }
}

export const StepDefaultSelfInvalidInactive = Template.bind({});
StepDefaultSelfInvalidInactive.args = {
  step: {
    id: 'step8',
    title: 'Step Default Self Invalid Inactive',
    desc: 'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.NextStep,
    isValid: false,
    active: false
  }
}

export const StepDefaultSelfCompleteInvalidActive = Template.bind({});
StepDefaultSelfCompleteInvalidActive.args = {
  step: {
    id: 'step9',
    title: 'Step Default Self Complete Invalid Active',
    desc: 'Displays left aligned and unfilled circle step with danger colour without any number or icon and is clickable',
    state: StepperStepState.Complete,
    isValid: false,
    active: true
  }
}

export const StepDefaultSelfCompleteInvalidInactive = Template.bind({});
StepDefaultSelfCompleteInvalidInactive.args = {
  step: {
    id: 'step10',
    title: 'Step Default Self Complete Invalid Inactive',
    desc: 'Displays left aligned and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.NextStep,
    isValid: false,
    active: false
  }
}

export const StepHorizontalSelfDefaultActive = Template.bind({});
StepHorizontalSelfDefaultActive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step11',
    title: 'Step Horizontal Self Default Active',
    desc: 'Displays centered and unfilled circle step with primary colour without any number or icon and is not clickable',
    state: StepperStepState.Default,
    isValid: true,
    active: true
  }
}

export const StepHorizontalSelfDefaultInactive = Template.bind({});
StepHorizontalSelfDefaultInactive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step12',
    title: 'Step Horizontal Self Default Inactive',
    desc: 'Displays centered and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Default,
    isValid: true,
    active: false
  }
}

export const StepHorizontalSelfNextStepActive = Template.bind({});
StepHorizontalSelfNextStepActive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step13',
    title: 'Step Horizontal Self NextStep Active',
    desc: 'Displays centered and unfilled circle step with primary colour without any number or icon and is clickable',
    state: StepperStepState.NextStep,
    isValid: true,
    active: true
  }
}

export const StepHorizontalSelfNextStepInactive = Template.bind({});
StepHorizontalSelfNextStepInactive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step14',
    title: 'Step Horizontal Self NextStep Inactive',
    desc: 'Displays centered and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.NextStep,
    isValid: true,
    active: false
  }
}

export const StepHorizontalSelfCompleteActive = Template.bind({});
StepHorizontalSelfCompleteActive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step15',
    title: 'Step Horizontal Self Complete Active',
    desc: 'Displays centered and filled circle step with primary colour without any number or icon and is clickable',
    state: StepperStepState.Complete,
    isValid: true,
    active: true
  }
}

export const StepHorizontalSelfCompleteInactive = Template.bind({});
StepHorizontalSelfCompleteInactive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step16',
    title: 'Step Horizontal Self Complete Inactive',
    desc: 'Displays centered and filled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Complete,
    isValid: true,
    active: false
  }
}

export const StepHorizontalSelfInvalidActive = Template.bind({});
StepHorizontalSelfInvalidActive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step17',
    title: 'Step Horizontal Self Invalid Active',
    desc: 'Displays centered and unfilled circle step with danger colour without any number or icon and is clickable',
    state: StepperStepState.NextStep,
    isValid: false,
    active: true
  }
}

export const StepHorizontalSelfInvalidInactive = Template.bind({});
StepHorizontalSelfInvalidInactive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step18',
    title: 'Step Horizontal Self Invalid Inactive',
    desc: 'Displays centered and unfilled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.NextStep,
    isValid: false,
    active: false
  }
}

export const StepHorizontalSelfCompleteInvalidActive = Template.bind({});
StepHorizontalSelfCompleteInvalidActive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step19',
    title: 'Step Horizontal Self Complete Invalid Active',
    desc: 'Displays centered and filled circle step with danger colour without any number or icon and is clickable',
    state: StepperStepState.Complete,
    isValid: false,
    active: true
  }
}

export const StepHorizontalSelfCompleteInvalidInactive = Template.bind({});
StepHorizontalSelfCompleteInvalidInactive.args = {
  type: StepperType.Horizontal,
  step: {
    id: 'step20',
    title: 'Step Horizontal Self Complete Invalid Inactive',
    desc: 'Displays centered and filled circle step with gray colour without any number or icon and is not clickable',
    state: StepperStepState.Complete,
    isValid: false,
    active: false
  }
}
