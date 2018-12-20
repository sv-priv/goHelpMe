import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdukativniComponent } from './edukativni.component';

describe('EdukativniComponent', () => {
  let component: EdukativniComponent;
  let fixture: ComponentFixture<EdukativniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdukativniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdukativniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
