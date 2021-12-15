import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TimePickerComponent } from './time-picker.component';

export default {
  title: 'TimePickerComponent',
  component: TimePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TimePickerComponent>;

const Template: Story<TimePickerComponent> = (args: TimePickerComponent) => ({
  component: TimePickerComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}