var randomVariable1 = Math.floor(Math.random()*6) + 1 ; 
var randomImage1 = "images/dice"+randomVariable1+".png" ;
document.querySelector(".img1").setAttribute("src",randomImage1);

var randomVariable2 = Math.floor(Math.random()*6) + 1 ; 
var randomImage2 = "images/dice"+randomVariable2+".png" ; 
document.querySelector(".img2").setAttribute("src",randomImage2);

if (randomVariable1 == randomVariable2)
document.querySelector("h1").innerHTML = "Draw!";
else if(randomVariable1 > randomVariable2)
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
else 
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";