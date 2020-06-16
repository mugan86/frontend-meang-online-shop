import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: []
})
export class ModalVideoComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

}
