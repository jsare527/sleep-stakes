import { Component, OnDestroy, OnInit } from '@angular/core';
import { HangoutsService } from '../../services/hangouts.service';
import { Subscription } from 'rxjs';
import { HangoutModel } from '../../models/hangout.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hangout-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangout-detail.component.html',
  styleUrl: './hangout-detail.component.scss'
})
export class HangoutDetailComponent implements OnInit, OnDestroy{
  hangoutId!: number;
  hangout!: HangoutModel;
  subscriptions = new Subscription();

  constructor(private hangoutService: HangoutsService,
    private router: Router,
    private route: ActivatedRoute
) {}

  ngOnInit(): void {
    console.log('DETAIL PAGE INIT');
    this.hangoutId = Number(this.route.snapshot.paramMap.get('id'));

    this.hangoutService.getHangoutById(this.hangoutId).subscribe({
      next: (data) => (this.hangout = data),
      error: (err) => console.error('Error loading hangout', err)
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
