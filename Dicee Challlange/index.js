var randomNumberA = Math.floor(Math.random() * 6 + 1)
var randomImageA = "image/dice" + randomNumberA + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageA)

var randomNumberB = Math.floor(Math.random() * 6 + 1)
var randomImageB = "image/dice" + randomNumberB + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageB)

if (randomNumberA === randomNumberB) {
  document.querySelector("h1").innerHTML = "Draw"
}

else if (randomNumberA > randomNumberB) {
  document.querySelector("h1").innerHTML = "PLAYER 1 wins"
}

else {
  document.querySelector("h1").innerHTML = "PLAYER 2 wins"
}
