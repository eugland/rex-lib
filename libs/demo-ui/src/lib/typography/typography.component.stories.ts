import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TypographyComponent } from './typography.component';

export default {
  title: 'TypographyComponent',
  component: TypographyComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TypographyComponent>;

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  component: TypographyComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}