import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'paper-modal',
  templateUrl: './paper-modal.component.html',
  styleUrls: ['./paper-modal.component.less']
})
export class PaperModalComponent {
  closeResult: string;
  imgVisible: boolean;

  constructor(private modalService: NgbModal) {}

  public onImgVisible(){
    console.log("on");
    this.imgVisible = true;
    console.log(this.imgVisible);
  }

  public offImgVisible(){
    console.log('off');
    this.imgVisible = false;
    console.log(this.imgVisible);
  }

  open(content) {
    this.imgVisible = true;




    this.modalService.open(content, {windowClass: 'redify'}).result.then((result) => {
      this.closeResult = `aaaaaaaaaaaClosed with: ${result}`;
      this.imgVisible = false;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.imgVisible = false;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
