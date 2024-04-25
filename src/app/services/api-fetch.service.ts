import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.balldontlie.io/v1/players';
  private apiKey = 'CAMBIAR_POR_API_QUE_ENVIE_POR_WHATSAPP';

  getPlayers(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.apiKey}`,
    });
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
