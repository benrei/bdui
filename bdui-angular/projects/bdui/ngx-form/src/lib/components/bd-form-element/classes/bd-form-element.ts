import { BdFormElementParams } from '../bd-form-element.component';
import { BdFormElementType } from '../form-element-type';

export class BdFormElement {
  colspan: number;
  hintLeft: string;
  hintRight: string;
  id: string;
  key: string;
  label: string;
  rowspan: number;
  type: BdFormElementType;
  constructor(public params: BdFormElementParams) {
    this.colspan = params.colspan || 3;
    this.hintLeft = params.hintLeft || '';
    this.hintRight = params.hintRight || '';
    this.id = params.id || '';
    this.key = params.key || '';
    this.label = params.label || '';
    this.rowspan = params.rowspan || 1;
    this.type = params.type || BdFormElementType.Unknown;
  }
}
