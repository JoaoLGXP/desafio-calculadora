const inputNumber1 = document.getElementById("number1");
const inputNumber2 = document.getElementById("number2");
const inputResult = document.getElementById("result-box");

inputNumber1.addEventListener("keypress", handleKeyPress);
inputNumber2.addEventListener("keypress", handleKeyPress);

const btnPlus = document.getElementById("btn-plus");
btnPlus.addEventListener("click", handBtnPlusClick);

function handBtnPlusClick(event) {
    event.preventDefault();
    if(isNumber(inputNumber1.value) && isNumber(inputNumber2.value)){
    sum = (Number(inputNumber1.value) + Number(inputNumber2.value));
    inputResult.innerHTML = sum;
    inputNumber1.classList.remove('input-error');
    inputNumber2.classList.remove('input-error');
    }
    else if(!isNumber(inputNumber1.value) && !isNumber(inputNumber2.value)) {
        inputNumber1.classList.add('input-error');
        inputNumber2.classList.add('input-error');
        inputResult.innerHTML = sum;
    }
    else if(!isNumber(inputNumber1.value)) {
        inputNumber1.classList.add('input-error');
        inputResult.innerHTML = sum;
    }else if(!isNumber(inputNumber2.value)) {
        inputNumber2.classList.add('input-error');
        inputResult.innerHTML = sum;
    }
}

const btnTimes = document.getElementById("btn-times");
btnTimes.addEventListener("click", handleBtnTimesClick);

function handleBtnTimesClick(event) {
    event.preventDefault();
    if(isNumber(inputNumber1.value && inputNumber2.value)){
    result = inputNumber1.value * inputNumber2.value;
    inputResult.innerHTML = result;
    inputNumber1.classList.remove('input-error');
    inputNumber2.classList.remove('input-error');
    }
    else if(!isNumber(inputNumber1.value) && !isNumber(inputNumber2.value)) {
        inputNumber1.classList.add('input-error');
        inputNumber2.classList.add('input-error');
        inputResult.innerHTML = result;
    }
    else if(!isNumber(inputNumber1.value)) {
        inputNumber1.classList.add('input-error');
        inputResult.innerHTML = result;
    }else if(!isNumber(inputNumber2.value)) {
        inputNumber2.classList.add('input-error');
        inputResult.innerHTML = result;
    }
}

const btnClear = document.getElementById("btn-clear");
btnClear.addEventListener("click", handleBtnClearClick);

function handleBtnClearClick(event) {
    inputNumber1.value = ' ';
    inputNumber2.value = ' ';
    inputResult.innerHTML = 0;
    inputNumber1.classList.remove('input-error');
    inputNumber2.classList.remove('input-error');  
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
} 

function handleKeyPress(event) {
    let theEvent = event;
    let key = event.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}