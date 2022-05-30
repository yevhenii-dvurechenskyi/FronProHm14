const number = document.querySelector(`.number`);
const buttonNumber = document.querySelector(`.calculatorButtons`);
let counterButtonMPMD = 0;
let counterButtonForNumber = 0;

buttonNumber.onclick = function(event){
    let numberTarget = event.target;
    //for number
    if(numberTarget.textContent === `0` || 
       numberTarget.textContent === `1` || 
       numberTarget.textContent === `2` || 
       numberTarget.textContent === `3` || 
       numberTarget.textContent === `4` || 
       numberTarget.textContent === `5` || 
       numberTarget.textContent === `6` || 
       numberTarget.textContent === `7` || 
       numberTarget.textContent === `8` || 
       numberTarget.textContent === `9`){
        if(counterButtonForNumber === 0){
            counterButtonMPMD = 0;
                number.textContent = number.textContent + numberTarget.textContent;
            }
       }
    //for action(plus, minus, multyply, divide)
    if(numberTarget.textContent === `+` || 
       numberTarget.textContent === `-` || 
       numberTarget.textContent === `*` || 
       numberTarget.textContent === `/`){
        if(counterButtonMPMD === 0){
            counterButtonMPMD++;
            counterButtonForNumber = 0;
            if(number.textContent !== ``){
                number.textContent = number.textContent + ` ` + numberTarget.textContent + ` `;
            }
            else{
                return ``;
            }
        }
    }
    //for C
    if(numberTarget.textContent === `C`){
        number.textContent = ``;
        counterButtonForNumber = 0;
    }   
    //for equal
    if(numberTarget.textContent === `=`){
            if(number.textContent.slice(-2,-1) === `+` || 
            number.textContent.slice(-2,-1) === `-` || 
            number.textContent.slice(-2,-1) === `*` || 
            number.textContent.slice(-2,-1) === `/`){
            number.textContent = number.textContent.substring(0,number.textContent.length-2);
            number.textContent = eval(number.textContent);
            counterButtonMPMD = 0;
            counterButtonForNumber = 1;
        }
        else{
            number.textContent = eval(number.textContent);
            counterButtonForNumber = 1;
        }
    }
}
