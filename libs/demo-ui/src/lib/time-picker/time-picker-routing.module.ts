import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimePickerComponent } from './date-picker.component';

const routes: Routes = [{ path: '', component: TimePickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class TimePickerRoutingModule {}

