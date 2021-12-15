import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonsComponent } from './buttons.component';

export default {
  title: 'ButtonsComponent',
  component: ButtonsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ]
} as Meta<ButtonsComponent>;

const Template: Story<ButtonsComponent> = (args: ButtonsComponent) => ({
  component: ButtonsComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}