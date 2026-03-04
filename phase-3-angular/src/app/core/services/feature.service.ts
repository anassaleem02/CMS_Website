import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Feature, CreateFeatureDto, UpdateFeatureDto } from '../models/feature.model';
import { environment } from '../../../environments/environment';
import { MOCK_FEATURES } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class FeatureService {
  private base = `${environment.apiUrl}/features`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.base).pipe(catchError(() => of(MOCK_FEATURES)));
  }
  getById(id: number): Observable<Feature> {
    return this.http.get<Feature>(`${this.base}/${id}`).pipe(
      catchError(() => of(MOCK_FEATURES.find(f => f.id === id) || MOCK_FEATURES[0]))
    );
  }
  create(dto: CreateFeatureDto): Observable<Feature> { return this.http.post<Feature>(this.base, dto); }
  update(id: number, dto: UpdateFeatureDto): Observable<Feature> { return this.http.put<Feature>(`${this.base}/${id}`, dto); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
  reorder(ids: number[]): Observable<void> { return this.http.put<void>(`${this.base}/reorder`, ids); }
}
