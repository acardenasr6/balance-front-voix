import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovementTypeService {

  private url: string = "http://localhost:8081/movement-type"

  //inyección
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<any>(this.url);
  }
  
}