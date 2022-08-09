import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonwardComponent } from './prisonward.component';

describe('PrisonwardComponent', () => {
  let component: PrisonwardComponent;
  let fixture: ComponentFixture<PrisonwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrisonwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrisonwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
