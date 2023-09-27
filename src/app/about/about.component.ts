import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsService } from '../services/modals.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private modalsService: ModalsService) {}
  ngOnInit(): void {
    console.log('AboutComponent ngOnInit');
    this.modalsService.showAbout();
  }
}
