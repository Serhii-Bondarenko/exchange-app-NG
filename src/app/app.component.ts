import { Component, OnInit } from '@angular/core';

import { ICurrency } from './models';
import { CurrencyService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currencies: ICurrency[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService
      .getAll()
      .subscribe(response => {
        this.currencies = response.reduce((acc:ICurrency[], value) => {
          if (value.ccy === 'USD') {
            value = {...value, icon: 'https://cdn.privat24.ua/icons/file/US.svg', name: 'Долар США'}
            acc.push(value);
          } else if (value.ccy === 'EUR') {
            value = {...value, icon: 'https://cdn.privat24.ua/icons/file/EU.svg', name: 'Євро'};
            acc.push(value);
          } else if (value.ccy === 'RUR') {
            value = {...value, icon: 'https://cdn.privat24.ua/icons/file/RU.svg', name: 'Російський рубль'}
            acc.push(value);
          }

          return acc;
        }, []);
      } );
  }
}
