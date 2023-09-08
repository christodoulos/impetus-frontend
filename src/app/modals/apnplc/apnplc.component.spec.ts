import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApnplcComponent } from './apnplc.component';

describe('ApnplcComponent', () => {
  let component: ApnplcComponent;
  let fixture: ComponentFixture<ApnplcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApnplcComponent]
    });
    fixture = TestBed.createComponent(ApnplcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
