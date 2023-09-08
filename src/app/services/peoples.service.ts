import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IPeople } from '../models/people';

@Injectable({
  providedIn: 'root',
})
export class PeoplesService {
  constructor(private http: HttpClient) {}

  planets: IPeople;

  getPeople(url: string): Observable<IPeople> {
    return this.http.get<IPeople>(url).pipe(retry(2));
  }
}
