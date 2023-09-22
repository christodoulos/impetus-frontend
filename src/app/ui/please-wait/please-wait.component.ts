import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'please-wait',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './please-wait.component.html',
  styleUrls: ['./please-wait.component.scss'],
})
export class PleaseWaitComponent {
  @Input() waiting$: Observable<boolean> = new Observable<boolean>();
  @Input() message = 'Please wait...';
}
