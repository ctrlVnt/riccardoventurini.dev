import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-404',
    imports: [],
    templateUrl: './404.component.html',
    styleUrl: './404.component.css'
})
export class NotFoundComponent {
  constructor(private router: Router) {}
  
  goHome() {
    this.router.navigate(['/']);
  }
}
