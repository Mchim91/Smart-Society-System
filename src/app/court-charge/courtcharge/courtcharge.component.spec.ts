import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtchargeComponent } from './courtcharge.component';

describe('CourtchargeComponent', () => {
  let component: CourtchargeComponent;
  let fixture: ComponentFixture<CourtchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtchargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
