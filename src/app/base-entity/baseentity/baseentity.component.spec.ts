import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseentityComponent } from './baseentity.component';

describe('BaseentityComponent', () => {
  let component: BaseentityComponent;
  let fixture: ComponentFixture<BaseentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseentityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
