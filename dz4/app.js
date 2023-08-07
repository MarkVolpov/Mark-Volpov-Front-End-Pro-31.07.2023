const operator = prompt('Type your operator(add, sub, mult, div)')
const firstNumber = parseFloat(prompt('Type your first number'));
const secondNumber = parseFloat(prompt('Type your second number'));

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
