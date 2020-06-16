import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { ModalVideoComponent } from '../components/modal-video/modal-video.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal: NgbModal) { }

  show(name) {
    const modalRef = this.modal.open(ModalVideoComponent);
    modalRef.componentInstance.name = name;
  }
}
