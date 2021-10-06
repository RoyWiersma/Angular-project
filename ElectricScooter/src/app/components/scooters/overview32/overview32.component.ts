import {Component, OnInit} from '@angular/core';
import {Scooter} from "../../../models/scooter";


@Component({
  selector: 'app-overview32',
  templateUrl: './overview32.component.html',
  styleUrls: ['./overview32.component.css']
})
export class Overview32Component implements OnInit {

  constructor() { }

  selectedScooter: Scooter | undefined;
  scooters: Scooter[] = [];


  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      this.scooters[i] = Scooter.createSampleScooter();
    }
  }
    addRandomScooter() {
      let createScooter = Scooter.createSampleScooter();
      this.scooters[this.scooters.length] = createScooter;
      this.selectScooter(createScooter);
    }

  selectScooter(selectedScooter: Scooter) {
    console.log(selectedScooter);
    this.selectedScooter = selectedScooter;
  }


  onDeletedScooter(item: Scooter) {
    this.scooters.splice(this.scooters.indexOf(item), 1)
    this.selectedScooter = undefined;
  }
}
