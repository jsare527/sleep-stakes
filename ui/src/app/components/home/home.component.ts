import { Component } from '@angular/core';
import { HangoutsViewComponent } from '../hangouts-view/hangouts-view.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HangoutsViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
