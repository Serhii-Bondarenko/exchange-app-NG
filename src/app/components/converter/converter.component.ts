import { Component,  Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ICurrency } from '../../models';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  @Input()
  currencies: ICurrency[] = [];

  formData: FormGroup;
  result: number;

  constructor() {
    this.formData = new FormGroup({
      inCur: new FormControl( 'USD'),
      inValue: new FormControl(0),
      outCur: new FormControl('UAH'),
      outValue: new FormControl(0)
    })
  }

  convert(formData: FormGroup) {
    const { inCur, inValue, outCur } = formData.value;

    let result;

    if (inCur === 'UAH') {
      const ccy: any = this.currencies.find(value => value.ccy === outCur);

      if (!ccy) {
        this.result = this.formData.value.inValue;

        return;
      }

      result = inValue / ccy?.sale;
      this.result = Number(result.toFixed(2));

      return;
    }

    this.formData.get('outCur')?.setValue('UAH');

    const ccy: any = this.currencies.find(value => value.ccy === inCur);
    result = ccy?.buy * inValue;
    this.result = Number(result.toFixed(2));
  }

  switch () {
    const out = this.formData.value.outCur;
    this.formData.get('outCur')?.setValue(this.formData.value.inCur);
    this.formData.get('inCur')?.setValue(out);

    this.convert(this.formData);
  }
}
