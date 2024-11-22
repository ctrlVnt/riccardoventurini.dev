import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Publication {
  cover: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {

  @Output() visibilityChange = new EventEmitter<boolean>();
  isVisible = false;

  toggleVisibility() {
    this.visibilityChange.emit(this.isVisible);
  }
  
  @Input() detail: Publication | undefined ;
}
