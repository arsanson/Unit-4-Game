
//sets global variables
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let userScore = 0;
let wins = 0;
let losses = 0;
let randInt = RandIntGenerator(19, 120)


//makes random number

function RandIntGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//sets hidden values for each button

function setBtnVal() {
    document.getElementById("btn1").setAttribute("value", RandIntGenerator(1, 12));
    document.getElementById("btn2").setAttribute("value", RandIntGenerator(1, 12));
    document.getElementById("btn3").setAttribute("value", RandIntGenerator(1, 12));
    document.getElementById("btn4").setAttribute("value", RandIntGenerator(1, 12));
    btn1 = document.getElementById("btn1").getAttribute("value")
    btn2 = document.getElementById("btn2").getAttribute("value")
    btn3 = document.getElementById("btn3").getAttribute("value")
    btn4 = document.getElementById("btn4").getAttribute("value")
    console.log(btn1 + " " + btn2 + " " + btn3 + " " + btn4)
}

// gets your new score from buttons above
$("button").on("click", function () {
    if (this.id == "btn1") {
        console.log("button 1's value is " + btn1)
        userScore += parseInt(btn1)
    }
    if (this.id == "btn2") {
        console.log("button 2's value is " + btn2)
        userScore += parseInt(btn2)
    }
    if (this.id == "btn3") {
        console.log("button 3's value is " + btn3)
        userScore += parseInt(btn3)
    }
    if (this.id == "btn4") {
        console.log("button 4's value is " + btn4)
        userScore += parseInt(btn4)
    }
    $("#userScore").text(userScore)
    gameResult(userScore)
})

//sees if you're score is equal to or higher than random number

function gameResult(score) {
    if (score === randInt) {
        wins++
        if (confirm("You won! Play again?")) {
            newGame()
        } else { alert("Your Wins: " + wins + " and losses: " + losses) }
    } else if (score > randInt) {
        losses++
        if (confirm("You lost :() Play again?")) {
            newGame()
        }

    }
}

$("#RandInt").text(randInt)
document.getElementById('wins').innerHTML="wins: "+document.getElementById("wins").getAttribute("value")
document.getElementById('losses').innerHTML="losses: "+document.getElementById("losses").getAttribute("value")
setBtnVal()

function newGame() {
    randInt = RandIntGenerator(19, 120)
    $("#RandInt").text(randInt)
    setBtnVal()
    userScore = 0
    $("#userScore").text(userScore)
    document.getElementById("wins").setAttribute("value", wins);
    document.getElementById("losses").setAttribute("value", losses);
    document.getElementById('wins').innerHTML="wins: "+document.getElementById("wins").getAttribute("value")
    document.getElementById('losses').innerHTML="losses: "+document.getElementById("losses").getAttribute("value")
}

//functions I don't think I need, but didn't want to delete...


function updateHTML(elmId, value) {
    var elem = document.getElementById(elmId);
    if (typeof elem !== 'undefined' && elem !== null) {
        elem.innerHTML = value;
    }
    console.log(document.getElementById("#btn1").getAttribute("value"))
}
//updateHTML("#btn1",10)


