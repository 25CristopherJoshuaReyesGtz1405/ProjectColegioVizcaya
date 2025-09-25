import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastActive],
  templateUrl: './toast-active.html',
  styleUrls: ['./toast-active.scss']
})
export class ToastActive {
  @Input() message: string | null = null;
  @Input() type: 'success' | 'error' = 'success';
}