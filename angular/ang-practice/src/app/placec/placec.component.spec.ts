import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacecComponent } from './placec.component';

describe('PlacecComponent', () => {
  let component: PlacecComponent;
  let fixture: ComponentFixture<PlacecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
