import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoluisComponent } from './contactoluis.component';

describe('ContactoluisComponent', () => {
  let component: ContactoluisComponent;
  let fixture: ComponentFixture<ContactoluisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoluisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoluisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
