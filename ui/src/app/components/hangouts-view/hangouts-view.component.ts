import { Component, OnDestroy, OnInit } from '@angular/core';
import { HangoutsService } from '../../services/hangouts.service';
import { Subscription } from 'rxjs';
import { HangoutModel } from '../../models/hangout.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hangouts-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangouts-view.component.html',
  styleUrl: './hangouts-view.component.scss'
})
export class HangoutsViewComponent implements OnInit, OnDestroy {
  constructor(private hangoutService: HangoutsService,
              private router: Router,
              private route: ActivatedRoute
  ) {}

  subscriptions = new Subscription();
  hangouts: HangoutModel[] = [];

  ngOnInit(): void {
    const url = this.router.url;
    const isInactiveView = url === '/hangouts'; // ← updated line
  
    const request$ = isInactiveView
      ? this.hangoutService.getInactiveHangouts()
      : this.hangoutService.getHangouts();

    this.subscriptions.add(
      request$.subscribe({
        next: (data) => {
          this.hangouts = data;
          },
          error: (error) => {
            console.error('Error fetching hangouts:', error);
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  goToDetail(hangoutId: number): void {
    console.log('Navigating to hangout detail with ID:', hangoutId);
    this.router.navigate(['/hangout', hangoutId]);
  }
}
