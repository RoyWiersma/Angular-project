import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScooterStartComponent } from './scooter-start.component';

describe('ScooterStartComponent', () => {
  let component: ScooterStartComponent;
  let fixture: ComponentFixture<ScooterStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScooterStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScooterStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
