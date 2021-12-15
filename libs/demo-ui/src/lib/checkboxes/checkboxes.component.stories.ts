import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CheckboxesComponent } from './checkboxes.component';

export default {
  title: 'CheckboxesComponent',
  component: CheckboxesComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CheckboxesComponent>;

const Template: Story<CheckboxesComponent> = (args: CheckboxesComponent) => ({
  component: CheckboxesComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}