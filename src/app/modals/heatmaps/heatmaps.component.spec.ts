import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapsComponent } from './heatmaps.component';

describe('HeatmapsComponent', () => {
  let component: HeatmapsComponent;
  let fixture: ComponentFixture<HeatmapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeatmapsComponent]
    });
    fixture = TestBed.createComponent(HeatmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
