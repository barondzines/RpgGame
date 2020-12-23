import "./styles/main.scss";

var cashCount = 0;
var currentExp = 0;
var levelUpExp = 0;
var monsterValue = 11;
var monsterExpValue = 5;

var killMonster = document.getElementById("killMonster");
var cashTotalHtml = document.getElementById("cashCount");
var currentExpHtml = document.getElementById("expNumber");

killMonster.addEventListener("click", () => {
  let dropAmount = Math.floor(Math.random() * monsterValue);
  let expAmount = Math.floor(Math.random() * monsterExpValue);
  cashCount += dropAmount;
  currentExp += expAmount;
  cashTotalHtml.innerHTML = cashCount + " gold";
  currentExpHtml.innerHTML = "Current Exp: " + currentExp;
  console.log("drop Amount", dropAmount);
  console.log("current Exp", currentExp);
});

if (module.hot) {
  module.hot.accept();
}
