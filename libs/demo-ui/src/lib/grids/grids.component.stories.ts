import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { GridsComponent } from './grids.component';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'GridsComponent',
  component: GridsComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule]
    })
  ]
} as Meta<GridsComponent>;

const Template: Story<GridsComponent> = (args: GridsComponent) => ({
  component: GridsComponent,
  props: args
});


export const Primary = Template.bind({});
Primary.args = {};
