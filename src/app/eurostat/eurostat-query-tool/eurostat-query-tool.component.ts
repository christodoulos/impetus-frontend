import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentMetadata } from 'src/app/state';
import { Subscription } from 'rxjs';
import JSONstat from 'jsonstat-toolkit';
import { PillSetComponent } from 'src/app/ui/pill-set/pill-set.component';

@Component({
  selector: 'eurostat-query-tool',
  standalone: true,
  imports: [CommonModule, PillSetComponent],
  templateUrl: './eurostat-query-tool.component.html',
  styleUrls: ['./eurostat-query-tool.component.scss'],
})
export class EurostatQueryToolComponent implements OnInit, OnDestroy {
  // @Output() eurostatQuery = new EventEmitter<string>();
  @Output() eurostatQuery = new EventEmitter<{ [key: string]: string[] }>();
  subscription: Subscription | undefined;
  currentMetadata$ = this.store.select(selectCurrentMetadata);
  ds: any;
  label: string | undefined;
  source: string | undefined;
  n: number | undefined;
  updated: string | undefined;
  dimensions: string[] | undefined;
  dimensionInfos: {
    label: string;
    pills: { id: string; tooltip: string }[];
  }[] = [];
  multipleSelection = false;
  querySelections: { [key: string]: string[] } = {};

  query: { dimension: string; selections: string[] }[] = [];
  labelToId: { [key: string]: string } = {};
  pillIdToTooltip: { [key: string]: string } = {};

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this.currentMetadata$.subscribe((metadata) => {
      if (metadata) {
        // nothing selected from my datasets
        this.ds = JSONstat(metadata);
        // console.log(this.ds);
        const dimensions = this.ds.id ?? [];
        this.dimensions = dimensions;

        // keep a reverse lookup from label to id
        this.labelToId = dimensions.reduce(
          (acc: any, dim: any) => ({
            ...acc,
            [this.ds.Dimension(dim).label]: dim,
          }),
          {}
        );
        // console.log(this.labelToId);

        this.label = this.ds.label;
        this.source = this.ds.source;
        this.n = this.ds.n;
        this.updated = this.ds.updated;

        this.dimensionInfos = dimensions.map((dim: string) =>
          this.dimensionInfo(dim)
        );

        // keep a reverse lookup from pill id to tooltip
        this.pillIdToTooltip = this.dimensionInfos.reduce(
          (acc: any, dimInfo: any) => ({
            ...acc,
            ...dimInfo.pills.reduce(
              (acc2: any, pill: any) => ({
                ...acc2,
                [pill.id]: pill.tooltip,
              }),
              {}
            ),
          }),
          {}
        );
        // console.log(this.pillIdToTooltip);
      }
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
    const pills: { id: string; tooltip: string }[] = [];
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const pill = {
        id: category,
        tooltip: dimId[i],
      };
      pills.push(pill);
    }
    // console.log('dimensionInfo', { label, pills });
    return { label, pills };
  }

  onPillSelection(dimensionId: string, selected: string[]) {
    const revDimId = this.labelToId[dimensionId];
    const revSelected = selected.map((s) => this.pillIdToTooltip[s]);
    this.querySelections[revDimId] = revSelected;

    // Delete values of length 0
    Object.keys(this.querySelections).forEach(
      (key) =>
        this.querySelections[key].length < 1 && delete this.querySelections[key]
    );
    // console.log('onPillSelection', this.querySelections);
  }

  onCheckboxChange(event: Event) {
    this.multipleSelection = (event.target as HTMLInputElement).checked;
  }

  onClick() {
    // Form a query string from the query selections
    //   const queryString = Object.entries(this.querySelections)
    //     .map(([key, values]) =>
    //       values.map((value) => `${key}=${encodeURIComponent(value)}`).join('&')
    //     )
    //     .join('&');
    //   this.eurostatQuery.emit(queryString);
    this.eurostatQuery.emit(this.querySelections);
  }
}
