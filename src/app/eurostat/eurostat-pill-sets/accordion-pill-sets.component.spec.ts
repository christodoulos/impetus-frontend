import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurostatPillSetsComponent } from './eurostat-pill-sets.component';

describe('EurostatPillSetsComponent', () => {
  let component: EurostatPillSetsComponent;
  let fixture: ComponentFixture<EurostatPillSetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EurostatPillSetsComponent],
    });
    fixture = TestBed.createComponent(EurostatPillSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
