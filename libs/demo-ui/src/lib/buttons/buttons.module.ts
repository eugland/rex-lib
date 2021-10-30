import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';

@NgModule({
  imports: [CommonModule, ButtonsRoutingModule, FormsModule],
  declarations: [ButtonsComponent],
})
export class ButtonsModule {}
