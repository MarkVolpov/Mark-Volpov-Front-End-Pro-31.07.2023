const operator = prompt('Type your operator(add, sub, mult, div)')  
const firstNumber = parseFloat(prompt('Type your first number'));
const secondNumber = parseFloat(prompt('Type your second number'));

let result = ''
let operatorValue = '' 

if (operator === 'add') {    
   result = (firstNumber + secondNumber),
   operatorValue = ' + ';   
}else if(operator === 'sub') {   
   result =  (firstNumber - secondNumber),
    operatorValue = ' - ';   
}else if(operator === 'mult') {    
   result = (firstNumber * secondNumber),
   operatorValue = ' * ';    
}else if(operator === 'div') {    
   result = (firstNumber / secondNumber),
   operatorValue = ' / ';   
}else {
   alert('Invalid operator');
}

if (isNaN(firstNumber) && isNaN(secondNumber)) {
   alert('Type a valid number');
} else {
   alert(`${firstNumber}${operatorValue}${secondNumber} = ${result}`); // here "operatorValue" we are changing to "operator" and also we can add Math.round before "result" for both variants
}

