import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItniComponent } from './itni.component';

describe('ItniComponent', () => {
  let component: ItniComponent;
  let fixture: ComponentFixture<ItniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
