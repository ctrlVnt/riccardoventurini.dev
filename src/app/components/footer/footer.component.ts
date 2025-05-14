import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [MatButtonModule, MatDividerModule, MatIconModule]
})
export class FooterComponent {

  openLink(url: string) {
    window.open(url, "_blank");
  }

}
