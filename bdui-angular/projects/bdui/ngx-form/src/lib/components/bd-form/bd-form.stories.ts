import type { Meta, StoryObj } from '@storybook/angular';
import { BdFormComponent } from './bd-form.component';
import { BdFormElementParams } from '../bd-form-element/bd-form-element.component';
import { BdFormElement } from '../bd-form-element/classes/bd-form-element';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<BdFormComponent> = {
  title: 'Components/Form',
  component: BdFormComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BdFormComponent>;

const defaults = {
  columnGap: 8,
  rowGap: 8,
};

const elements: BdFormElementParams[] = [
  new BdFormElement({
    label: 'Label 1',
    hintLeft: 'Hint left',
    hintRight: 'Hint right',
    id: 'TestId',
    key: 'key1',
  }),
  new BdFormElement({ label: 'Label 2', key: 'key2' }),
  new BdFormElement({ label: 'Label 3', key: 'key3' }),
  new BdFormElement({ label: 'Label 4', key: 'key4' }),
  new BdFormElement({ label: 'Label 5', key: 'key5' }),
];

export const Primary: Story = {
  args: {
    ...defaults,
    elements,
  },
};
