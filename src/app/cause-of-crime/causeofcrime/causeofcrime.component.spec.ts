import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseofcrimeComponent } from './causeofcrime.component';

describe('CauseofcrimeComponent', () => {
  let component: CauseofcrimeComponent;
  let fixture: ComponentFixture<CauseofcrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauseofcrimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CauseofcrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
