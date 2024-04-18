import type { Meta, StoryObj } from '@storybook/angular';
import { BdFormComponent } from './bd-form.component';
import { BdFormElement } from '../../interfaces/form-element';

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

// const columnCount = 12;
// const elements = [
//   {colspan: 3, rowspan: 1, value: '1'},
//   {colspan: 3, rowspan: 1, value: '2'},
//   {colspan: 3, rowspan: 1, value: '3'},
//   {colspan: 3, rowspan: 2, value: '4'},
//   {colspan: 3, rowspan: 1, value: '5'},
//   {colspan: 3, rowspan: undefined, value: '6'},
//   {colspan: undefined, rowspan: 1, value: '7'},
//   {colspan: undefined, rowspan: undefined, value: '8'},
// ]

// <table>
//   <tbody>
//     <tr>
//       <td colspan="3" rowspan="1">1</td>
//       <td colspan="3" rowspan="1">2</td>
//       <td colspan="3" rowspan="1">3</td>
//       <td colspan="3" rowspan="2">4</td>
//     </tr>
//     <tr>
//       <td colspan="3" rowspan="1">5</td>
//       <td colspan="3" rowspan="1">6</td>
//       <td colspan="3" rowspan="1">7</td>
//       <!-- We have 3 less columns on this row since previous row had colspan 3 and rowspan 2. -->
//     </tr>
//     <tr>
//       <td colspan="3" rowspan="1">8</td>
//   </tbody>
// </table>

const elements: BdFormElement[] = [
  {
    colspan: 3,
    rowspan: 1,
    key: 'key1',
    label: 'Checkbox',
    type: 'checkbox',
    value: true,
    hintLeft: 'Hint left',
    hintRight: 'Hint right',
  },
  { colspan: 3, key: 'key2', label: 'Color', type: 'color', value: '#ff0000' },
  { colspan: 3, key: 'key3', label: 'Date', type: 'date' },
  {
    colspan: 3,
    rowspan: 1,
    key: 'key4',
    label: 'Date Time Local',
    type: 'datetime-local',
    value: 'test',
  },
  {
    colspan: 3,
    key: 'key5',
    label: 'Email',
    type: 'email',
    params: { placeholder: 'your@email.com' },
  },
  { colspan: 3, key: 'key6', label: 'File', type: 'file' },
  { colspan: 3, key: 'key7', label: 'Hidden', type: 'hidden' },
  { colspan: 3, key: 'key8', label: 'Month', type: 'month' },
  { colspan: 3, key: 'key9', label: 'Number', type: 'number' },
  {
    colspan: 3,
    key: 'key10',
    label: 'Password',
    type: 'password',
    params: { placeholder: 'Type a password' },
  },
  { colspan: 3, key: 'key11', label: 'Radio', type: 'radio' },
  { colspan: 3, key: 'key12', label: 'Range', type: 'range' },
  { colspan: 3, key: 'key13', label: 'Search', type: 'search' },
  { colspan: 3, key: 'key14', label: 'Tel', type: 'tel' },
  { colspan: 3, key: 'key15', label: 'Text', type: 'text' },
  { colspan: 3, key: 'key16', label: 'Textarea', rowspan: 2, type: 'textarea' },
  { colspan: 3, key: 'key17', label: 'Time', type: 'time' },
  { colspan: 3, key: 'key18', label: 'Url', type: 'url' },
];

export const Primary: Story = {
  args: {
    ...defaults,
    elements: elements as any,
  },
};
