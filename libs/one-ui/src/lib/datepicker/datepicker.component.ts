import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rex-lib-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements OnInit {
  @Input() minDate: Date | undefined;
  @Input() maxDate: Date | undefined;
  @Input() disabledDays: number[] | undefined;
  @Input() isDisabled: boolean = false;
  @Input() formGroup: FormGroup | undefined;
  @Input() formControlName: string = '';
  @Input() id: string = this.formControlName;

  ngOnInit() {
  }

  public showError(): boolean {
    // @ts-ignore
    return this.formGroup.get(this.formControlName).status !== "VALID" && this.formGroup.get(this.formControlName).touched;
  }
}
