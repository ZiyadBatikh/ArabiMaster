import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMethodologyComponent } from './our-methodology.component';

describe('OurMethodologyComponent', () => {
  let component: OurMethodologyComponent;
  let fixture: ComponentFixture<OurMethodologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurMethodologyComponent]
    });
    fixture = TestBed.createComponent(OurMethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
