import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { GridsComponent } from './grids.component';

export default {
  title: 'GridsComponent',
  component: GridsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<GridsComponent>;

const Template: Story<GridsComponent> = (args: GridsComponent) => ({
  component: GridsComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}