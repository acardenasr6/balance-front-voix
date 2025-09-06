import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountTypeService {

  private url: string = "http://localhost:8081/account-type"

  //inyección
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.url);
  }
  
}
