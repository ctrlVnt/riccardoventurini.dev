import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Project {
  cover: string;
  title: string;
  description: string;
  link: string;
  source: string;
  type: string;
}

@Component({
    selector: 'app-item',
    imports: [MatCardModule, MatButtonModule, CommonModule, MatIconModule],
    templateUrl: './item.component.html',
    styleUrl: './item.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {

  @Input() detail: Project | undefined ;

  isLoading = false;

  openLink(link: string) {
    window.open(link, '_blank');
  }

  /*loading(){
    this.isLoading = true;

    setTimeout(() => {
      this.openItem();
      this.isLoading = false;
    }, 1000);

  }*/
}
