import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularDivsComponent } from './circular-divs.component';

describe('CircularDivsComponent', () => {
  let component: CircularDivsComponent;
  let fixture: ComponentFixture<CircularDivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularDivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
