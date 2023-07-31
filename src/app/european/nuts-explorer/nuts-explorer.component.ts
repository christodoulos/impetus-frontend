import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from 'src/app/map/map.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectComponent } from 'src/app/ui/select/select.component';
import { Store } from '@ngrx/store';
import { NutsState, update } from 'src/app/state';

@Component({
  selector: 'app-nuts-explorer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectComponent, MapComponent],
  templateUrl: './nuts-explorer.component.html',
  styleUrls: ['./nuts-explorer.component.scss'],
})
export class NutsExplorerComponent implements OnInit, AfterViewInit {
  @ViewChild('map') map!: MapComponent;
  nutsLevels = [
    { key: 'nuts0', value: 'National (NUTS 0)' },
    { key: 'nuts1', value: 'Large Region (NUTS 1)' },
    { key: 'nuts2', value: 'Small Region (NUTS 2)' },
    { key: 'nuts3', value: 'Local (NUTS 3)' },
  ];
  nutsForm = new FormGroup({
    nutsLevel: new FormControl('', Validators.required),
  });

  constructor(private store: Store<NutsState>) {}

  ngOnInit(): void {
    this.nutsForm.controls.nutsLevel.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.store.dispatch(update({ level: 'nuts0' }));
  }

  ngAfterViewInit(): void {
    // this.map.fitBounds([
    //   -26.39211076038066, 33.85666623943277, 46.06351684677202,
    //   71.45984928826147,
    // ]);
  }
}
