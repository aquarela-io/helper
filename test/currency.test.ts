import { CurrencyHelper, } from '../src';
const currency = new CurrencyHelper();

test('Returns R$ 54.250,34 without Currency Symbol', () => {
  expect(currency.format(54250.34)).toBe('54.250,34');
});


