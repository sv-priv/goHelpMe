import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallOglasComponent } from './small-oglas.component';

describe('SmallOglasComponent', () => {
  let component: SmallOglasComponent;
  let fixture: ComponentFixture<SmallOglasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallOglasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallOglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
