import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'rex-lib-links',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  modalRef?: BsModalRef
  modalWithForm = this.formBuilder.group({
    email: '',
    password: ''
  })
  constructor(private modalService: BsModalService, private formBuilder: FormBuilder) {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  show(text: string) {
    alert(text);
  }

  hideModal() {
    this.modalRef?.hide();
  }

  submit() {
    console.log(this.modalWithForm.get('email')?.value);
    this.show(`Email: ${this.modalWithForm.get('email')?.value} \nPassword: ${this.modalWithForm.get('password')?.value}`)
    this.modalWithForm.reset();
    this.hideModal();
  }

}
