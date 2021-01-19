// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'Material/Button',
  component: ButtonComponent,
  argTypes: {
      color: {
          control: 'string'
      }
  }
} as Meta;

const Template: Story<ButtonComponent> = (args:ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  moduleMetadata: {
      imports: [ MatButtonModule ]
  }
});

export const Basic = Template.bind({});
Basic.args = {
    label: 'Button',
    color: ''
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    color: 'primary'
};

export const Accent = Template.bind({});
Accent.args = {
    label: 'Button',
    color: 'accent'
}

export const Warn = Template.bind({});
Warn.args = {
    label: 'Button',
    color: 'warn'
}

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Button',
    color: 'primary',
    disabled: true
}