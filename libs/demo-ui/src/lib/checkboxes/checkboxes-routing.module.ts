import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxesComponent } from './checkboxes.component';

const routes: Routes = [{ path: '', component: CheckboxesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class CheckboxesRoutingModule {}

