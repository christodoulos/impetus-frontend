import { TestBed } from '@angular/core/testing';

import { HeatmapsService } from './heatmaps.service';

describe('HeatmapsService', () => {
  let service: HeatmapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeatmapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
