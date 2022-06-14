import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '../constants/route.constant';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(body: Registration): Observable<Object> {
    console.log("register clicked");
    return this.http.post(Route.ENDPOINT_REGISTER, body)
  }
}
