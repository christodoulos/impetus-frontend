import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from 'src/app/ui/tree/tree.component';
import { EurostatService } from '../eurostat.service';
import { Store } from '@ngrx/store';
import { AppState, Metadata } from 'src/app/state';

declare var $: any;

@Component({
  selector: 'eurostat-tree',
  standalone: true,
  imports: [CommonModule, TreeComponent],
  templateUrl: './eurostat-tree.component.html',
  styleUrls: ['./eurostat-tree.component.scss'],
})
export class EurostatTreeComponent {
  title = 'EUROSTAT Dataset Explorer';
  @ViewChild('treeContainer') treeContainer!: ElementRef;
  @Output() info = new EventEmitter<any>();
  @Output() loading = new EventEmitter<boolean>();
  treeDiv: HTMLDivElement | undefined;

  constructor(
    private service: EurostatService,
    private store: Store<AppState>
  ) {}

  async onSelection(selection: string) {
    this.collapseCard();
    this.loading.emit(true);
    const info: Metadata = await this.service.getDataset(selection);
    this.store.dispatch({
      type: '[Eurostat Dataset] Add Dataset',
      dataset: info,
    });
    this.info.emit(info);
    this.loading.emit(false);
  }

  collapseCard() {
    $('#treeContainer').collapse('hide');
  }
}
