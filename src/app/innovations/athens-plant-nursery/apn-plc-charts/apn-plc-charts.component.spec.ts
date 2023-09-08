import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApnPlcChartsComponent } from './apn-plc-charts.component';

describe('ApnPlcChartsComponent', () => {
  let component: ApnPlcChartsComponent;
  let fixture: ComponentFixture<ApnPlcChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApnPlcChartsComponent]
    });
    fixture = TestBed.createComponent(ApnPlcChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
