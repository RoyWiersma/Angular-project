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

  // ngOnInit(): void {
  // }

  /**
   * This methode checks for changes.
   */
  isChanged(): boolean {
    return !Scooter.compareScooter(this.originalScooter, this.editedScooter);
  }

}
