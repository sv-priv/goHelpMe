import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriskiComponent } from './memoriski.component';

describe('MemoriskiComponent', () => {
  let component: MemoriskiComponent;
  let fixture: ComponentFixture<MemoriskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
