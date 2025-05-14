import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import pubblicationsfile from "../../../../assets/text/projects.json";
import { ItemComponent } from "../../../components/item/item.component";
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

interface Project {
  cover: string;
  title: string;
  description: string;
  link: string;
  source: string;
  type: string;
}

@Component({
    selector: 'app-portfolio',
    imports: [ItemComponent, MatListModule, CommonModule, MatIconModule, MatButtonModule],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  scrollButton = 400;

  
  scrolX = 0;
  
  constructor(private elementRef: ElementRef) {}
  
  isWindowGreaterThan600 = window.innerWidth > 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isWindowGreaterThan600 =  window.innerWidth > 768;
  }

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  projects: Project[] = pubblicationsfile.projects;

  detail: Project | undefined;
  isComponentVisible = false;
  isLoading = false;
  selectedIndex = 0;

  selectItem() {
    this.detail = this.projects[this.selectedIndex];
    this.isComponentVisible = true;
  }

  onVisibilityChange(isVisible: boolean) {
    this.isComponentVisible = isVisible;
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + this.scrollButton), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - this.scrollButton), behavior: 'smooth' });
  }
}
