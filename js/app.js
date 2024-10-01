let numSelected = null;
let tileSelected = null;

let selected = 0;
let erased = 0;

let vNumber = [];
let hNumber = [];
let allNumber = [];
let answerArray = [];
let answerNumber;

setGameBoard();
answerTable();
calculateColumns();

console.log(allNumber);
console.log(hNumber);

function setGameBoard() {
    //TODO Fill the grid with random numbers 1-9
    for (let i = 0; i < 9; i++) {
        allNumber[i] = [];
        for (let j = 0; j < 9; j++) {
            let num = Math.floor(Math.random() * 9) + 1;
            allNumber[i].push(num);
            let number = document.createElement("div");
            number.id = i;
            number.innerText = allNumber[i][j];
            number.classList.add("number");
            document.getElementById("board").appendChild(number);

        }
        
    }
}

function answerTable() {
    //TODO Create the hidden answer table from the original board
    
    //! Create answer array for rows. Use as a base for column based answers

    for (let i = 0; i < 9; i++) {
        let hSum = 0;
        answerArray[i] = [];
        for (let j = 0; j < 9; j++) {
                    //*RNG select 0 or 1
        let numSelect = Math.floor(Math.random() * 2);
        //*Determine if number is valid or will be left out

        if(numSelect == 0){
            hSum += 0;
            answerArray[i].push(0);
        }else{
            answerNumber = allNumber[i][j];
            answerArray[i].push(answerNumber);
            hSum += answerNumber; 
            }
        }
        hNumber[i] = hSum
        let hAnswerNumLeft = document.createElement("div");
        let hAnswerNum = document.createElement("div");
        hAnswerNumLeft.id = i;
        hAnswerNum.id = i;
        hAnswerNumLeft.innerText = hSum;
        hAnswerNum.innerText = hSum;
        hAnswerNumLeft.classList.add("hAnswerNumLeft");
        hAnswerNum.classList.add("hAnswerNum");
        document.getElementById("vDigitsLeft").appendChild(hAnswerNumLeft);
        document.getElementById("vDigits").appendChild(hAnswerNum);
    }
}

function calculateColumns(){
    console.log(answerArray);
    //vSum = answerArray 0,0 + 1,0 + 2,0 etc.
    //debugger
    for (let i = 0; i < answerArray.length; i++) {
        let vSum = 0;
        answerNumber = 0;
        for (let j = 0; j < answerArray.length; j++) {
            answerNumber = answerArray[j][i];
            vSum += answerNumber;    
        }
        vNumber[i] = vSum;
        let vAnswerNum = document.createElement("div");
        let vAnswerNumBottom = document.createElement("div");
        vAnswerNum.id = i;
        vAnswerNumBottom.id = i;
        vAnswerNum.innerText = vSum;
        vAnswerNumBottom.innerText = vSum;
        vAnswerNum.classList.add("vAnswerNum");
        vAnswerNumBottom.classList.add("vAnswerNumBottom");
        document.getElementById("hDigits").appendChild(vAnswerNum);
        document.getElementById("hDigitsBottom").appendChild(vAnswerNumBottom);


    }

}

