import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = '/api/v1';

  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string) {
    const obj = { username: username, password: password };
    return this.http.post(`${this.baseUrl}/login/`, obj).pipe(tap((response: any) => {
      sessionStorage.setItem('auth_token', response.token);
    }));
  }

  logout() {
    sessionStorage.removeItem('auth_token');
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/check-auth/`);
  }

  // used in auth.guard.component
  isAuthed(): Observable<boolean> {
    const token = sessionStorage.getItem('auth_token');
    if (token === null) return of(false);

    return this.http.get(`${this.baseUrl}/check-auth/`)
    .pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

}
