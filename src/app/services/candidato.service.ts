import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatoResponse } from '../models/candidato-response.model';
import { CandidatoRequest } from '../models/candidato-request.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private apiURL: string ="https://jobhub-api-upao.onrender.com/api/v1/candidatos";

  private http = inject(HttpClient);

  //constructor(private http: HttpClient) { }

  getAllCandidatos(): Observable<CandidatoResponse[]>{
      return this.http.get<CandidatoResponse[]>(this.apiURL);
  }

  create(candidato: CandidatoRequest): Observable<CandidatoRequest>{
    return this.http.post<CandidatoRequest>(this.apiURL,candidato);
  }

}
