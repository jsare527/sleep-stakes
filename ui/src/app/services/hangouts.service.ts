import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HangoutModel } from '../models/hangout.model';

@Injectable({
  providedIn: 'root'
})
export class HangoutsService {
  baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  getHangouts(): Observable<HangoutModel[]> {
    return this.http.get<HangoutModel[]>(`${this.baseUrl}/api/v1/hangouts`);
  }
}
