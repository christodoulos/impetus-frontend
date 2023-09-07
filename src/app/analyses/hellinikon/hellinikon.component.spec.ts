import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellinikonComponent } from './hellinikon.component';

describe('HellinikonComponent', () => {
  let component: HellinikonComponent;
  let fixture: ComponentFixture<HellinikonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HellinikonComponent]
    });
    fixture = TestBed.createComponent(HellinikonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
