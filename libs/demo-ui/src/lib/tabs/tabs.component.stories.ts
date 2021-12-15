import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

export default {
  title: 'TabsComponent',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TabsComponent>;

const Template: Story<TabsComponent> = (args: TabsComponent) => ({
  component: TabsComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}