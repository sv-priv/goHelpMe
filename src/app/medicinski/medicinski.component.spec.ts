import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinskiComponent } from './medicinski.component';

describe('MedicinskiComponent', () => {
  let component: MedicinskiComponent;
  let fixture: ComponentFixture<MedicinskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
