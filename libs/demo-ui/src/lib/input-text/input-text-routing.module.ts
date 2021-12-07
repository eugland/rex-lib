import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTextComponent } from './input-text.component';

const routes: Routes = [{ path: '', component: InputTextComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class InputTextRoutingModule {}
