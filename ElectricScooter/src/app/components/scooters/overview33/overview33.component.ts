import { Component, OnInit } from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScootersService} from "../../../services/scooters.service";

@Component({
  selector: 'app-overview33',
  templateUrl: './overview33.component.html',
  styleUrls: ['./overview33.component.css']
})
export class Overview33Component implements OnInit {

  selectedScooterId: number | undefined;
  selectedScooter: Scooter | undefined;

  constructor(public scootersService: ScootersService) {
    this.scooters;
  }



  get scooters(): Scooter[]{
    return this.scootersService.FindAll();
  }

  ngOnInit(): void {
  }

  addRandomScooter(): void {
    this.scootersService.save(Scooter.createSampleScooter())
    for (let i = 0; i < this.scooters.length; i++) {
      this.selectedScooterId = this.scooters[i].id;
    }
    // console.log(this.selectedScooterId);
  }

  // selectScooter(event: any, scooter: Scooter) {
  //   this.selectedScooterId = scooter.id;
  //   console.log(scooter);
  // }

  selectScooter(event: any, selectedScooter: Scooter) {
    this.selectedScooter = selectedScooter;
    console.log( this.selectedScooter);
  }


}
