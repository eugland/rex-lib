import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';

@NgModule({
  imports: [CommonModule, TypographyRoutingModule],
  declarations: [TypographyComponent],
})
export class TypographyModule {}
