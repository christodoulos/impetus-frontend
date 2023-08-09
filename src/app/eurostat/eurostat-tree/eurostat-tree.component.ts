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

  constructor(private service: EurostatService) {}

  async onSelection(selection: string) {
    this.loading.emit(true);
    const info = await this.service.getDataset(selection);
    this.info.emit(info);
    this.loading.emit(false);
    this.collapseCard();
  }

  collapseCard() {
    $('#treeContainer').collapse('hide');
  }
}
