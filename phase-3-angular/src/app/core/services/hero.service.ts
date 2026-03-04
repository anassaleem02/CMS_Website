import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Hero, CreateHeroDto, UpdateHeroDto } from '../models/hero.model';
import { environment } from '../../../environments/environment';
import { MOCK_HERO } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private base = `${environment.apiUrl}/hero`;
  constructor(private http: HttpClient) {}

  getActive(): Observable<Hero> {
    return this.http.get<Hero>(`${this.base}/active`).pipe(catchError(() => of(MOCK_HERO)));
  }
  get(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.base}/${id}`).pipe(catchError(() => of(MOCK_HERO)));
  }
  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.base).pipe(catchError(() => of([MOCK_HERO])));
  }
  create(dto: CreateHeroDto): Observable<Hero> { return this.http.post<Hero>(this.base, dto); }
  update(id: number, dto: UpdateHeroDto): Observable<Hero> { return this.http.put<Hero>(`${this.base}/${id}`, dto); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
}
