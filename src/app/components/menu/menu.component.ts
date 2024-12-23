import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @ViewChild('checkboxRef') checkboxRef!: ElementRef;

  openSection(sectionId: string){
    const elem = document.getElementById(sectionId);
    if(elem){
      elem.scrollIntoView({behavior: 'smooth'});
    }
    this.toggleCheckbox();
  }

  toggleCheckbox(): void {
    const checkbox = this.checkboxRef.nativeElement as HTMLInputElement;
    checkbox.checked = !checkbox.checked;
  }

}
