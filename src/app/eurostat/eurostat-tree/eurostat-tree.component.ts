import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from 'src/app/ui/tree/tree.component';
import { EurostatService } from '../eurostat.service';
import { EurostatDataset } from '../eurostat-interfaces';

@Component({
  selector: 'eurostat-tree',
  standalone: true,
  imports: [CommonModule, TreeComponent],
  templateUrl: './eurostat-tree.component.html',
  styleUrls: ['./eurostat-tree.component.scss'],
})
export class EurostatTreeComponent {
  title = 'EUROSTAT Dataset Explorer';
  @Output() info = new EventEmitter<EurostatDataset[]>();

  constructor(private service: EurostatService) {}

  async onSelection(selection: string) {
    const info = await this.service.getDataset(selection);
    this.info.emit(info);
  }
}
