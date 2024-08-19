import { Routes } from '@angular/router';
import { FlashappComponent } from './pages/privacy/flashapp/flashapp.component';
import { RiccardoventuriniComponent } from './pages/privacy/riccardoventurini/riccardoventurini.component';
import { RytmComponent } from './pages/privacy/rytm/rytm.component';

export const routes: Routes = [
    { path: 'privacy/flashapp', component: FlashappComponent },
    { path: 'privacy/riccardoventurini', component: RiccardoventuriniComponent },
    { path: 'privacy/rytm', component: RytmComponent },
];
