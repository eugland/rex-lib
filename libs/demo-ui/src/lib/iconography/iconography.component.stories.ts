import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IconographyComponent } from './iconography.component';

export default {
  title: 'IconographyComponent',
  component: IconographyComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<IconographyComponent>;

const Template: Story<IconographyComponent> = (args: IconographyComponent) => ({
  component: IconographyComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}