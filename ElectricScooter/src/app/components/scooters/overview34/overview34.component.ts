import {Component, Input, OnInit} from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScootersService} from "../../../services/scooters.service";
import {AppRoutingModule} from "../../../app-routing.module";
import {ActivatedRoute, NavigationExtras, Params} from "@angular/router";

@Component({
  selector: 'app-overview34',
  templateUrl: './overview34.component.html',
  styleUrls: ['./overview34.component.css']
})
export class Overview34Component implements OnInit {

  selectedScooterId: number | undefined;
  selectedScooter: Scooter | undefined;

  constructor(public scootersService: ScootersService,

              ) {
    this.scooters;
  }

  get scooters(): Scooter[] {
    return this.scootersService.FindAll();
  }

  ngOnInit(): void {
  }
  addRandomScooter(): void {
    this.scootersService.save(Scooter.createSampleScooter())
    for (let i = 0; i < this.scooters.length; i++) {
      this.selectedScooterId = this.scooters[i].id;
    }
  }


}
