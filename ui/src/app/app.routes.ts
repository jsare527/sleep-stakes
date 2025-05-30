import { Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard.component';
import { HangoutsViewComponent } from './components/hangouts-view/hangouts-view.component';
import { HangoutDetailComponent } from './components/hangout-detail/hangout-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: AuthenticationComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'hangouts', component: HangoutsViewComponent, canActivate: [AuthGuard] },
    { path: 'hangout/:id', component: HangoutDetailComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
