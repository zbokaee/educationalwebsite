//loading
setTimeout(function(){ document.body.classList.add("loaded"); }, 2000);

// Navbar
const hamBurger=document.querySelector(".hamBurger");
    const nav=document.querySelector("nav");

      hamBurger.addEventListener("click",function() {
         nav.classList.toggle("open");
         hamBurger.classList.toggle("close")
      })

//game
table = document.getElementById("table");
// table.border = "1px"
// table.innerHTML += '<tr><td id="column1"><strong>Turn</strong></td><td id="column1"><strong>Your Guess</strong></td><td id="column2"><strong>Correct Position</strong></td><td id="column2"><strong>Correct Number</strong></td></tr>'
var db = false;
var trys = 15;
document.getElementById("Counter").innerHTML = "you have " + trys + " tries left.";
var randomNum =Math.floor(Math.random()*(99999-10000)+10000);
console.log(randomNum);


document.getElementById("try").onclick = function tryFunction() {
    if (trys == 0 || db) { return }
    var randomArr = randomNum.toString().split("");
    var notInPlace = 0;
    var match = 0;
    var guess = document.getElementById("gusee").value;
    var guseArr = guess.split("");
    if (guseArr.length != 5 || isNaN(guess) || guess< 10000) {
        alert("Please Enter a valid, 5 Digit Number");
        return;
    }
    else {
        if(trys === 15){
            table.border = "1px"
            table.innerHTML += '<tr><td id="column1"><strong>Turn</strong></td><td id="column1"><strong>Your Guess</strong></td><td id="column2"><strong>Correct Position</strong></td><td id="column2"><strong>Correct Number</strong></td></tr>'
        }
        trys--;
        for (i = 0; i < guseArr.length; i++) {
            if (randomArr[i] == guseArr[i]) {
                match++;
                randomArr[i] = null;
            }
        }
        for (i = 0; i < guseArr.length; i++) {
            if (randomArr[i] != null) {
                for (j = 0; j < guseArr.length; j++) {
                    if (guseArr[j] == randomArr[i]) {
                        notInPlace++;
                        randomArr[i] = null;


                    }
                }
            }
        }
     }

    document.getElementById("Counter").innerHTML = "you have " + trys + " tries left.";
    var para = document.createElement("p");

    // Table
    table.innerHTML += "<tr><td>" + trys + 
    "</td><td>" + guess +"</td><td>" + match + 
    "</td><td>" + notInPlace+ "</td></tr>"
    //End Of Table

    document.getElementById("logs").appendChild(para);
    if (match == 5) {
        var win = document.createElement("h1");
        var winLog = document.createTextNode("Congratuation!! You Win!!!");
        win.appendChild(winLog);
        document.getElementById("logs").appendChild(win);
        db = true;
        return
    }
    if (trys == 0) {
        var lose = document.createElement("h1");
        var loseLog = document.createTextNode("Game Over! You Lost... the number was " + randomNum + ".");
        lose.appendChild(loseLog);
        document.getElementById("logs").appendChild(lose);
    }
}

