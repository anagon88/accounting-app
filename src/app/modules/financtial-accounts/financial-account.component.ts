import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FinancialAccountService } from './shared/financtial-accounts.service'

@Component({
  selector: 'app-financial-account',
  templateUrl: './financial-account.component.html',
  styleUrls: ['./financial-account.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FinancialAccountComponent implements OnInit {

  financialAccount;

  constructor(private financialAccountService: FinancialAccountService) {}

  ngOnInit(): void {
    this.financialAccountService.getFinancialAccount('1').subscribe( result => {
      this.financialAccount = result;
    })
  }
}
