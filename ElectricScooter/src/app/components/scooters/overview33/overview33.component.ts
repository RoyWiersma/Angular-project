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
  selectedScooterId: number | undefined;

  constructor(public scootersService: ScootersService) {
    // this.scooters = scootersService.FindAll();
    this.scooters;
  }

  get scooters(): Scooter[] | undefined{
    return this.scootersService.FindAll();
  }

  ngOnInit(): void {
  }

  selectScooter(event: any, scooter: Scooter) {
    this.selectedScooterId = scooter.id;
    // console.log(this.selectedScooterId);
  }

}
