import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurostatToolComponent } from './eurostat-tool.component';

describe('EurostatToolComponent', () => {
  let component: EurostatToolComponent;
  let fixture: ComponentFixture<EurostatToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EurostatToolComponent]
    });
    fixture = TestBed.createComponent(EurostatToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
