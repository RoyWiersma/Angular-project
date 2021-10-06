import { Component, OnInit } from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScootersService} from "../../../services/scooters.service";

@Component({
  selector: 'app-overview34',
  templateUrl: './overview34.component.html',
  styleUrls: ['./overview34.component.css']
})
export class Overview34Component implements OnInit {


  selectedScooter: Scooter | undefined;

  constructor(public scootersService: ScootersService) {
    this.scooters;
  }

  get scooters(): Scooter[]{
    return this.scootersService.FindAll();
  }

  ngOnInit(): void {
  }


}
