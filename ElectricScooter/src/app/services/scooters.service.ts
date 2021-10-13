import {EventEmitter, Injectable} from '@angular/core';
import {Scooter} from "../models/scooter";
import {Overview33Component} from "../components/scooters/overview33/overview33.component";

@Injectable({
  providedIn: 'root'
})
export class ScootersService {

  scooters: Scooter[];
  selectedScooter: Scooter | undefined;
  onRemoveScooterEmitter = new EventEmitter<Scooter>();

  constructor() {
    this.scooters = [];
    for (let i = 0; i < 8; i++) {
      this.scooters[i] = Scooter.createSampleScooter();
    }
  }

  FindAll(): Scooter[]{
    // console.log("FindAll: " + this.scooters);
    return this.scooters;
  }

  FindById(id: number) : Scooter | null{
    console.log(id)
    for (const scooter of this.FindAll()){
      console.log(scooter);
      if (scooter.id === id){
        console.log("found the scooter")
        return scooter;
      }
    }
    return null;
  }

  // getScooter(index: number) {
  //   console.log(this.scooters[index]);
  //   return this.scooters[index];
  // }

  save(scooter: Scooter): Scooter {
    for (let i = 0; i < this.scooters.length; i++) {
      if (this.scooters[i].id === scooter.id) {
        const previousScooter = this.scooters[i];
        this.scooters[i] = scooter;
        return previousScooter;
      }

    }
    this.onRemoveScooterEmitter.emit(this.selectedScooter);
    this.scooters.push(scooter);
    return scooter;

  }



  // @ts-ignore
  deleteById(id : number): Scooter{
    for (let i = 0; i < this.scooters.length ; i++) {
      if (this.scooters[i].id === id){
        const previousScooter = this.scooters[i];
        this.scooters.splice(i, 1);

        return previousScooter;
      }
    }
  }

}
