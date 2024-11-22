import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { Clipboard } from '@angular/cdk/clipboard';

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
import { MatSnackBar } from '@angular/material/snack-bar';

import { NavbarComponent } from '../../components/navbar/navbar.component'; 
import { ContactformComponent } from '../../components/contactform/contactform.component';
import { FooterComponent } from '../../components/footer/footer.component';

import textfile from "../../../assets/text/testi.json"
import pubblicationsfile from "../../../assets/text/projects.json";
import { WindowComponent } from "../../components/window/window.component";
import { DonateButtonComponent } from "../../components/donate-button/donate-button.component";

interface Project {
  cover: string;
  title: string;
  description: string;
  link: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatListModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatDividerModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule, NavbarComponent, ContactformComponent, MatMenuModule, ClipboardModule, FooterComponent, WindowComponent, DonateButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class AppComponent{

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }
  
  projects: Project[] = pubblicationsfile.projects;

  mail = 'riccardoventurini220@gmail.com';

  selectedIndex = 0;
  detail: Project | undefined;
  isComponentVisible = false;

  nextItem() {
    this.selectedIndex = (this.selectedIndex + 1) % this.projects.length;
  }

  prevItem() {
    this.selectedIndex = (this.selectedIndex - 1 + this.projects.length) % this.projects.length;
  }  
  
  selectItem() {
    this.detail = this.projects[this.selectedIndex];
    this.isComponentVisible = true;
  }

  openItem() {
    window.open(`${this.projects[this.selectedIndex].link}`, '_blank');
  }

  onVisibilityChange(isVisible: boolean) {
    this.isComponentVisible = isVisible;
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

  copyToClipboard(email: string) {
    this.clipboard.copy(email);
  }

  writeMessage(email: string) {
    window.location.href = `mailto:` + email;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }
}
