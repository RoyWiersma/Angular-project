import { Component, OnInit } from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScooterStatus} from "../../../models/scooter-status";

@Component({
  selector: 'app-overview31',
  templateUrl: './overview31.component.html',
  styleUrls: ['./overview31.component.css']
})
export class Overview31Component implements OnInit {


  scooters: Scooter[] = [];
  constructor() { }

  ngOnInit(): void {
    this.scooters=[];
    for (let i=0; i< 8; i++){
      this.scooters.push(Scooter.createSampleScooter()
      )
    }
  }
  public onNewScooter(): void{
    this.scooters[this.scooters.length] = Scooter.createSampleScooter();
  }
}
