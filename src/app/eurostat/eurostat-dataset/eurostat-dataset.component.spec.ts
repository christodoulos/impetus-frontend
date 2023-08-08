import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurostatDatasetComponent } from './eurostat-dataset.component';

describe('EurostatDatasetComponent', () => {
  let component: EurostatDatasetComponent;
  let fixture: ComponentFixture<EurostatDatasetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EurostatDatasetComponent]
    });
    fixture = TestBed.createComponent(EurostatDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
