import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SiteSettings, UpdateSiteSettingsDto } from '../models/site-settings.model';
import { environment } from '../../../environments/environment';
import { MOCK_SETTINGS } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private base = `${environment.apiUrl}/settings`;
  constructor(private http: HttpClient) {}

  get(): Observable<SiteSettings> {
    return this.http.get<SiteSettings>(this.base).pipe(catchError(() => of(MOCK_SETTINGS)));
  }
  update(dto: UpdateSiteSettingsDto): Observable<SiteSettings> {
    return this.http.put<SiteSettings>(this.base, dto);
  }
}
