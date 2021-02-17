import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAccountComponent } from './financial-account.component';

describe('financialAccountComponent', () => {
  let component: FinancialAccountComponent;
  let fixture: ComponentFixture<FinancialAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
