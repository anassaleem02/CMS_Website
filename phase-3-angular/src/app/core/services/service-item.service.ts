import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceItem, CreateServiceDto, UpdateServiceDto } from '../models/service-item.model';
import { environment } from '../../../environments/environment';
import { MOCK_SERVICES } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class ServiceItemService {
  private base = `${environment.apiUrl}/services`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<ServiceItem[]> {
    return this.http.get<ServiceItem[]>(this.base).pipe(catchError(() => of(MOCK_SERVICES)));
  }
  getById(id: number): Observable<ServiceItem> {
    return this.http.get<ServiceItem>(`${this.base}/${id}`).pipe(
      catchError(() => of(MOCK_SERVICES.find(s => s.id === id) || MOCK_SERVICES[0]))
    );
  }
  create(dto: CreateServiceDto): Observable<ServiceItem> { return this.http.post<ServiceItem>(this.base, dto); }
  update(id: number, dto: UpdateServiceDto): Observable<ServiceItem> { return this.http.put<ServiceItem>(`${this.base}/${id}`, dto); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
  reorder(ids: number[]): Observable<void> { return this.http.put<void>(`${this.base}/reorder`, ids); }
}
