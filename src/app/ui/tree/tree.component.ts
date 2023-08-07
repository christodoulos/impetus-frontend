import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../icon-button/icon-button.component';

declare var $: any;

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() title = 'Tree Explorer';
  @Output() selection = new EventEmitter<string>();
  hideTree = false;

  ngOnInit(): void {
    $(() => {
      $.getJSON('/assets/eurostat.json', function (data: any) {
        $('#jstree').jstree({
          core: {
            data,
            themes: {
              responsive: false,
            },
          },
          types: {
            default: {
              icon: 'ri-folder-3-line',
            },
            leaf: {
              icon: 'ri-article-line',
            },
          },
          plugins: ['types'],
        });
      });

      $('#jstree').on('select_node.jstree', (e: any, data: any) => {
        if (data.instance.is_leaf(data.node)) {
          this.collapse();
          this.selection.emit(data.node.text);
        }
      });
    });
  }

  collapse() {
    $('#jstree').jstree('close_all');
  }
}
