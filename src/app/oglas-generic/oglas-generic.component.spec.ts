import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OglasGenericComponent } from './oglas-generic.component';

describe('OglasGenericComponent', () => {
  let component: OglasGenericComponent;
  let fixture: ComponentFixture<OglasGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OglasGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OglasGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
