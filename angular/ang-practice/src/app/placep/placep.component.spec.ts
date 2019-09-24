import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacepComponent } from './placep.component';

describe('PlacepComponent', () => {
  let component: PlacepComponent;
  let fixture: ComponentFixture<PlacepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
