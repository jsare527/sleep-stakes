import { Component, OnDestroy, OnInit } from '@angular/core';
import { HangoutsService } from '../../services/hangouts.service';
import { Subscription } from 'rxjs';
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
    this.subscriptions.add(
      // add subscription from hangout service here and assign the result to the 'hangouts' array
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
