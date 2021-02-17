import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'financial-account', pathMatch: 'full' },
  { path: 'financial-account', 
    loadChildren: () => import('./modules/financtial-accounts/financial-account.module')
    .then(m => m.FinancialAccountModule)
  },{ 
    path: 'transactions', 
    loadChildren: () => import('./modules/transactions/transactions.module')
    .then(m => m.TransactionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
