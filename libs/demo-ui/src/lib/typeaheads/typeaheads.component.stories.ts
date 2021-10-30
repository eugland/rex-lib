import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TypeaheadsComponent } from './typeaheads.component';

export default {
  title: 'TypeaheadsComponent',
  component: TypeaheadsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TypeaheadsComponent>;

const Template: Story<TypeaheadsComponent> = (args: TypeaheadsComponent) => ({
  component: TypeaheadsComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}