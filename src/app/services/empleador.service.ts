import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadorRequest } from '../models/empleador-request.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadorService {

  private apiURL: string ="https://jobhub-api-upao.onrender.com/api/v1/empleadores";

  private http = inject(HttpClient);

  //constructor() { }

  create(empleador: EmpleadorRequest): Observable<EmpleadorRequest>{
    return this.http.post<EmpleadorRequest>(this.apiURL,empleador);
  }

}
