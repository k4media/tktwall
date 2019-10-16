import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvents } from '../interface/musicIEvent';

@Injectable({
  providedIn: 'root'
})

export class MusicalEventService {

  constructor(private http: HttpClient) { }
  getEvents(): Observable<IEvents[]> {
    return this.http.get<IEvents[]>('https://api.predicthq.com/v1/events?category=concerts&label=music& country=US ', { headers: new HttpHeaders().set('Authorization', 'Bearer GzgmX-skAle4Q1TAIKydISIuiLgXctWpcTiOsbOz')});
  }
}