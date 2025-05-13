import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TopSideBarComponent } from "./components/top-side-bar/top-side-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopSideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui';

  // include any urls here to hide the top and side nav from the view
  urls: string[] = ['/login'];

  constructor(private readonly router: Router) {}

  hideSideTopNav(): boolean {
    return this.urls.includes(this.router.url);
  }
}
