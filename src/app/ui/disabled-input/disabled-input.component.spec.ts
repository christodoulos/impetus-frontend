import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledInputComponent } from './disabled-input.component';

describe('DisabledInputComponent', () => {
  let component: DisabledInputComponent;
  let fixture: ComponentFixture<DisabledInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DisabledInputComponent]
    });
    fixture = TestBed.createComponent(DisabledInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
