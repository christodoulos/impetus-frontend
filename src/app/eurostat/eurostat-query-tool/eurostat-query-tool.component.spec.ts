import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurostatQueryToolComponent } from './eurostat-query-tool.component';

describe('EurostatQueryToolComponent', () => {
  let component: EurostatQueryToolComponent;
  let fixture: ComponentFixture<EurostatQueryToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EurostatQueryToolComponent]
    });
    fixture = TestBed.createComponent(EurostatQueryToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
