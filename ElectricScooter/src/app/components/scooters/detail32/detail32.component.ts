import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScooterStatus} from "../../../models/scooter-status";

@Component({
  selector: 'app-detail32',
  templateUrl: './detail32.component.html',
  styleUrls: ['./detail32.component.css']
})
export class Detail32Component implements OnInit {


  @Input('selectedScooterDetail') selectedScooterDetail: Scooter;
  public Status = ScooterStatus;

  @Output()
  scooterUpdate= new EventEmitter<Scooter>();


  @Output()
  scooterDelete= new EventEmitter<Scooter>();

  public types = Object.values(ScooterStatus);


  constructor() { }

  ngOnInit(): void {
  }

  //
  // onUpdateScooter() {
  //   this.scooterUpdate.emit(this.detailScooter);
  // }

  removeScooter(): any {
    this.scooterDelete.emit(this.selectedScooterDetail);
  }

}
