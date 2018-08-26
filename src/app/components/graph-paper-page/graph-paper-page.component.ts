import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-graph-paper-page',
  templateUrl: './graph-paper-page.component.html',
  styleUrls: ['./graph-paper-page.component.less']
})
export class GraphPaperPageComponent implements OnInit, OnChanges {

  @Input() pageHeight: number = 0;

  public binderRingHeights : Object[];

  constructor() { }

  ngOnInit() {
      this.binderRingHeights = [{top: "70px"}, {top: "140px"}, {top: "210px"}];


  }


  assignBinderRingHeights = () => {
    this.binderRingHeights = [];
    let initialOffset = 15;
    let incOffsetAmount = 70;

    let heightTracker = initialOffset - incOffsetAmount;
    while(heightTracker < this.pageHeight - 275){
      heightTracker = heightTracker + incOffsetAmount;
      this.binderRingHeights.push({top: heightTracker + "px"})
    }

  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes");
    console.log(changes);
    if(Object.keys(changes).includes("pageHeight")){
      this.assignBinderRingHeights();
    }
  }
}
