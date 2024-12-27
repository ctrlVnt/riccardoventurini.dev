import { Component } from '@angular/core';
import about from "../../../../assets/text/strings.json";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about = about.aboutme
}
