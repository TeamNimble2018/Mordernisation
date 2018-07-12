import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-modals',
  templateUrl: './popup-modals.component.html',
  styleUrls: ['./popup-modals.component.css']
})
export class PopupModalsComponent implements OnInit {
  closeResult: string;
  ngOnInit() {
  }
  constructor(private modalService: NgbModal) {}
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
