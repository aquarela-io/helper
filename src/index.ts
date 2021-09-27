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

export { CurrencyHelper, DateHelper };
