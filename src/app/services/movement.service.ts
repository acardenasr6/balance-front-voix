import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private url: string = "http://localhost:8081/movement"

  //inyección
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.url);
  }
  
}