import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui';

  constructor(private readonly router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
