import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { map } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-top-side-bar',
  standalone: true,
  imports: [    
      CommonModule,
      RouterModule,
      MatToolbarModule,
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatSidenavModule,
      RouterOutlet,
      RouterModule],
  templateUrl: './top-side-bar.component.html',
  styleUrl: './top-side-bar.component.scss'
})
export class TopSideBarComponent {
  constructor(private readonly router: Router, private readonly authService: AuthenticationService) {}
  isSideNavOpen: boolean = true;
  user$ = this.authService.getCurrentUser().pipe(map(data => data.user.username ?? ''));

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
