import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPillSetsComponent } from './accordion-pill-sets.component';

describe('AccordionPillSetsComponent', () => {
  let component: AccordionPillSetsComponent;
  let fixture: ComponentFixture<AccordionPillSetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccordionPillSetsComponent]
    });
    fixture = TestBed.createComponent(AccordionPillSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
