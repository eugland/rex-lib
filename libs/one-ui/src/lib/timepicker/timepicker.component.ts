import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rex-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimepickerComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() subLabel: string | undefined;
  @Input() formGroup: FormGroup | undefined;
  @Input() formControlName: string = '';
  @Input() minDate: Date | undefined;
  @Input() maxDate: Date | undefined;
  @Input() disabledDays: number[] | undefined;
  @Input() isDisabled: boolean = false;
  @Input() id: string = this.formControlName;
  @Input() rangepicker: boolean = false;
  @Input() errorMessage: string = 'This field is required';
  @Input() hoursPlaceholder: string = '';
  @Input() minutesPlaceholder: string = '';
  @Input() allowArrowKeys = true;
  @Input() readonly: boolean = false;
  @Input() showMinutes: any = true;
  @Input() showSeconds: any = false;
  @Input() minTime: Date | undefined = undefined;
  @Input() maxTime: Date | undefined = undefined;
  @Input() showMeridian = false;
  @Output() valid = new EventEmitter<Event>();

  ngOnInit() {
  }

  public showError(): boolean {
    // @ts-ignore
    return this.formGroup?.get(this.formControlName)?.status !== 'VALID' && this.formGroup?.get(this.formControlName)?.touched;
  }

  public markformControlTouched(): void {
    this.formGroup?.get(this.formControlName)?.markAsTouched();
  }

  isValid($event: boolean) {
    this.valid.emit(event);
  }
}
