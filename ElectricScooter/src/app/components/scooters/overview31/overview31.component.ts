import {Component, OnInit} from '@angular/core';
import {Scooter} from "../../../models/scooter";


@Component({
  selector: 'app-overview31',
  templateUrl: './overview31.component.html',
  styleUrls: ['./overview31.component.css']
})
export class Overview31Component implements OnInit {


  scooters: Scooter[] = [];

  constructor() {}

  ngOnInit(): void {
    this.scooters = [];
    for (let i = 0; i < 8; i++) {
      this.scooters[i] = Scooter.createSampleScooter(Overview31Component.startCount += 3);
    }
  }

  public onNewScooter(): void {
    this.scooters[this.scooters.length] = Scooter.createSampleScooter(Overview31Component.startCount += 3);
  }
  public static startCount: number = 30000;
}
