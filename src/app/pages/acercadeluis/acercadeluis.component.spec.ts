import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeluisComponent } from './acercadeluis.component';

describe('AcercadeluisComponent', () => {
  let component: AcercadeluisComponent;
  let fixture: ComponentFixture<AcercadeluisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeluisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercadeluisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
