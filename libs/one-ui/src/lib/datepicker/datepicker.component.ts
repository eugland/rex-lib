import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rex-lib-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent {
  @Input() minDate: Date | undefined;
  @Input() maxDate: Date | undefined;
  @Input() disabledDays: number[] | undefined;
  @Input() isDisabled = false;
  @Input() formGroup: FormGroup | undefined;
  @Input() formControlName = '';
  @Input() id: string = this.formControlName;

  public showError(): boolean {
    const ctrl = this.formGroup?.get(this.formControlName);
    if (ctrl) {
      return ctrl.status !== "VALID" && ctrl.touched;
    }
    return false;
  }
}
