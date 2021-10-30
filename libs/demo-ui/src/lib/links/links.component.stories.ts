import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LinksComponent } from './links.component';

export default {
  title: 'LinksComponent',
  component: LinksComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LinksComponent>;

const Template: Story<LinksComponent> = (args: LinksComponent) => ({
  component: LinksComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}