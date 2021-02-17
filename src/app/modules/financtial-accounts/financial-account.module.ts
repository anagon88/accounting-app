import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule
  ]
})
export class FinancialAccountModule { }
