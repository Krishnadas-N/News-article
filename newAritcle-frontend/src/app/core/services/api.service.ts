import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../interfaces/articles';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private backendUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getAtricles(searchQuery: string = ''): Observable<Articles[]> {
    return this.http.get<Articles[]>(
      `${this.backendUrl}/news-articles?search=${searchQuery}`
    );
  }
}
