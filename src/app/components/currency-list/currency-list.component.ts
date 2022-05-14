import { Component, Input } from '@angular/core';

import { ICurrency } from '../../models';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent {
  @Input()
  currencies: ICurrency[];

  constructor() { }
}
