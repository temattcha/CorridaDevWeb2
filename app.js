let cash = 100, car, carBetted, intervalId;

function onload () {
    let divCash = document.getElementById("cash");
    divCash.innerHTML = cash;
}

function cashref(){
    const inputBet = document.getElementById("bet")
    const divPot = document.getElementById("divPot")
    const budget = document.getElementById("budget")

    if (inputBet.value > cash) {
        alert('Saldo Insuficiente');
        inputBet.value = cash;
        return;
    } else if (inputBet.value < 0) {
        alert('Quer ganhar sem apostar?');
        inputBet.value = 0;
        return;
    }
  
    divPot.innerHTML = inputBet.value
    budget.innerHTML = cash - inputBet.value
}

function choosed(pilot){
    carBetted = pilot;

    const inputBet = document.getElementById("bet");
    cash = cash - inputBet.value;
}

function startRace() {

    let input = document.getElementById("bet");

    input.disabled = true;

    var piloto1 = document.getElementById("ver");
    var piloto2 = document.getElementById("per");
    var piloto3 = document.getElementById("lec");
    var piloto4 = document.getElementById("ham");
    var piloto5 = document.getElementById("alo");

    var leftMargin1 = 0;
    var leftMargin2 = 0;
    var leftMargin3 = 0;
    var leftMargin4 = 0;
    var leftMargin5 = 0;

    function advance() {

        const betValue = document.getElementById("bet").value;
        console.log(cash)
        console.log(betValue)
        console.log(betValue*2)

        leftMargin1 += Math.floor(Math.random() * 2);
        leftMargin2 += Math.floor(Math.random() * 2);
        leftMargin3 += Math.floor(Math.random() * 2);
        leftMargin4 += Math.floor(Math.random() * 2);
        leftMargin5 += Math.floor(Math.random() * 2);

        piloto1.style.margin = "0px 0px 0px " + leftMargin1 + "rem";
        piloto2.style.margin = "0px 0px 0px " + leftMargin2 + "rem";
        piloto3.style.margin = "0px 0px 0px " + leftMargin3 + "rem";
        piloto4.style.margin = "0px 0px 0px " + leftMargin4 + "rem";
        piloto5.style.margin = "0px 0px 0px " + leftMargin5 + "rem";

        if (leftMargin1 >= 95) {
            if (carBetted == 'pilot1') {
                cash = cash + (betValue*2);
                alert("Max ganhou, você agora tem:" + cash);
            } else {
                alert("Perdeu :(");
            }
            clearInterval(intervalId);
        }
        if (leftMargin2 >= 95) {
            if (carBetted == 'pilot1') {
                cash = cash + (betValue*2);
                alert("Perez ganhou, você agora tem:" + cash);
            } else {
                alert("Perdeu :(");
            }

            clearInterval(intervalId);
        }
        if (leftMargin3 >= 95) {
            if (carBetted == 'pilot1') {
                cash = cash + (betValue*2);
                alert("Leclerc ganhou, você agora tem:" + cash);
            } else {
                alert("Perdeu :(");
            }

            clearInterval(intervalId);
        }
        if (leftMargin4 >= 95) {
            if (carBetted == 'pilot1') {
                cash = cash + (betValue*2);
                alert("Hamilton ganhou, você agora tem:" + cash);
            } else {
                alert("Perdeu :(");
            }

            clearInterval(intervalId);
        }
        if (leftMargin5 >= 95) {
            if (carBetted == 'pilot1') {
                cash = cash + (betValue*2);
                alert("Alonso ganhou, você agora tem:" + cash);
            } else {
                alert("Perdeu :(");
            }

            clearInterval(intervalId);
        }
    }

    intervalId = setInterval(advance, 50);
};

function resetRace() {
    clearInterval(intervalId);

    var piloto1 = document.getElementById("ver");
    var piloto2 = document.getElementById("per");
    var piloto3 = document.getElementById("lec");
    var piloto4 = document.getElementById("ham");
    var piloto5 = document.getElementById("alo");

    piloto1.style.margin = "0px 0px 0px 0px";
    piloto2.style.margin = "0px 0px 0px 0px";
    piloto3.style.margin = "0px 0px 0px 0px";
    piloto4.style.margin = "0px 0px 0px 0px";
    piloto5.style.margin = "0px 0px 0px 0px";
};
