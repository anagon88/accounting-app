import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-account',
  templateUrl: './financial-account.component.html',
  styleUrls: ['./financial-account.component.css']
})
export class FinancialAccountComponent implements OnInit {

  financialAccount = {total: 100, items: [{amount:10, desc:'Desc'}]};

  constructor() { }

  ngOnInit(): void {
  }

}
