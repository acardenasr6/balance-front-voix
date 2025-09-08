import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccountService{

      private url: string = "http://localhost:8081/account"

  //inyección
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.url);
  }
  
}