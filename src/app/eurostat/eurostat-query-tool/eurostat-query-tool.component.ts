import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentMetadata } from 'src/app/state';
import { Subscription } from 'rxjs';
import JSONstat from 'jsonstat-toolkit';
import { Pill } from 'src/app/ui/pill/pill.component';
import { PillSetComponent } from 'src/app/ui/pill-set/pill-set.component';

@Component({
  selector: 'eurostat-query-tool',
  standalone: true,
  imports: [CommonModule, PillSetComponent],
  templateUrl: './eurostat-query-tool.component.html',
  styleUrls: ['./eurostat-query-tool.component.scss'],
})
export class EurostatQueryToolComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  currentMetadata$ = this.store.select(selectCurrentMetadata);
  ds: any;
  label: string | undefined;
  source: string | undefined;
  n: number | undefined;
  updated: string | undefined;
  dimensions: string[] | undefined;

  query: { dimension: string; selections: string[] }[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this.currentMetadata$.subscribe((metadata) => {
      this.ds = JSONstat(metadata);
      const dimensions = this.ds.id ?? [];
      this.dimensions = dimensions;

      this.label = this.ds.label;
      this.source = this.ds.source;
      this.n = this.ds.n;
      this.updated = this.ds.updated;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  dimensionInfo(id: string) {
    const dim = this.ds.Dimension(id);
    const label = dim.label;
    const dimId = dim.id;
    const categories = dim.Category().map((category: any) => category.label);
    const pills: Pill[] = [];
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const pill: Pill = {
        id: category,
        tooltip: dimId[i],
      };
      pills.push(pill);
    }
    return { label, pills };
  }

  onDimensionSelections($event: Pill[]) {
    const dimension = $event[0].tooltip ?? '';
    const selections = $event.map((pill) => pill.id ?? '');
    this.query.push({ dimension, selections });
    console.log('onDimensionSelection', this.query);
  }
}
