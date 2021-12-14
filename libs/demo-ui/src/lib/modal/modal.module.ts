import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModalRoutingModule } from "./modal-routing.module";
import { ModalComponent } from "./modal.component";
import { ModalModule as m } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    m.forRoot(),
    CommonModule,
    ModalRoutingModule,
    ReactiveFormsModule
  ],
	declarations: [
		ModalComponent
	]
})
export class ModalModule {}
