import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SteppersComponent } from './steppers.component';

const routes: Routes = [{ path: '', component: SteppersComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SteppersRoutingModule {}
