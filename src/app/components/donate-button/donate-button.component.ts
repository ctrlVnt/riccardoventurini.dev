import { Component } from '@angular/core';

@Component({
  selector: 'app-donate-button',
  standalone: true,
  imports: [],
  templateUrl: './donate-button.component.html',
  styleUrl: './donate-button.component.css'
})

export class DonateButtonComponent {
  go() {
    window.open(`https://buymeacoffee.com/cinemit`, '_blank');
  }
}
