import {Component, OnInit} from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ActivatedRoute, Params} from "@angular/router";
import {ScootersService} from "../../../services/scooters.service";

@Component({
  selector: 'app-detail34',
  templateUrl: './detail34.component.html',
  styleUrls: ['./detail34.component.css']
})
export class Detail34Component implements OnInit {

   scooter!: Scooter;
   id!: number

  constructor(private scooterSevice: ScootersService,
              private route : ActivatedRoute) {
  }

  ngOnInit(): void {
     this.route.params
       .subscribe(
         (params: Params) => {
           this.id = +params['id'];
           this.scooter = this.scooterSevice.getScooter(this.id)
         }
       );
  }

}
