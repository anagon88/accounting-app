import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  private readonly URL = 'http://localhost:53325/api/transactions';
  
  constructor(public http: HttpClient) { }

  createTransaction(amount: number, type: number) {
    return this.http.post(this.URL,
      {
        'type': type,
        'amount': amount
      }, {
        headers: {
          'Content-Type': 'application/json',
          'mode': 'no-cors'
        }
      })
  }

  getTransaction(transactionId: string) {
    return this.http.get(this.URL + transactionId);
  }

  getTransactions() {
    this.http.get(this.URL);
  }

}