import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionsComponent } from '../transactions/transactions.component';
import { TransactionsModule } from '../transactions/transactions.module';

import { FinancialAccountRoutingModule } from './financial-account-routing.module';
import { FinancialAccountComponent } from './financial-account.component';

@NgModule({
  declarations: [
    FinancialAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FinancialAccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    TransactionsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class FinancialAccountModule { }
