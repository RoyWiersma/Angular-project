import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScootersService} from "../../../services/scooters.service";

@Component({
  selector: 'app-detail33',
  templateUrl: './detail33.component.html',
  styleUrls: ['./detail33.component.css']
})
export class Detail33Component implements  OnChanges {
  originalScooter!: Scooter;
  editedScooter!: Scooter;
  @Input() scooterId!: number;

  constructor(public scootersService: ScootersService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.assignScooter();
  }

  assignScooter(): void {
    this.originalScooter = this.scootersService.FindById(this.scooterId)!;
    this.editedScooter = Scooter.copyConstructer(this.originalScooter);
    console.log('Scooter: ' + this.editedScooter)
  }

  onClickButtonRemove(): any {
    if (window.confirm('Are you sure you want to delete this scooter?'))
      if (this.isChanged()) {
        {
          this.scootersService.deleteById(this.scooterId);
          // this.editedScooter = null;
          // this.editedScooterId = undefined;
        }
      } else {
        this.scootersService.deleteById(this.scooterId);
        // @ts-ignore
        this.editedScooter = null;
        // this.editedScooterId = undefined;
      }
  }

  onClickButtonSave(): any {
    this.scootersService.save(this.editedScooter);
    this.assignScooter();
  }

  onClickButtonClear(): any {
    if (window.confirm('Are you sure to discard unsaved changes ?'))
      if (this.isChanged()) {
        {
          this.editedScooter.tag = "";
          this.editedScooter.status;
          this.editedScooter.gpsLocation = "";
          this.editedScooter.mileage;
          this.editedScooter.batteryCharge;
        }
      } else {
        this.editedScooter.tag;
        this.editedScooter.status ;
        this.editedScooter.gpsLocation;
        this.editedScooter.mileage;
        this.editedScooter.batteryCharge;
      }
  }

  onClickButtonReset(): any {
    if (window.confirm('Are you sure to reset?')) {
      this.editedScooter = Scooter.copyConstructer(this.originalScooter);
    }
  }

  onClickButtonCancel(): any {
    if (window.confirm('Are you sure to cancel?'))
      if (this.isChanged()) {
        {
          this.onClickButtonClear();
          this.originalScooter ;
          this.scooterId = 0;
          this.editedScooter ;
        }
      } else {
        this.onClickButtonClear();
        this.originalScooter ;
        this.scooterId ;
        this.editedScooter ;
      }
  }

  // ngOnInit(): void {
  // }

  /**
   * This methode checks for changes.
   */
  isChanged(): boolean {
    return !Scooter.compareScooter(this.originalScooter, this.editedScooter);
  }

}
