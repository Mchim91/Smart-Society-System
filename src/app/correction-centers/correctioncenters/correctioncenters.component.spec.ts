import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectioncentersComponent } from './correctioncenters.component';

describe('CorrectioncentersComponent', () => {
  let component: CorrectioncentersComponent;
  let fixture: ComponentFixture<CorrectioncentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectioncentersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectioncentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
