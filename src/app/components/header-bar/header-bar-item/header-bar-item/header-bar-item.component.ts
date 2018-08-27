import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-bar-item',
  templateUrl: './header-bar-item.component.html',
  styleUrls: ['./header-bar-item.component.less']
})
export class HeaderBarItemComponent implements OnInit {

  @Input() itemName: string;


  constructor() { }

  ngOnInit() {
  }

}
