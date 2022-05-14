import { Component, Input } from '@angular/core';

import { ICurrency } from '../../models';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.css']
})
export class CurrencyItemComponent {
  @Input()
  currency: ICurrency

  constructor() { }
}
