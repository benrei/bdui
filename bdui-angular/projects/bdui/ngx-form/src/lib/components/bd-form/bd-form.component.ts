import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  BdFormElementParams,
  BdFormElementComponent,
} from '../bd-form-element/bd-form-element.component';
import { FormGroup, FormControl } from '@angular/forms';
import { BdFormElementPipe } from './pipes/bd-form-element.pipe';

@Component({
  selector: 'app-bd-form',
  standalone: true,
  imports: [CommonModule, BdFormElementComponent, BdFormElementPipe],
  styleUrl: './bd-form.component.css',
  templateUrl: './bd-form.component.html',
})
export class BdFormComponent implements OnInit {
  @Input() columns = 12;
  @Input() columnGap = 8;
  /** Form elements */
  @Input() elements: BdFormElementParams[] = [];
  @Input() formGroup?: FormGroup;
  @Input() padding = 8;
  @Input() rowGap = 8;
  /** Form title */
  @Input() title = '';

  constructor() {}
  ngOnInit(): void {
    if (!this.formGroup) {
      const formGroup = new FormGroup({});
      const elements = this.elements.filter(({ key }) => key);
      elements.forEach((element) => {
        const control = new FormControl(element.initialValue);
        formGroup.addControl(element.key!, control);
      });
      this.formGroup = formGroup;
    }
  }
}
