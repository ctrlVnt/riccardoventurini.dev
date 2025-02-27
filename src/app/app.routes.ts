import { Routes } from '@angular/router';
import { FlashappComponent } from './pages/privacy/flashapp/flashapp.component';
import { RiccardoventuriniComponent } from './pages/privacy/riccardoventurini/riccardoventurini.component';
import { RytmComponent } from './pages/privacy/rytm/rytm.component';
import { Homecomponent } from './pages/home/home';
import { NotFoundComponent } from './pages/404/404.component';

export const routes: Routes = [
    { path: 'privacy/flashapp', component: FlashappComponent },
    { path: 'privacy/riccardoventurini', component: RiccardoventuriniComponent },
    { path: 'privacy/rytm', component: RytmComponent },
    { path: '', component: Homecomponent },
    { path: '**', component: NotFoundComponent}
];
