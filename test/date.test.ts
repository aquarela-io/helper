import {DateHelper} from '../src';
const date = new DateHelper();
const year = new Date();
test('Year are this current year.', () => {
  expect(date.getYear()).toBe(year.getFullYear());
});

