import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import pubblicationsfile from "../../../assets/text/publications.json";

interface Publication {
  cover: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent {
  publications: Publication[] = pubblicationsfile.publications;
}
