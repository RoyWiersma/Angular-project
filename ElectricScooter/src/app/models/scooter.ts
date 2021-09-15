import {ScooterStatus} from "./scooter-status";

export class Scooter {
  id: number;
  tag: string;
  status: ScooterStatus;
  gpsLocation: string;
  mileage: number;
  batteryCharge: number;


  constructor(id: number, tag: string, status: ScooterStatus, gpsLocation: string, mileage: number, batteryCharge: number) {
    this.id = id;
    this.tag = tag;
    this.status = status;
    this.gpsLocation = gpsLocation;
    this.mileage = mileage;
    this.batteryCharge = batteryCharge;
  }
}
