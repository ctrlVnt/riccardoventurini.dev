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

import { FooterComponent } from '../../components/footer/footer.component';

import textfile from "../../../assets/text/testi.json"
import pubblicationsfile from "../../../assets/text/projects.json";
import { animate, state, style, transition, trigger } from '@angular/animations';

import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { NgParticlesModule } from "ng-particles";
import { loadSlim } from "tsparticles-slim";
import { PortfolioComponent } from "./portfolio/portfolio.component";

interface Project {
  cover: string;
  title: string;
  description: string;
  link: string;
  source: string;
  type: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgParticlesModule, CommonModule, RouterOutlet, MatListModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatDividerModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule, MatMenuModule, ClipboardModule, FooterComponent, PortfolioComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('300ms ease-in-out')),
    ]),
  ],
})

export class AppComponent{
  
  scrol = 0;

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }


  @HostListener('window:scroll', ['$event']) 
    doSomething() {
      this.scrol = window.scrollY;
      console.debug("Scroll Event", window.scrollY );
    }
  
  projects: Project[] = pubblicationsfile.projects;

  mail = 'riccardoventurini220@gmail.com';

  selectedIndex = 0;
  detail: Project | undefined;
  isComponentVisible = false;
  isLoading = false;

  loading(){
    this.isLoading = true;

    setTimeout(() => {
      this.openItem();
      this.isLoading = false;
    }, 1000);

  }

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
    if(this.projects[this.selectedIndex].link!=null){
      window.open(`${this.projects[this.selectedIndex].link}`, '_blank');
    }else{
      window.open(`${this.projects[this.selectedIndex].source}`, '_blank');
    }
  }

  openLink() {
      window.open(`https://github.com/ctrlVnt/riccardoventurini.dev`, '_blank');
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

  id = "tsparticles";

    /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
    particlesUrl = "http://foo.bar/particles.json";

    /* or the classic JavaScript object */
    particlesOptions = {
        background: {
            color: {
                value: "#000",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: ClickMode.push,
                },
                onHover: {
                    enable: true,
                    mode: HoverMode.repulse,
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 150,
                    duration: 0.5,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 10,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
            fullScreen: {
              enable: true,
              zIndex: 0,
            },
        },
        detectRetina: true,
    };

    
    async particlesInit(engine: Engine): Promise<void> {
  
        await loadSlim(engine);
    }
}
