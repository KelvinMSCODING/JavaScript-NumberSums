let tileSelected = null;

let vNumber = [];
let hNumber = [];
let allNumber = [];
let answerArray = [];
let answerNumber;
let selector = "";
let boardSelection;
let selectionToggle = document.querySelector("#slideToggle");
let errorNum = 0;
let errorCounter = document.querySelector("#errorCount")

selectionToggle.addEventListener("click", checkSelection);

//debugger
setGameBoard();
answerTable();
calculateColumns();
checkSelection();
console.log(answerArray);



function setGameBoard() {
    //TODO Fill the grid with random numbers 1-9
    for (let i = 0; i < 9; i++) {
        allNumber[i] = [];
        for (let j = 0; j < 9; j++) {
            let num = Math.floor(Math.random() * 9) + 1;
            allNumber[i].push(num);
            let number = document.createElement("div");
            number.id = i.toString() + "-" + j.toString();
            number.innerText = allNumber[i][j];
            number.addEventListener("click", selectNumber)
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
            if(hSum == 0 && j == 8){
                break;
            }else{
                answerNumber = allNumber[i][j];
                answerArray[i].push(answerNumber);
                hSum += answerNumber; 
                }
            }
        }
            hNumber[i] = hSum
            let hAnswerNumLeft = document.createElement("div");
            let hAnswerNum = document.createElement("div");
            hAnswerNumLeft.id = i.toString();
            hAnswerNum.id = i.toString();
            hAnswerNumLeft.innerText = hSum;
            hAnswerNum.innerText = hSum;
            hAnswerNumLeft.classList.add("hAnswerNumLeft");
            hAnswerNum.classList.add("hAnswerNum");
            document.getElementById("vDigitsLeft").appendChild(hAnswerNumLeft);
            document.getElementById("vDigits").appendChild(hAnswerNum);
    }
}

function calculateColumns(){

    //vSum = answerArray 0,0 + 1,0 + 2,0 etc.

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
        vAnswerNum.id = i.toString();
        vAnswerNumBottom.id = i.toString();
        vAnswerNum.innerText = vSum;
        vAnswerNumBottom.innerText = vSum;
        vAnswerNum.classList.add("vAnswerNum");
        vAnswerNumBottom.classList.add("vAnswerNumBottom");
        document.getElementById("hDigits").appendChild(vAnswerNum);
        document.getElementById("hDigitsBottom").appendChild(vAnswerNumBottom);
    }

}

//Check toggle status
function checkSelection(){
    if(selectionToggle.checked){
        selector = "select"

    }else{
        selector = "erase"
    }
}

function selectNumber(){

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    debugger

    if (answerArray[r][c] != 0 && selector == "select"){
        tileSelected = this;
        tileSelected.classList.add("number-selected");
    }
    if (answerArray[r][c] == 0 && selector == "erase"){
        tileSelected = this;
        tileSelected.classList.add("number-erased");
    }

    if (answerArray[r][c] == 0 && selector == "select"){
        tileSelected = this;
        tileSelected.classList.add("number-error");
        errorNum++;
        errorCounter.innerText = errorNum;
    }
    if (answerArray[r][c] != 0 && selector == "erase"){
        tileSelected = this;
        tileSelected.classList.add("number-error2");
        errorNum++;
        errorCounter.innerText = errorNum;
    }


}
