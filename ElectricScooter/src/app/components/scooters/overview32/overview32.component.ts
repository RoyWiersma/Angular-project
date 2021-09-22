import {Component, Input, OnInit} from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {Overview31Component} from "../overview31/overview31.component";

@Component({
  selector: 'app-overview32',
  templateUrl: './overview32.component.html',
  styleUrls: ['./overview32.component.css']
})
export class Overview32Component implements OnInit {

  public scooterList: Scooter[];

  selectedScooter: Scooter;
  selectedScooterId: number;

  public scooter: Scooter;
  // public scooterList!: Scooter[];
  // public selectedScooter;
  // public scooter!: Scooter;

  // @Input() overview: Overview31Component;

  constructor() { }

  public addRandomScooter(): void {

    this.scooterList.push(Scooter.createSampleScooter());
    this.selectScooter(this.scooter, this.scooterList.length);

    this.selectedScooterId = this.scooterList.length -1;
  }

  ngOnInit(): void {
    //
    this.scooterList = [];
    for (let i = 0; i < 8; i++) {
      this.scooterList[i] = Scooter.createSampleScooter(Overview31Component.startCount += 3);
    }
  }


  onUpdatedEvent(scooter: Scooter) {
     // this.offers[this.position] = offer;
  }

  selectScooter(selectedScooter: Scooter, position: number) {
    this.selectedScooter = selectedScooter;
    this.selectedScooterId = position;
    console.log(this.selectedScooter);
  }

}
