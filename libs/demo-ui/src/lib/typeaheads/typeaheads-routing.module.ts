import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeaheadsComponent } from './typeaheads.component';

const routes: Routes = [{ path: '', component: TypeaheadsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class TypeaheadsRoutingModule {}
