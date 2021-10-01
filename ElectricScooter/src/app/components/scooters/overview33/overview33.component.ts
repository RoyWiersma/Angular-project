import { Component, OnInit } from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScootersService} from "../../../services/scooters.service";

@Component({
  selector: 'app-overview33',
  templateUrl: './overview33.component.html',
  styleUrls: ['./overview33.component.css']
})
export class Overview33Component implements OnInit {


  // selectedScooter: Scooter;
  selectedScooter: Scooter | undefined;

  constructor(public scootersService: ScootersService) {
    // this.scooters = scootersService.FindAll();
    this.scooters;
  }

  get scooters(): Scooter[]{
    return this.scootersService.FindAll();
  }

  ngOnInit(): void {
  }

  selectScooter(event: any, selectedScooter: Scooter) {
    this.selectedScooter = selectedScooter;
  }

}
