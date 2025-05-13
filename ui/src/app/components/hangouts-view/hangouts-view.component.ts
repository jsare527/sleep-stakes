import { Component, OnDestroy, OnInit } from '@angular/core';
import { HangoutsService } from '../../services/hangouts.service';
import { Observable, Subscription } from 'rxjs';
import { HangoutModel } from '../../models/hangout.model';

@Component({
  selector: 'app-hangouts-view',
  standalone: true,
  imports: [],
  templateUrl: './hangouts-view.component.html',
  styleUrl: './hangouts-view.component.scss'
})
export class HangoutsViewComponent implements OnInit, OnDestroy {
  constructor(private hangoutService: HangoutsService) {}

  subscriptions = new Subscription();
  hangouts: HangoutModel[] = [];

  ngOnInit(): void {
    // console logs the hangouts that are active
    this.subscriptions.add(
      this.hangoutService.getHangouts().subscribe(hangouts => {
        this.hangouts = hangouts;
        console.log(this.hangouts);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
