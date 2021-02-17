import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from './shared/transaction.service'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  financialAccount = {amount: 0, isDebit:true};

  constructor(private transactionService: TransactionService, private location: Location) { }

  ngOnInit(): void {
  }

  onSave(){
    this.transactionService.createTransaction(this.financialAccount.amount, this.financialAccount.isDebit ? 1 : 2)
    .subscribe(result => {
      this.location.back();
    }, error => {
      alert(error.error.ExceptionMessage);
    });
  }
}
