import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogsRoutingModule } from './dialogs-routing.module';
import { DialogsComponent } from './dialogs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, DialogsRoutingModule, RouterModule],
  declarations: [DialogsComponent],
})
export class DialogsModule {}
