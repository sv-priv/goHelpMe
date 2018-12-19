import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OglasFormaComponent } from './oglas-forma.component';

describe('OglasFormaComponent', () => {
  let component: OglasFormaComponent;
  let fixture: ComponentFixture<OglasFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OglasFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OglasFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
