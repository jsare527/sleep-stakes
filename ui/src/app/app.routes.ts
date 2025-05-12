import { Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard.component';
import { HangoutsViewComponent } from './components/hangouts-view/hangouts-view.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: AuthenticationComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'hangouts', component: HangoutsViewComponent, canActivate: [AuthGuard] }
];
