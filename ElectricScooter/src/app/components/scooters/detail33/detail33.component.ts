import {Component, Input, OnInit} from '@angular/core';
import {Scooter} from "../../../models/scooter";

@Component({
  selector: 'app-detail33',
  templateUrl: './detail33.component.html',
  styleUrls: ['./detail33.component.css']
})
export class Detail33Component implements OnInit {
  @Input() scooter!: Scooter;
  constructor() { }

  ngOnInit(): void {
  }

}
