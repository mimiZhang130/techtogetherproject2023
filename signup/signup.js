const form = document.getElementById('signup');

n = document.getElementById("name").value;
console.log(n)

async function logIn() {
    y = await fetch(
      "http://api.nessieisreal.com/accounts?type=Credit Card&key=f9067898b091020354c1d943b5c91aa5"
    );
    result = await y.json();
    nickname = result[0].nickname;
    cardnum = result[0].account_number;
    
    return [nickname,cardnum];
  }
//   logIn().then((data) => (document.getElementById("name").innerHTML = data[0]));
//   logIn().then((data) => (document.getElementById("cardnum").innerHTML = data[1]));
let nickname = ""
//check if nickname = the inputted nickname. if yes, then go to my account page :)
console.log(nickname == n)
if(nickname == n){
    logIn().then((data) => (console.log(data[0])));
}
//   action="index.html"