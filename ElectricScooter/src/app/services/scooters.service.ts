import {EventEmitter, Injectable} from '@angular/core';
import {Scooter} from "../models/scooter";

@Injectable({
  providedIn: 'root'
})
export class ScootersService {

  scooters: Scooter[] | undefined;
  // selectedScooter: Scooter;
  onRemoveScooterEmitter = new EventEmitter<Scooter>();

  constructor() {
    this.scooters = [];
    for (let i = 0; i < 8; i++) {
      this.scooters[i] = Scooter.createSampleScooter();
    }
  }

  FindAll(): Scooter[] | undefined {
    console.log("FindAll" + this.scooters);
    return this.scooters;

  }


  // FindById(id: number): Scooter {
  //   console.log(id)
  //   for (const scooter of this.FindAll()){
  //     console.log(scooter);
  //     if (scooter.id === id){
  //       console.log("found the scooter")
  //       return scooter;
  //     }
  //   }
  //   return null;
  // }


  // save(scooter): Scooter {
  //   for (let i = 0; i < this.scooters.length; i++) {
  //     if (this.scooters[i].id === scooter.id) {
  //       const previousScooter = this.scooters[i];
  //       this.scooters[i] = scooter;
  //       return previousScooter;
  //     }
  //
  //   }
  //   this.onRemoveScooterEmitter.emit(this.selectedScooter);
  //   this.scooters.push(scooter);
  //   return scooter;
  //
  // }

  //
  // // @ts-ignore
  // deleteById(id: number): Scooter{
  //   for (let i = 0; i < this.scooters.length ; i++) {
  //     if (this.scooters[i].id === id){
  //       const previousScooter = this.scooters[i];
  //       this.scooters.splice(i, 1);
  //
  //       return previousScooter;
  //     }
  //   }
  // }

}
