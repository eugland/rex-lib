import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InputTextComponent } from './input-text.component';

export default {
  title: 'LinksComponent',
  component: InputTextComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<InputTextComponent>;

const Template: Story<InputTextComponent> = (args: InputTextComponent) => ({
  component: InputTextComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
