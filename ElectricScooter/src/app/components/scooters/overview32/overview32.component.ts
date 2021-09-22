import {Component, Input, OnInit} from '@angular/core';
import {Scooter} from "../../../models/scooter";


@Component({
  selector: 'app-overview32',
  templateUrl: './overview32.component.html',
  styleUrls: ['./overview32.component.css']
})
export class Overview32Component implements OnInit {

  constructor() { }
  selectedScooter: Scooter;
  scooters: Scooter[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      this.scooters[i] = Scooter.createSampleScooter();
    }
  }
    addRandomScooter(){
      this.scooters[this.scooters.length] = Scooter.createSampleScooter();
    }

  selectScooter(selectedScooter) {
    console.log(selectedScooter);
    this.selectedScooter = selectedScooter;

  }
  ondeleteScooter(item: Scooter) {
    this.scooters.splice(this.scooters.indexOf(item), 1)
  }
}
