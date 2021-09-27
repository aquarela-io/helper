import { CurrencyHelper, DateHelper } from '../src';
const date = new DateHelper();
const currency = new CurrencyHelper();
const year = new Date();
test('Year are this current year.', () => {
  expect(date.getYear()).toBe(year.getFullYear());
});

test('Returns R$ 54.250,34 without Currency Symbol', () => {
  expect(currency.format(54250.34)).toBe('54.250,34');
});
