import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillSetComponent } from './pill-set.component';

describe('PillSetComponent', () => {
  let component: PillSetComponent;
  let fixture: ComponentFixture<PillSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PillSetComponent]
    });
    fixture = TestBed.createComponent(PillSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
