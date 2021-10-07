import {Component, Input, OnInit} from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScootersService} from "../../../services/scooters.service";
import {AppRoutingModule} from "../../../app-routing.module";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-overview34',
  templateUrl: './overview34.component.html',
  styleUrls: ['./overview34.component.css']
})
export class Overview34Component implements OnInit {


  selectedScooter: Scooter | undefined;

  constructor(public scootersService: ScootersService,
              private route: ActivatedRoute) {
    this.scooters;
  }

  get scooters(): Scooter[] {
    return this.scootersService.FindAll();
  }

  ngOnInit(): void {
  }

  onSelect(scooter: Scooter) {
    // if (scooter != null && scooter.id != this.selectedScooter?.id){
    //   this.route.navigate([scooter.id], {relativeTo: this.ActivatedRoute});
    // } else {
    //
    // }
  }

}
