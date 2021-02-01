const title = document.querySelector("h1");
const btnRed = document.querySelector(".button-red");
const btnSimul = document.querySelector(".button-simulation");
const btnReset = document.querySelector(".button-reset");
const changeResult = document.querySelector(".change-result");
const noChangeResult = document.querySelector(".no-change-result");
const changePer = document.querySelector(".change-percentage");
const noChangePer = document.querySelector(".no-change-percentage");
const simulNumberText = document.querySelector(".simulation-number");

let simulNumber = 0;
let changeWin = 0;
let noChangeWin = 0;

const updateUI = () => {
    simulNumberText.innerText = simulNumber;
    changeResult.innerText = changeWin;
    noChangeResult.innerText = noChangeWin;
    changePer.innerText = ((changeWin/simulNumber) * 100).toFixed(1) + '%';
    noChangePer.innerText = ((noChangeWin/simulNumber) * 100).toFixed(1) + '%';
}


const choose = (arr) => {
    const random = Math.random();
    if(random < 0.33){
        arr[0] = 1;
    } else if(random > 0.66){
        arr[1] = 1;
    } else {
        arr[2] = 1;
    }
};

const checkDecision = (options, decision) => {
    const random = Math.random();
    if(options[decision] == 1){
        return true;
    } else {
        return false;
    }
};

const simulate = () => {
    const options = [0,0,0];
    choose(options);

    const random = Math.random();
    let decision;
    if(random < 0.33){
        decision = 0;
    } else if(random > 0.66){
        decision = 1;
    } else {
        decision = 2;
    }

    const noChangeWon = checkDecision(options, decision);
    const changeWon = !noChangeWon;

    return changeWon;
};

const startSimulationHandler = () => {
    for(let i = 0; i < 25; i++){
        if(simulate()){
            changeWin++;
        } else {
            noChangeWin++;
        }
        simulNumber++;
        updateUI();
    }
};

btnRed.addEventListener("click", () => {
    title.classList.toggle("color");
});

btnReset.addEventListener("click", () => {
    simulNumber = 0;
    changeWin = 0;
    noChangeWin = 0;
    updateUI();
    changePer.innerText = "0%";
    noChangePer.innerText = "0%";
});

btnSimul.addEventListener("click", startSimulationHandler);