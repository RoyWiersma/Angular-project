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

  constructor(id: number, tag: string, status: ScooterStatus, gpsLocation: string, mileage: number, batteryCharge: number) {
    this.id = id;
    this.tag = tag;
    this.status = status;
    this.gpsLocation = gpsLocation;
    this.mileage = mileage;
    this.batteryCharge = batteryCharge;
  }

  public static createSampleScooter(pId = 0): Scooter {
    return new Scooter(
      this.getRandomInt(30001000, 30001999, 0),
      this.getRandomString(8),
      this.getRandomStatus(),
      this.getRandomAmsterdamGps(),
      this.getRandomInt(0, 10000, 0),
      this.getRandomInt(5, 100, 0)
    );

  }

  private static getRandomString(length: number): string {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  // @ts-ignore
  private static getRandomInt(from, to, fixed): number {
    return (Math.random() * (to - from) + from).toFixed(fixed);
  }
  // private static getRandomAmsterdamGps(): string{
  //   if (this.getRandomStatus() != ScooterStatus.IN_USE){
  //     console.log(this.getRandomInt(52, 52.999999, 6) + ', ' + this.getRandomInt(4, 4.999999, 6))
  //     return this.getRandomInt(52, 52.999999, 6) + ', ' + this.getRandomInt(4, 4.999999, 6);
  //   }
  //   else {
  //     return "";
  //   }
  // }


  // @ts-ignore
  public static getRandomStatus(): ScooterStatus {
    const status = Math.floor(Math.random() * 3);
    // const values = Object.keys(ScooterStatus);
    // const enumKey = values[Math.floor(Math.random() * values.length)]
    // console.log(status);
    //
    // return enumKey
    switch (status) {
      case 0: {
        console.log('in use');
        return ScooterStatus.IN_USE;
        break;
      }
      case 1: {
        console.log('idle');
        return ScooterStatus.IDLE;
        break;
      }
      case 2: {
        console.log('maintenance');
        return ScooterStatus.MAINTENANCE;
        break;
      }
      default: {
        console.log('default');
      }
    }
  }

  private static getRandomAmsterdamGps(): string {
    console.log("getRandomAmsterdamGps" + this.getRandomStatus())
    if (this.getRandomStatus()) {
      return this.getRandomInt(52, 52.999999, 6) + ', ' + this.getRandomInt(4, 4.999999, 6);
    } else {
      return "";
    }
  }
}
