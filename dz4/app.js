const operator = prompt('Type your operator(add, sub, mult, div)')
const firstNumber = prompt('Type ur first number')
const secondNumber = prompt('Type ur second number')

let result

if (operator === 'add'){
   result = (firstNumber + secondNumber);
}else if(operator === 'sub'){
   result =  (firstNumber - secondNumber);
}else if(operator === 'mult'){
   result = (firstNumber * secondNumber);
}else if(operator === 'div'){
   result = (firstNumber / secondNumber);
}else {
   alert('Invalid operator');
}

if (isNaN(firstNumber) && isNaN(secondNumber)) {
   alert('Type a valid number');
} else {
   alert('Result: ' + result);
}
