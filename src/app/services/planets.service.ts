import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlanet } from '../models/planet';
import { PlanetsRequest } from '../models/planetsRequest';
import { Observable, map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  planets: PlanetsRequest;

  getOnPage(page: number): Observable<PlanetsRequest> {
    return this.http
      .get<PlanetsRequest>('https://swapi.dev/api/planets', {
        params: {
          page: page,
        },
      })
      .pipe(retry(2));
  }
}
