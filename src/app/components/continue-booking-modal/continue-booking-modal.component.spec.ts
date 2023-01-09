import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueBookingModalComponent } from './continue-booking-modal.component';

describe('ContinueBookingModalComponent', () => {
  let component: ContinueBookingModalComponent;
  let fixture: ComponentFixture<ContinueBookingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueBookingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinueBookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
