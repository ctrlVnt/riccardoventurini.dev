import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface Project {
  cover: string;
  title: string;
  description: string;
  link: string;
  source: string;
}

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {

  @Output() visibilityChange = new EventEmitter<boolean>();
  isVisible = false;

  @Input() detail: Project | undefined ;

  toggleVisibility() {
    this.visibilityChange.emit(this.isVisible);
  }

  openItem() {
    window.open(this.detail?.link, '_blank');
  }
}
