import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsExplorerComponent } from './nuts-explorer.component';

describe('NutsExplorerComponent', () => {
  let component: NutsExplorerComponent;
  let fixture: ComponentFixture<NutsExplorerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NutsExplorerComponent]
    });
    fixture = TestBed.createComponent(NutsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
