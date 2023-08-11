import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurostatMyDatasetsComponent } from './eurostat-my-datasets.component';

describe('EurostatMyDatasetsComponent', () => {
  let component: EurostatMyDatasetsComponent;
  let fixture: ComponentFixture<EurostatMyDatasetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EurostatMyDatasetsComponent]
    });
    fixture = TestBed.createComponent(EurostatMyDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
