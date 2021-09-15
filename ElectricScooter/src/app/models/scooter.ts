export enum ScooterState {
  IDLE = 'IDLE',
  INUSE = 'INUSE',
  MAINTENANCE = 'MAINTENANCE'
}
export class Scooter {

  public static num = 30000;

  id: number;
  tag: string;
  status: ScooterState;
  gpsLocation: string;
  mileage: number;
  batteryCharge: number;

  constructor(tag: string, status: ScooterState, gpsLocation: string, mileage: number, batteryCharge: number) {
    this.id = Scooter.num;
    this.tag = tag;
    this.status = status;
    this.gpsLocation = gpsLocation;
    this.mileage = mileage;
    this.batteryCharge = batteryCharge;
  }

  public static createSampleScooter(pId=0) : Scooter {

  }
}
