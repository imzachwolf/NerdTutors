import { Component, OnInit } from '@angular/core';
import {IntakeForm} from "../../../shared/models/intake-form.model";


@Component({
  selector: 'intake-form',
  templateUrl: './intake-form.component.html',
  styleUrls: ['./intake-form.component.less']
})
export class IntakeFormComponent implements OnInit {

  constructor() { }

  model = new IntakeForm();
  submitted = false;

  ngOnInit() {
  }

  onSubmit() {this.submitted = true}

  // TODO: Remove this when we're done
  get diagnostic() {  return JSON.stringify(this.model); }

}
