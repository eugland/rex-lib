import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColoursRoutingModule } from './colours-routing.module';
import { ColoursComponent } from './colours.component';

@NgModule({
  imports: [CommonModule, ColoursRoutingModule],
  declarations: [ColoursComponent],
})
export class ColoursModule {}
