import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:5215/";
  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<GetUserRespDTO> {
    return this.http.get<GetUserRespDTO>(`${this.apiUrl}/users/${id}`);
  }
}

export class GetUserRespDTO {
  id: string | undefined;
  email: string | undefined;
  name: string | undefined;
  surname: string | undefined;
  role: number | undefined;
}
