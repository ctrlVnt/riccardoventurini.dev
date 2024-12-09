import { Component, ElementRef, ViewChild } from '@angular/core';
import pubblicationsfile from "../../../../assets/text/projects.json";
import { ItemComponent } from "../../../components/item/item.component";
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';

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
  standalone: true,
  imports: [ItemComponent, MatListModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

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
}
