import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseWaitComponent } from './please-wait.component';

describe('PleaseWaitComponent', () => {
  let component: PleaseWaitComponent;
  let fixture: ComponentFixture<PleaseWaitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PleaseWaitComponent]
    });
    fixture = TestBed.createComponent(PleaseWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
