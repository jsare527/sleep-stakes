import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HangoutModel } from '../models/hangout.model';

@Injectable({
  providedIn: 'root'
})
export class HangoutsService {
  baseUrl = '/api/v1';

  constructor(private readonly http: HttpClient) { }

  getHangouts(): Observable<HangoutModel[]> {
    return this.http.get<HangoutModel[]>(`${this.baseUrl}/hangouts`);
  }

  getInactiveHangouts(): Observable<HangoutModel[]> {
    return this.http.get<HangoutModel[]>(`${this.baseUrl}/hangouts/inactive/`);
  }  
}
