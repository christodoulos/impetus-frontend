import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalWelcomeComponent } from 'src/app/modals/welcome/welcome.component';
import { MapService } from 'src/app/map/map.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private modalService: NgbModal, private mapService: MapService) {}

  ngOnInit(): void {
    this.modalService.open(ModalWelcomeComponent, {
      size: 'lg',
      centered: true,
    });
    this.mapService.fitToAttica();
  }
}
