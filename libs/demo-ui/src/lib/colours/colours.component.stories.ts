import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ColoursComponent } from './colours.component';

export default {
  title: 'ColoursComponent',
  component: ColoursComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ColoursComponent>;

const Template: Story<ColoursComponent> = (args: ColoursComponent) => ({
  component: ColoursComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}