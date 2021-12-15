import { OneUIModule, StepperStepState, StepperType } from '@rex-lib/one-ui';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SteppersComponent } from './steppers.component';

export default {
  title: 'SteppersComponent',
  component: SteppersComponent,
  decorators: [
    moduleMetadata({
      imports: [OneUIModule],
    }),
  ],
} as Meta<SteppersComponent>;

const Template: Story<SteppersComponent> = (args: SteppersComponent) => ({
  component: SteppersComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
