import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DialogsComponent } from './dialogs.component';

export default {
  title: 'ColoursComponent',
  component: DialogsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DialogsComponent>;

const Template: Story<DialogsComponent> = (args: DialogsComponent) => ({
  component: DialogsComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
