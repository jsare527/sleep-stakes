import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  error = '';
  subscriptions = new Subscription();

  constructor(private readonly authService: AuthenticationService, private readonly router: Router) {}

  ngOnInit(): void {
    // if user is authed already, send them to home page.
    this.subscriptions.add(
      this.authService.isAuthed().subscribe(authed => {
        if (authed) this.router.navigate(['home']);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    const username = this.form.controls.username.value!;
    const password = this.form.controls.password.value!;
    this.authService.login(username, password).subscribe({
      next: (user) => {
        this.router.navigate(['home']);
      },
      error: (e) => {
        this.error = 'Invalid Credentials';
      }
    });
  }
}
