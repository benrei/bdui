import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BdFormElementType } from './form-element-type';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'bd-form-element',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './bd-form-element.component.css',
  templateUrl: './bd-form-element.component.html',
})
export class BdFormElementComponent {
  @Input() control = new FormControl();
  @Input() formGroup?: FormGroup;

  @Input() hintLeft = '';
  @Input() hintRight = '';
  @Input() id = '';
  @Input() key = '';
  @Input() label = '';
  @Input() params: object = {};
  @Input() type = BdFormElementType.Unknown;
}

export interface BdFormElementParams {
  colspan?: number;
  hintLeft?: string;
  hintRight?: string;
  id?: string;
  initialValue?: any;
  key?: string;
  /** Label for form element */
  label?: string;
  onValueChanges?: (event: BdFormElementValueChangesEvent) => void;
  params?: any;
  rowspan?: number;
  /** Add logic for sibling changes */
  siblingChanges?: {
    /** Add debounce time to function calls  */
    debounceMs?: number;
    /** FormGroup key for sibling*/
    key: string;
    /** Function to call on sibling value changes */
    onSiblingValueChanges?: (
      event: BdFormElementSiblingValueChangesEvent
    ) => void;
  }[];
  type?: BdFormElementType;
}

export interface BdFormElementValueChangesEvent {
  params: BdFormElementParams;
  formGroup?: FormGroup;
  value: any;
}
export interface BdFormElementSiblingValueChangesEvent
  extends BdFormElementValueChangesEvent {
  key: string;
}
