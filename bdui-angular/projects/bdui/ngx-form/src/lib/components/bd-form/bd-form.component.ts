import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BdFormElement } from '../../interfaces/form-element';

@Component({
  selector: 'bd-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './bd-form.component.css',
  templateUrl: './bd-form.component.html',
})
export class BdFormComponent implements OnInit {
  @Input() set elements(val: BdFormElement[]) {
    this._elements = val;
    this.tableData = this.buildTableData(val);
  }
  @Input() columnCount = 12;
  @Input() formGroup!: FormGroup;
  @Input() formTitle = 'Form Title';
  @Input() rowHeight = 60;

  tableData: BdFormElement[][] = [];
  private _elements: BdFormElement[] = [];

  ngOnInit(): void {
    if (!this.formGroup) {
      this.formGroup = this.buildFormGroup(this._elements);
    }
  }

  private buildFormGroup(elements: BdFormElement[]): FormGroup {
    const formGroup = new FormGroup({});
    elements
      .filter(({ key }) => key)
      .forEach(({ disabled, key, value }) => {
        const control = new FormControl({ disabled, value });
        formGroup.addControl(key!, control);
      });
    return formGroup;
  }

  private buildTableData(elements: BdFormElement[]): BdFormElement[][] {
    let tableData: any[][] = [];
    let index = 0;
    let stack: { rowspan: number; colspan: number }[] = [];

    while (index < elements.length) {
      let rowData: BdFormElement[] = [];
      const skipLength =
        stack.reduce((sum, item) => sum + item.colspan, 0) || 0;

      let remainingColumns = this.columnCount - skipLength;

      stack.forEach((item) => {
        item.rowspan--;
      });
      stack = stack.filter((item) => item.rowspan > 1);

      while (remainingColumns > 0 && index < elements.length) {
        const element = elements[index];
        const colspan = element.colspan || 1;
        const rowspan = element.rowspan || 1;
        if (!element.width) {
          element.width = (colspan / this.columnCount) * 100;
        }
        //
        if (rowspan > 1) {
          stack.push({ rowspan, colspan });
        }

        rowData.push(element);
        remainingColumns -= colspan;
        index++;
      }

      tableData.push(rowData);
    }

    return tableData;
  }
}
