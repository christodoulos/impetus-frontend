import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurostatExplorerComponent } from './eurostat-explorer.component';

describe('EurostatExplorerComponent', () => {
  let component: EurostatExplorerComponent;
  let fixture: ComponentFixture<EurostatExplorerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EurostatExplorerComponent]
    });
    fixture = TestBed.createComponent(EurostatExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
