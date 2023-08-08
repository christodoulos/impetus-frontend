import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurostatTreeComponent } from './eurostat-tree.component';

describe('EurostatTreeComponent', () => {
  let component: EurostatTreeComponent;
  let fixture: ComponentFixture<EurostatTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EurostatTreeComponent],
    });
    fixture = TestBed.createComponent(EurostatTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
