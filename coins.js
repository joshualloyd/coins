/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  // Initialize coin amounts
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  // avoiding decimal math issues by converting decimal dollars to cents
  var cents = amount * 100;
  console.log("you have this many cents", cents);

  coinPurse.quarters = Math.floor(cents / 25);
  console.log("Here's your quarters", coinPurse.quarters);
  
  // get the remainder after the getting quarters
  var remainder = cents % 25;
  
  coinPurse.dimes = Math.floor(remainder / 10);
  console.log("Here's your dimes", coinPurse.dimes);

  // get the remainder after getting dimes
  var remainder = remainder % 10;

  coinPurse.nickels = Math.floor(remainder / 5);
  console.log("Here's your nickels", coinPurse.nickels);

  // remainder after getting nickels
  var remainder = remainder % 5;

  coinPurse.pennies = remainder;
  console.log("Here's your pennies", coinPurse.pennies);

  remainder = remainder - coinPurse.pennies;

  // we should have the complete amount of change in the coinPurse and no remainder left
  console.log("Here the remainder", remainder);

  return coinPurse;
}

var coins = coinCounter(0.67);
console.log("here's your change", coins);