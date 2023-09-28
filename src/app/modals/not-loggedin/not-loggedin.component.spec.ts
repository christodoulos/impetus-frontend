import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedinComponent } from './not-loggedin.component';

describe('NotLoggedinComponent', () => {
  let component: NotLoggedinComponent;
  let fixture: ComponentFixture<NotLoggedinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotLoggedinComponent]
    });
    fixture = TestBed.createComponent(NotLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
