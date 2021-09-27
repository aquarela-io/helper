/** Date Helper */

class DateHelper {
  /**
   * Get full year
   * @returns {number | string}
   */

  getYear(): number | string {
    const year = new Date();
    return year.getFullYear();
  }
}

/** Currency Helper. note: only returns BRL */

class CurrencyHelper {
  /**
   * Format Currency without Symbol
   * @param {number} value
   * @returns {string}
   */

  format(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    })
      .format(value)
      .replace(/[R$]/gi, '')
      .trimLeft();
  }

  /**
   * Format Currency with Symbol
   * @param {number} value
   * @returns {string}
   */

  formatWithSymbol(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);
  }
}


/**
 * Check if Digits are Repeated
 * @param {string} string
 * @returns {string}
 */
const isRepeated = (string: string) => {
  const firstChar = string.charAt(0)
  const regex = RegExp(`^${firstChar}+$`)
  return regex.test(string)
}


class CpfHelper {
    format(cpf:  string): string {

      const unformattedCpf = cpf.replace(/\D/g, '')

      if (unformattedCpf.length !== 11) {
        throw new Error('Invalid CPF number')
      }
    
      const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
      const mask = '$1.$2.$3-$4'
    
      return unformattedCpf.replace(regex, mask)
    }

    validate(cpf: string): boolean {
      const unformattedCpf = cpf.replace(/\D/g, '')

      let sum = 0
      let dv = 0

      if (unformattedCpf.length != 11) {
        throw new Error('Invalid CPF number')
      }
      if (isRepeated(unformattedCpf)) return false

      for(let i=1; i<=9; i++) sum = sum + parseInt(unformattedCpf.substring(i-1, i)) * (11 - i)

      dv = (sum*10) % 11
      if((dv == 10) || (dv == 11)) dv = 0

      if(dv != parseInt(unformattedCpf.substring(9, 10))) return false;

      sum = 0;
      for(let i = 1; i <= 10; i++) sum = sum + parseInt(unformattedCpf.substring(i-1, i))*(12-i);
      dv = (sum * 10) % 11;
  
      if((dv == 10) || (dv == 11)) dv = 0;
      if(dv != parseInt(unformattedCpf.substring(10, 11))) return false;


      return true      
    }
  

}


export { CurrencyHelper, DateHelper, CpfHelper };
