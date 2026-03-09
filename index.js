'use strict';

module.exports = {
  addVat: (amount, rate = 20) => +(amount * (1 + rate / 100)).toFixed(2),
  removeVat: (amount, rate = 20) => +(amount / (1 + rate / 100)).toFixed(2),
  vatAmount: (amount, rate = 20) => +(amount * rate / 100).toFixed(2),
  isVatRegistered: (turnover) => turnover >= 90000,
  STANDARD_RATE: 20,
  REDUCED_RATE: 5,
  ZERO_RATE: 0,
  THRESHOLD: 90000
};
