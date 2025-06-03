import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-services',
    imports: [MatIconModule, MatButtonModule],
    templateUrl: './services.component.html',
    styleUrl: './services.component.css'
})
export class ServicesComponent {

  openSection(sectionId: string){
    const elem = document.getElementById(sectionId);
    if(elem){
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }
}
