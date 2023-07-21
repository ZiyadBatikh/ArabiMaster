import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorEditProfileComponent } from './tutor-edit-profile.component';

describe('TutorEditProfileComponent', () => {
  let component: TutorEditProfileComponent;
  let fixture: ComponentFixture<TutorEditProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorEditProfileComponent]
    });
    fixture = TestBed.createComponent(TutorEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
