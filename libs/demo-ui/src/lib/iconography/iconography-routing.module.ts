import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconographyComponent } from './iconography.component';

const routes: Routes = [{ path: '', component: IconographyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class IconographyRoutingModule {}