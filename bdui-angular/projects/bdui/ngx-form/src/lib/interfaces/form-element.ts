export interface BdFormElement {
  colspan?: number;
  component?: any;
  disabled?: boolean;
  hintLeft?: string;
  hintRight?: string;
  id?: string; // Unique identifier for the form control
  key?: string; // Optional key for the form control
  label?: string;
  params?: any;
  rowspan?: number;
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'datalist'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'search'
    | 'select'
    | 'tel'
    | 'text'
    | 'textarea'
    | 'time'
    | 'url';
  value?: any;
  width?: number;
}
