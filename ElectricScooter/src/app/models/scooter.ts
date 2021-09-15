// export enum ScooterState {
//   IDLE = 'IDLE',
//   INUSE = 'INUSE',
//   MAINTENANCE = 'MAINTENANCE'
// }
import {ScooterStatus} from "./scooter-status";

export class Scooter {

  public static num = 30000;

  id: number;
  tag: string;
  status: ScooterStatus;
  gpsLocation: string;
  mileage: number;
  batteryCharge: number;

  constructor(tag: string, status: ScooterStatus, gpsLocation: string, mileage: number, batteryCharge: number) {
    this.id = Scooter.num;
    this.tag = tag;
    this.status = status;
    this.gpsLocation = gpsLocation;
    this.mileage = mileage;
    this.batteryCharge = batteryCharge;
  }

  public static createSampleScooter(pId=0) : Scooter {


    // Random Tag ID
    const tag: string = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);


    // Random amount of mileage
    const mileage = Math.floor(Math.random() * (10000 - 2000) + 2000);


    // Random ScooterState
    const randomEnumValue = (ScooterStatus) => {
      const values = Object.keys(enumeration);
      const enumKey = values[Math.floor(Math.random() * values.length)];
    };
    //Random Status Value
    const scooter = randomEnumValue(ScooterStatus);

    // Random amount of battery charge
    const batteryCharge = Math.floor(Math.random() * (100 - 5) + 5);

    pId++;
    // Instantiate new random scooter
    // return new Scooter(tag, scooter, null, mileage, batteryCharge);
  }

}
