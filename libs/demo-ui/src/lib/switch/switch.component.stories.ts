import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SwitchComponent } from './switch.component';

export default {
  title: 'SwitchComponent',
  component: SwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SwitchComponent>;

const Template: Story<SwitchComponent> = (args: SwitchComponent) => ({
  component: SwitchComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}