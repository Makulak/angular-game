import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl + '/auth';

  constructor(private http: HttpClient) { }

  signUp(email: string, username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + '/signup', {
      username,
      email,
      password
    });
  }
}
