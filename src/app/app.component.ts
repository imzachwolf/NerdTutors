import {Component, ElementRef, OnInit} from '@angular/core';



import {PageHeightTrackerService} from "./services/page-height-tracker.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' , './app.component.less']
})
export class AppComponent implements OnInit{
  constructor(private el:ElementRef){

  };
  title = 'NerdTutors';
  pageHeight = 0;
  counter = 1;

  ngOnInit(){
    window.setInterval(this.getPageHeight, 500);
  }



  getPageHeight = () => {
    let curHeight = document.getElementById("main-app").offsetHeight;
    if (curHeight != this.pageHeight) {
      this.pageHeight = curHeight;
    }
  }

}
