import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollectionResolver implements Resolve<any> {
  constructor(private readonly http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const collection = route.paramMap.get('collection') as string;

    return this.http.get(`${environment.apiBaseUrl}/rest/1.0.0/${collection}`, {
      headers: { Accept: 'application/json' },
    });
  }
}
