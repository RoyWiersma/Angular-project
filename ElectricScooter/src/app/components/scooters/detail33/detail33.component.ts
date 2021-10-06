import {Component, Input, OnInit,OnChanges , SimpleChanges} from '@angular/core';
import {Scooter} from "../../../models/scooter";
import {ScootersService} from "../../../services/scooters.service";

@Component({
  selector: 'app-detail33',
  templateUrl: './detail33.component.html',
  styleUrls: ['./detail33.component.css']
})
export class Detail33Component implements OnInit , OnChanges {
  originalScooter!: Scooter;
  editedScooter!: Scooter;

  @Input() editedScooterId!: number ;

  constructor(public scootersService: ScootersService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getScooterById();
  }

  getScooterById(): Scooter {
    this.originalScooter = this.scootersService.FindById(this.editedScooterId)!;
    // this.editedScooter = Scooter.trueCopy(this.originalScooter);
    return this.editedScooter;
  }

  onClickButtonRemove(): any {
    if (window.confirm('Are you sure you want to delete this scooter?'))
      if (this.isChanged()) {
        {
          this.scootersService.deleteById(this.editedScooterId);
          // this.editedScooter = null;
          // this.editedScooterId = undefined;
        }
      } else {
        this.scootersService.deleteById(this.editedScooterId);
        // @ts-ignore
        this.editedScooter = null;
        // this.editedScooterId = undefined;
      }
  }

  ngOnInit(): void {
  }

  /**
   * This methode checks for changes.
   */
  isChanged(): boolean {
    return !Scooter.compareScooter(this.originalScooter, this.editedScooter);
  }

}
