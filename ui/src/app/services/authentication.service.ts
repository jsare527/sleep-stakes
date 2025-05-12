import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, take, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string) {
    const obj = { username: username, password: password };
    return this.http.post(`${this.baseUrl}/api-user-login/`, obj).pipe(tap((response: any) => {
      sessionStorage.setItem('auth_token', response.token);
    }));
  }

  logout() {
    sessionStorage.removeItem('auth_token');
  }

  getCurrentUser(): Observable<any> {
    const token = sessionStorage.getItem('auth_token');
    const headers = new HttpHeaders({ Authorization: token ? `Token ${token}` : ''});

    return this.http.get(`${this.baseUrl}/api/v1/check-auth/`, { headers: headers });
  }

  // used in auth.guard.component
  isAuthed(): Observable<boolean> {
    const token = sessionStorage.getItem('auth_token');
    if (token === null) return of(false);
    const headers = new HttpHeaders({ Authorization: token ? `Token ${token}` : ''});

    return this.http.get(`${this.baseUrl}/api/v1/check-auth/`, { headers: headers })
    .pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

}
