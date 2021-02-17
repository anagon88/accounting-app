import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinancialAccountComponent } from './financial-account.component';


const routes: Routes = [
  { path: '', component: FinancialAccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialAccountRoutingModule { }
