import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasonplaceholderComponent } from './jasonplaceholder.component';

describe('JasonplaceholderComponent', () => {
  let component: JasonplaceholderComponent;
  let fixture: ComponentFixture<JasonplaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasonplaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasonplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
