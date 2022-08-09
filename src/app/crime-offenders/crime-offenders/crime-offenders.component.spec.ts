import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeOffendersComponent } from './crime-offenders.component';

describe('CrimeOffendersComponent', () => {
  let component: CrimeOffendersComponent;
  let fixture: ComponentFixture<CrimeOffendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimeOffendersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimeOffendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
