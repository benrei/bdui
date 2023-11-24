import { Pipe, type PipeTransform } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Pipe({
  name: 'control',
  standalone: true,
})
export class BdFormElementPipe implements PipeTransform {
  transform(formGroup: UntypedFormGroup, key: string): UntypedFormControl {
    const formControl = formGroup.get(key)
      ? formGroup.get(key)
      : formGroup.controls[key];
    if (!formControl) {
      if (key !== undefined) {
        console.warn(`FormControl key <${key}> was not found in formGroup!`);
      }
      return new UntypedFormControl();
    }
    return formControl as UntypedFormControl;
  }
}
