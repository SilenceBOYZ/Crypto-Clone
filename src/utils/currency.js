function convertToUSD(currency, digit = 0) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: digit
  });

  return formatter.format(currency)
}

export { convertToUSD }