import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FinancialAccountService {
  private readonly URL = 'http://localhost:53325/api/financial-accounts/';
  
  constructor(public http: HttpClient) { }

  getFinancialAccount(accountId: string) {
    return this.http.get(this.URL + accountId, {
      headers: {
        'Content-Type': 'application/json',
        'mode': 'no-cors'
      }
    });
  }

}