import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWelcomeComponent } from '../modals/welcome/welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    this.modalService.open(ModalWelcomeComponent, {
      size: 'lg',
      centered: true,
      backdrop: 'static',
    });
  }
}
