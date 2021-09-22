import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScooterStatus} from "../../../models/scooter-status";

@Component({
  selector: 'app-detail32',
  templateUrl: './detail32.component.html',
  styleUrls: ['./detail32.component.css']
})
export class Detail32Component implements OnInit {

  @Input()
  scooter: Scooter;

  @Output()
  scooterDelete= new EventEmitter<Scooter>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteAlert() {
    this.scooterDelete.emit(this.scooter);
  }

}
