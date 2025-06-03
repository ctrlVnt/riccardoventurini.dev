import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import {} from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, CommonModule, MatMenuModule, ClipboardModule, MatIconModule, FooterComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {

  sended = false;
  outeffect = false;
  mail = 'riccardoventurini220@gmail.com';

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    object: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient, private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  onSubmit() {

    const formData: any = this.profileForm.value;

    formData['form-name'] = 'contact';

    const headers = new HttpHeaders({
      Accept: 'text/html',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http
      .post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
      .subscribe(() => {
        this.sended = true;
        this.profileForm.reset();
      });
  }

  resend(){
    this.outeffect = true;
    setTimeout(() =>{
      this.sended = false;
      this.outeffect = false;
    }, 100);
    window.location.reload();
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
