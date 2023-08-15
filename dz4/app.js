const operator = prompt('Type your operator(add, sub, mult, div)')  // ------------- >if operatorts are "+" "-" "*" "/" not add,sub,mult,div
const firstNumber = parseFloat(prompt('Type your first number'));
const secondNumber = parseFloat(prompt('Type your second number'));

let result = ''
let operatorValue = '' // ------------- >  we dont need this

if (operator === 'add'){    // ------------- > here "+" replaces "add"
   result = (firstNumber + secondNumber),
   operatorValue = ' + ';   // ------------- >  we dont need this
}else if(operator === 'sub'){    // ------------- > here "-" replaces "sub"
   result =  (firstNumber - secondNumber),
    operatorValue = ' - ';    // ------------- > we dont need this
}else if(operator === 'mult'){    // ------------- > here "*" replaces "mult"
   result = (firstNumber * secondNumber),
   operatorValue = ' * ';    // ------------- > we dont need this
}else if(operator === 'div'){    // ------------- > here "/" replaces "div"
   result = (firstNumber / secondNumber),
   operatorValue = ' / ';    // ------------- > we dont need this
}else {
   alert('Invalid operator');
}

if (isNaN(firstNumber) && isNaN(secondNumber)) {
   alert('Type a valid number');
} else {
   alert(`${firstNumber}${operatorValue}${secondNumber} = ${result}`); // here "operatorValue" we are changing to "operator" and alse we can add Math.round before "result" for both variants
}

