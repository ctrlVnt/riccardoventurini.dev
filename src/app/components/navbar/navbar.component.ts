import { Component, OnInit, HostListener, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ManutentionComponent } from "../manutention/manutention.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatSidenavModule, ManutentionComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('navAnim', [
      transition('false => true', [
        style({ height: 0 }),
        animate("0.3s", style({ height: "*" }))
      ]),
      transition('true => false', [
        style({ height: "*" }),
        animate("0.3s", style({ height: 0 }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  isNavExpanded = true;

  actions = [
    'Portfolio',
    'Support',
    'Contact',
  ];

  fadeInDelays: string[] = [];

  ngOnInit() {
    if (window.innerWidth <= 1200) {
      this.isNavExpanded = false;
    }
    this.fadeInDelays = this.actions.map((_, i) => `${i * 0.2}s`);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if(window.innerWidth <= 1200){
      this.isNavExpanded = false;
    }else{
      this.isNavExpanded = true;
    }
  }

  toggleNav() {
    if (window.innerWidth <= 1200) {
      this.isNavExpanded = !this.isNavExpanded;
    }
  }

  openSection(sectionId: string){
    const elem = document.getElementById(sectionId);
    if(elem){
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }
}
