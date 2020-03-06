const formatMoney: (amount: number) => string = (amount: number) => {
  const intl = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const formated = intl
    .format(amount / 100)
    .replace('$', '')
    .replace(/USD/gi, '')
    .trim();
  return formated;
};

export default formatMoney;
