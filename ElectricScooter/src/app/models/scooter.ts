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
    this.id = Scooter.num;
    this.tag = tag;
    this.status = status;
    this.gpsLocation = gpsLocation;
    this.mileage = mileage;
    this.batteryCharge = batteryCharge;
  }

  public static createSampleScooter(pId = 0): Scooter {
    pId = Scooter.num +=3
    return new Scooter(
      pId,
      this.getRandomString(8),
      status = this.getRandomStatus(),
      this.getRandomAmsterdamGps(),
      this.getRandomInt(0, 10000, 0),
      this.getRandomInt(5, 100, 0)
    );

  }

  static copyConstructer(scooter: Scooter): Scooter | null {
    if (scooter == null) return null;

    return Object.assign(new Scooter(
      this.num,
      this.getRandomString(8),
      status = this.getRandomStatus(),
      this.getRandomAmsterdamGps(),
      this.getRandomInt(0, 10000, 0),
      this.getRandomInt(5, 100, 0)
    )), scooter;
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

  private static getRandomAmsterdamGps(): string {
    if (status != ScooterStatus.IN_USE) {
      console.log(status);
      return this.getRandomInt(52, 52.999999, 6) + ', ' + this.getRandomInt(4, 4.999999, 6);
    } else {
      return "";
    }
  }


  // @ts-ignore
  public static getRandomStatus(): ScooterStatus {
    const status = Math.floor(Math.random() * 3);
    switch (status) {
      case 0: {
        console.log('in use');
        return ScooterStatus.IN_USE;
      }
      case 1: {
        console.log('idle');
        return ScooterStatus.IDLE;
      }
      case 2: {
        console.log('maintenance');
        return ScooterStatus.MAINTENANCE;
      }
      default: {
        console.log('default');
      }
    }
  }

  static compareScooter(scooter1: Scooter, scooter2: Scooter): boolean{

    return scooter1.id === scooter2.id && scooter1.mileage === scooter2.mileage
      && scooter1.tag === scooter2.tag && scooter1.status === scooter2.status
      && scooter1.gpsLocation === scooter2.gpsLocation && scooter1.batteryCharge === scooter2.batteryCharge;

  }
}
