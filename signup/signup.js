let id = "";

function logIn() {
  const form = document.getElementById('logIn');
  n = document.getElementById("name").value;
  cn = document.getElementById("accountnum").value;
  id = getLogInInfo().then((data) => {
    if (n == data[0] && cn == data[1]) {
      return data[2];
    }
  })

}


async function getLogInInfo() {
  y = await fetch(
    "http://api.nessieisreal.com/accounts?type=Credit Card&key=f9067898b091020354c1d943b5c91aa5"
  );
  result = await y.json();
  nickname = result[0].nickname;
  cardNum = result[0].account_number;
  id = result[0]._id;
  return [nickname, cardNum, id];
}
