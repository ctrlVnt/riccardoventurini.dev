import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list'; 
import { MatMenuModule } from '@angular/material/menu';

import { FooterComponent } from '../../components/footer/footer.component';

import textfile from "../../../assets/text/strings.json"
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatListModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatDividerModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule, MatMenuModule, PortfolioComponent, ContactComponent, FooterComponent, HeaderComponent, MenuComponent, AboutComponent, ServicesComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('100ms ease-in-out')),
    ]),
  ],
})

export class AppComponent{
  
  scrol = 0;

  @HostListener('window:scroll', ['$event']) 
    doSomething() {
      this.scrol = window.scrollY;
      //console.debug("Scroll Event", window.scrollY );
    }
  
  openLink() {
      window.open(`https://github.com/ctrlVnt/riccardoventurini.dev`, '_blank');
  }

  aboutme:string = textfile.aboutme;

  isWindowGreaterThan600 = window.innerWidth > 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isWindowGreaterThan600 =  window.innerWidth > 768;
  }

  openSection(sectionId: string){
    const elem = document.getElementById(sectionId);
    if(elem){
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }

  formatAboutMe(aboutme: string): string {
    return aboutme.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }
}
