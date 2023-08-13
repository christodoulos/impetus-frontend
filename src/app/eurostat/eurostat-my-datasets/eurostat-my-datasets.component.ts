import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AppState,
  selectCurrentMetadataId,
  selectAllMetadataIdAndLabel,
} from 'src/app/state';
import { Store } from '@ngrx/store';
import { Subscription, map } from 'rxjs';
import { PillSetComponent } from 'src/app/ui/pill-set/pill-set.component';

@Component({
  selector: 'eurostat-my-datasets',
  standalone: true,
  imports: [CommonModule, PillSetComponent],
  templateUrl: './eurostat-my-datasets.component.html',
  styleUrls: ['./eurostat-my-datasets.component.scss'],
})
export class EurostatMyDatasetsComponent implements OnDestroy {
  selectedIdSubscription: Subscription;
  selectedId: string | null = null;
  myDatasets$ = this.store
    .select(selectAllMetadataIdAndLabel)
    .pipe(
      map((data) =>
        data.map((d) => ({ id: d.id ?? '', tooltip: d.label ?? '' }))
      )
    );

  constructor(private store: Store<AppState>) {
    this.selectedIdSubscription = this.store
      .select(selectCurrentMetadataId)
      .subscribe((id) => {
        this.selectedId = id;
      });
  }

  ngOnDestroy(): void {
    this.selectedIdSubscription.unsubscribe();
  }

  onPillSelection(selected: string[]) {
    this.store.dispatch({
      type: '[Eurostat Dataset] Select Dataset',
      id: selected[0],
    });
  }
}
