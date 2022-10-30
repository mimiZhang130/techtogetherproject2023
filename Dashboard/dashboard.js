async function account() {
  y = await fetch(
    "http://api.nessieisreal.com/accounts?type=Credit%20Card&key=f9067898b091020354c1d943b5c91aa5"
  );
  result = await y.json();
  nickname = result[result.length-1].nickname;
  balance = result[result.length-1].balance;
  rewards = result[result.length-1].rewards;
  return [nickname,balance,rewards];
}
async function bills() {
  y = await fetch(
    "http://api.nessieisreal.com/accounts/635dde6778f6910a15f0bea0/bills?key=f9067898b091020354c1d943b5c91aa5"
  );
  result = await y.json();
  paydate = result[result.length-1].payment_date;
  payamount = result[result.length-1].payment_amount;
  return [paydate, payamount];
}
async function deposit() {
  y = await fetch(
    "http://api.nessieisreal.com/accounts/635dde6778f6910a15f0bea0/deposits?key=f9067898b091020354c1d943b5c91aa5"
  );
  result = await y.json();
  date = result[result.length-1].transaction_date;
  description = result[result.length-1].description;
  amount = result[result.length-1].amount;
  return [date, description, amount];
}
async function loans() {
  y = await fetch(
    "http://api.nessieisreal.com/accounts/635dde6778f6910a15f0bea0/loans?key=f9067898b091020354c1d943b5c91aa5"
  );
  result = await y.json();
  credscore = result[result.length-1].credit_score;
  monthlypayment = result[result.length-1].monthly_payment;
  amount = result[result.length-1].amount;
  return [credscore, monthlypayment, amount];
}

async function purchases() {
  y = await fetch(
    "http://api.nessieisreal.com/accounts/635dde6778f6910a15f0bea0/purchases?key=f9067898b091020354c1d943b5c91aa5"
  );
  result = await y.json();
  purchaseAmount = result[result.length-1].amount;
  purchaseDate = result[result.length-1].purchase_date;
  purchaseDesc = result[result.length-1].description;
  return [purchaseAmount, purchaseDate, purchaseDesc];
}

async function transfer() {
  y = await fetch(
    "http://api.nessieisreal.com/accounts/635dde6778f6910a15f0bea0/transfers?key=f9067898b091020354c1d943b5c91aa5"
  );
  result = await y.json();
  transferDescription = result[result.length-1].description;
  transferAmount = result[result.length-1].amount;
  return [transferDescription, transferAmount];
}

async function withdrawal() {
  y = await fetch(
    "http://api.nessieisreal.com/accounts/635dde6778f6910a15f0bea0/withdrawals?key=f9067898b091020354c1d943b5c91aa5"
  );
  result = await y.json();
  withdrawalDate = result[result.length-1].transaction_date;
  withdrawalDescription = result[result.length-1].description;
  withdrawalAmount = result[result.length-1].amount;
  return [withdrawalDate, withdrawalDescription, withdrawalAmount];
}
// async function deposit() {
//   y = await fetch(
//     "http://api.nessieisreal.com/accounts/635dde6778f6910a15f0bea0/deposits?key=f9067898b091020354c1d943b5c91aa5"
//   );
//   result = await y.json();
//   date = result[0].transaction_date;
//   description = result[0].description;
//   amount = result[0].amount;
//   return [date, description, amount];
// }

account().then((data) => (document.getElementById("name").innerHTML = data[0]));
account().then((data) => (document.getElementById("balance").innerHTML = data[1]));
account().then((data) => (document.getElementById("rewards").innerHTML = data[2]));

bills().then((data) => (document.getElementById("paydate").innerHTML = data[0]));
bills().then((data) => (document.getElementById("payamount").innerHTML = data[1]));

deposit().then((data) => (document.getElementById("date").innerHTML = data[0]));
deposit().then((data) => (document.getElementById("description").innerHTML = data[1]));
deposit().then((data) => (document.getElementById("amount").innerHTML = data[2]));

loans().then((data) => (document.getElementById("credscore").innerHTML = data[0]));
loans().then((data) => (document.getElementById("monthlypayment").innerHTML = data[1]));
loans().then((data) => (document.getElementById("loanamount").innerHTML = data[2]));

purchases().then((data) => (document.getElementById("purchaseAmount").innerHTML = data[0]));
purchases().then((data) => (document.getElementById("purchaseDate").innerHTML = data[1]));
purchases().then((data) => (document.getElementById("purchaseDesc").innerHTML = data[2]));

transfer().then((data) => (document.getElementById("transferDescription").innerHTML = data[0]));
transfer().then((data) => (document.getElementById("transferAmount").innerHTML = data[1]));

withdrawal().then((data) => (document.getElementById("withdrawalDate").innerHTML = data[0]));
withdrawal().then((data) => (document.getElementById("withdrawalDescription").innerHTML = data[1]));
withdrawal().then((data) => (document.getElementById("withdrawalAmount").innerHTML = data[2]));
