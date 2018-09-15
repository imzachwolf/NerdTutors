import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {PaperModalComponent} from "../../modal-components/paper-modal/paper-modal.component";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {

  closeResult: string;


  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  open() {

    var backdropStyling =' {     position: relative;      top: -30px;      height: 0px;    }';

    var content = PaperModalComponent;
    content.prototype.onImgVisible();
    this.modalService.open(content).result.then((result) => {
      console.log('1asdlkfja;skljdf;klasjdfklj');
      content.prototype.offImgVisible();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log('ffffffffffffffffffffff');
      content.prototype.offImgVisible();
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(2);

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
