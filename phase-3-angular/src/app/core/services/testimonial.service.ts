import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Testimonial, CreateTestimonialDto, UpdateTestimonialDto } from '../models/testimonial.model';
import { environment } from '../../../environments/environment';
import { MOCK_TESTIMONIALS } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class TestimonialService {
  private base = `${environment.apiUrl}/testimonials`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this.base).pipe(catchError(() => of(MOCK_TESTIMONIALS)));
  }
  getById(id: number): Observable<Testimonial> {
    return this.http.get<Testimonial>(`${this.base}/${id}`).pipe(
      catchError(() => of(MOCK_TESTIMONIALS.find(t => t.id === id) || MOCK_TESTIMONIALS[0]))
    );
  }
  create(dto: CreateTestimonialDto): Observable<Testimonial> { return this.http.post<Testimonial>(this.base, dto); }
  update(id: number, dto: UpdateTestimonialDto): Observable<Testimonial> { return this.http.put<Testimonial>(`${this.base}/${id}`, dto); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
  reorder(ids: number[]): Observable<void> { return this.http.put<void>(`${this.base}/reorder`, ids); }
}
