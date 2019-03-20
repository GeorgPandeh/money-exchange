// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let curr = currency;
  const stack = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1,
  };
  const buffObj = {
    H: 0,
    Q: 0,
    D: 0,
    N: 0,
    P: 0,
  };
  if (currency > 10000) {
    return { error: "You are rich, my friend! We don't have so much coins for exchange" };
  }

  for (const key in stack) {
    while (curr >= stack[key]) {
      buffObj[key] += 1;
      curr -= stack[key];
    }
  }

  for (const key in buffObj) {
    if (buffObj[key] === 0) {
      delete buffObj[key];
    }
  }

  return buffObj;
};
