import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  error = '';

  constructor(private readonly authService: AuthenticationService, private readonly router: Router) {}

  onSubmit() {
    const username = this.form.controls.username.value!;
    const password = this.form.controls.password.value!;
    this.authService.login(username, password).subscribe({
      next: (user: any) => {
        this.router.navigate(['home']);
      },
      error: (e) => {
        this.error = 'Invalid Credentials';
      }
    });
  }
}
