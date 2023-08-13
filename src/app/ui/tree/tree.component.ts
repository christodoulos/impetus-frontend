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
  @Input() jsonFile: string | undefined;
  @Output() selection = new EventEmitter<string>();

  ngOnInit(): void {
    $(() => {
      // $.getJSON(this.jsonFile, function (data: any) {
      //   $('#jstree').jstree({
      //     core: {
      //       data,
      //       themes: {
      //         responsive: false,
      //         ellipsis: true,
      //       },
      //     },
      //     types: {
      //       default: {
      //         icon: 'ri-folder-3-line',
      //       },
      //       leaf: {
      //         icon: 'ri-article-line',
      //       },
      //     },
      //     plugins: ['types'],
      //   });
      // });

      $('#jstree').jstree({
        core: {
          data: {
            url: this.jsonFile,
            data: function (node: any) {
              return { id: node.id };
            },
            check_callback: true,
          },
          themes: {
            responsive: false,
            ellipsis: true,
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
        search: {
          case_insensitive: true,
          show_only_matches: true,
          show_only_matches_children: true,
        },
        plugins: ['types', 'search'],
      });

      $('#jstree').on('select_node.jstree', (e: any, data: any) => {
        if (data.instance.is_leaf(data.node)) {
          // this.collapse();
          this.selection.emit(data.node.text);
        }
      });
    });
  }

  collapse() {
    $('#jstree').jstree('close_all');
  }

  searchTree() {
    $('#jstree').jstree('search', $('#jstree-search').val());
  }
}
