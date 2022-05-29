const number = document.querySelector(`.number`);
let counterButtonMinusPlusDivideMultyply = 0;
let counterButtonForNumber = 0;

//ButtonsGetClass
const buttonC = document.querySelector(`.buttonReset`);
const buttonDivined = document.querySelector(`.buttonDivide`);
const buttonMultiply = document.querySelector(`.buttonMultiply`);
const buttonPlus = document.querySelector(`.buttonPlus`);
const buttonMinus = document.querySelector(`.buttonMinus`);
const buttonEqual = document.querySelector(`.buttonEqual`);

//Buttons get number
const buttonNomber1 = document.querySelector(`.buttonNomber1`);
const buttonNomber2 = document.querySelector(`.buttonNomber2`);
const buttonNomber3 = document.querySelector(`.buttonNomber3`);
const buttonNomber4 = document.querySelector(`.buttonNomber4`);
const buttonNomber5 = document.querySelector(`.buttonNomber5`);
const buttonNomber6 = document.querySelector(`.buttonNomber6`);
const buttonNomber7 = document.querySelector(`.buttonNomber7`);
const buttonNomber8 = document.querySelector(`.buttonNomber8`);
const buttonNomber9 = document.querySelector(`.buttonNomber9`);
const buttonNomber0 = document.querySelector(`.buttonNomber0`);

//Button special operations
buttonC.onclick = function(){
    number.textContent = ``;
}
buttonEqual.onclick = function(){
    if(number.textContent.slice(-2,-1) === `+` || 
    number.textContent.slice(-2,-1) === `-` || 
    number.textContent.slice(-2,-1) === `*` || 
    number.textContent.slice(-2,-1) === `/`){
        number.textContent = number.textContent.substring(0,number.textContent.length-2);
        number.textContent = eval(number.textContent);
        counterButtonMinusPlusDivideMultyply = 0;
        counterButtonForNumber = 1;
    }
    else{
        number.textContent = eval(number.textContent);
        counterButtonForNumber = 1;
    }

}

//Buttons actions
buttonDivined.onclick = function(){
    if(counterButtonMinusPlusDivideMultyply === 0){
        counterButtonMinusPlusDivideMultyply++;
        counterButtonForNumber = 0;
        if(number.textContent !== ``){
            number.textContent = number.textContent + ` ` + buttonDivined.textContent + ` `;
        }
        else{
            return ``;
        }
    }
}
buttonMultiply.onclick = function(){
    if(counterButtonMinusPlusDivideMultyply === 0){
        counterButtonMinusPlusDivideMultyply++;
        counterButtonForNumber = 0;
        if(number.textContent !== ``){
            number.textContent = number.textContent + ` `+ buttonMultiply.textContent + ` `;
        }
        else{
            return ``;
        }
    }
}
buttonPlus.onclick = function(){
    if(counterButtonMinusPlusDivideMultyply === 0){
        counterButtonMinusPlusDivideMultyply++;
        counterButtonForNumber = 0;
        if(number.textContent !== ``){
            number.textContent = number.textContent + ` ` + buttonPlus.textContent + ` `;
        }
        else{
            return ``;
        }
    }
}
buttonMinus.onclick = function(){
    if(counterButtonMinusPlusDivideMultyply === 0 || counterButtonMinusPlusDivideMultyply === 1){
        counterButtonMinusPlusDivideMultyply++;
        counterButtonForNumber = 0;
        number.textContent = number.textContent + ` ` + buttonMinus.textContent + ` `;
    }
}

//Buttons number
buttonNomber1.onclick = function(){
    if(counterButtonForNumber === 0){
        counterButtonMinusPlusDivideMultyply = 0;
        number.textContent = number.textContent + buttonNomber1.textContent;
    }
}
buttonNomber2.onclick = function(){
    if(counterButtonForNumber === 0){
        counterButtonMinusPlusDivideMultyply = 0;
        number.textContent = number.textContent + buttonNomber2.textContent;
    }
}
buttonNomber3.onclick = function(){
    if(counterButtonForNumber === 0){
        counterButtonMinusPlusDivideMultyply = 0;
        number.textContent = number.textContent + buttonNomber3.textContent;
    }
}
buttonNomber4.onclick = function(){
    if(counterButtonForNumber === 0){
        counterButtonMinusPlusDivideMultyply = 0;
        number.textContent = number.textContent + buttonNomber4.textContent;
    }
}
buttonNomber5.onclick = function(){
    if(counterButtonForNumber === 0){
        counterButtonMinusPlusDivideMultyply = 0;
        number.textContent = number.textContent + buttonNomber5.textContent;
    }
}
buttonNomber6.onclick = function(){
    if(counterButtonForNumber === 0){
        counterButtonMinusPlusDivideMultyply = 0;
        number.textContent = number.textContent + buttonNomber6.textContent;
    }
}
buttonNomber7.onclick = function(){
    if(counterButtonForNumber === 0){
        counterButtonMinusPlusDivideMultyply = 0;
        number.textContent = number.textContent + buttonNomber7.textContent;
    }
}
buttonNomber8.onclick = function(){
    if(counterButtonForNumber === 0){
        counterButtonMinusPlusDivideMultyply = 0;
        number.textContent = number.textContent + buttonNomber8.textContent;
    }
}
buttonNomber9.onclick = function(){
    if(counterButtonForNumber === 0){
        counterButtonMinusPlusDivideMultyply = 0;
        number.textContent = number.textContent + buttonNomber9.textContent;
    }
}
buttonNomber0.onclick = function(){
    if(counterButtonForNumber === 0){
        counterButtonMinusPlusDivideMultyply = 0;
        number.textContent = number.textContent + buttonNomber0.textContent;
    }
}







