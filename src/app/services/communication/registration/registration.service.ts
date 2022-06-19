import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from 'src/app/constants/route.constant';
import { Registration } from 'src/app/interfaces/registration.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) { }

  register(body: Registration): Observable<Object> {
    return this.http.post<Response>(Route.ENDPOINT_REGISTER, body)
  }
}
