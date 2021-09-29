import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScooterStatus} from "../../../models/scooter-status";
import {ScootersService} from "../../../services/scooters.service";

@Component({
  selector: 'app-detail33',
  templateUrl: './detail33.component.html',
  styleUrls: ['./detail33.component.css']
})
export class Detail33Component implements OnInit {

  originalScooter: Scooter | undefined;
  editedScooter: Scooter | undefined;
  @Input() editedScooterId: number;

  constructor(public scootersService: ScootersService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getScooterById();
  }

  ngOnInit(): void {
  }

  getScooterById(): Scooter {
    this.originalScooter = this.scootersService.FindById(this.editedScooterId);
    this.editedScooter = Scooter.trueCopy(this.originalScooter);
    return this.editedScooter;
  }

  // onClickButtonRemove(): any {
  //   if (window.confirm('Are you sure you want to delete this scooter?'))
  //     if (this.isChanged()) {
  //       {
  //         this.scootersService.deleteById(this.editedScooterId);
  //         this.editedScooter = null;
  //         this.editedScooterId = undefined;
  //       }
  //     } else {
  //       this.scootersService.deleteById(this.editedScooterId);
  //       // @ts-ignore
  //       this.editedScooter = null;
  //       this.editedScooterId = undefined;
  //     }
  // }


}
