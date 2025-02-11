import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl = "http://localhost:5215";
  constructor(private http: HttpClient) { }

  getUserEvents(userId: string): Observable<GetUserEventsRespDTO> {
    return this.http.get<GetUserEventsRespDTO>(`${this.apiUrl}/users/${userId}/events`);
  }
}

export class GetUserEventsRespDTO {

}