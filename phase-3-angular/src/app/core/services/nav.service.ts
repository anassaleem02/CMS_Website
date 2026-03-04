import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NavItem, CreateNavItemDto, UpdateNavItemDto } from '../models/nav-item.model';
import { environment } from '../../../environments/environment';
import { MOCK_NAV_ITEMS } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class NavService {
  private base = `${environment.apiUrl}/navigation`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>(this.base).pipe(catchError(() => of(MOCK_NAV_ITEMS)));
  }
  getById(id: number): Observable<NavItem> {
    return this.http.get<NavItem>(`${this.base}/${id}`).pipe(
      catchError(() => of(MOCK_NAV_ITEMS.find(n => n.id === id) || MOCK_NAV_ITEMS[0]))
    );
  }
  create(dto: CreateNavItemDto): Observable<NavItem> { return this.http.post<NavItem>(this.base, dto); }
  update(id: number, dto: UpdateNavItemDto): Observable<NavItem> { return this.http.put<NavItem>(`${this.base}/${id}`, dto); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
  reorder(ids: number[]): Observable<void> { return this.http.put<void>(`${this.base}/reorder`, ids); }
}
