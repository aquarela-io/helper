import { CpfHelper } from '../src';
const cpf = new CpfHelper()


test('Returns 609.025.210-71', () => {
  expect(cpf.format('60902521071')).toBe('609.025.210-71');
});


test('CPF 012.651.840-89 is Valid', () => {
  expect(cpf.validate('012.651.840-89')).toBe(true);
});

test('CPF 011.430.287-03 is Invalid', () => {
  expect(cpf.validate('011.430.287-03')).toBe(false);
});

test('CPF 11111111111 is repeated and invalid, looks like brute force', () => {
  expect(cpf.validate('11111111111')).toBe(false);
});

test('CPF 12345 is not an cpf', () => {
  expect(() => {cpf.validate('12345')}).toThrow();  
})



