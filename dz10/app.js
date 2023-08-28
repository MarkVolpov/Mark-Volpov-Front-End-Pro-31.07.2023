//1  Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let array = [54, "name", 65, -23, true];

    function arNumber(a) {

        let sum = 0;
        let count = 0;

        for(let i = 0; i < array.length; i++) {
            if(typeof (a[i]) === 'number') {
            sum += a[i];
            count++
        }
    }
    return sum / count
}

//console.log(arNumber(array))


//2  Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
    function doMath(x, operator, y) {
 
        if(typeof (x,y) === 'number') {
            switch(operator){
            case "*" :
            return x * y;
            break;
            case "/" :
            return x / y;
            break;
            case "*" :
            return x * y;
            break;
            case "-" :
            return x - y;
            break;
            case "%" :
            return x % y;
            break;
            case "^" :
            return x ** y;
            break;
            default:
            return "Type a valid operator"
    }
}else{
    return "Type valid numbers"
}
   
}

//console.log(doMath(3, "^", 5))

//3  Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
let userLengthOut = parseInt(prompt("Enter ur out length"));
let userLengthIn = parseInt(prompt("Enter ur in length"));
let userValues = prompt("Enter ur values");

let valuesArray = userValues.split(' ').map(value => {
    
    if (value === 'true') {
        return true;
    } else if (value === 'false') {
        return false;
    } else if (!isNaN(value)) {
        return parseFloat(value);
    } else {
        return value;
    }
})

    function userArray(lengthOut, lengthIn, values) {
        let userArrOut = [];
    
        for (let i = 0; i < lengthOut; i++) {
            let userArrIn = []
      
        for (let j = 0; j < lengthIn; j++) {
            userArrIn.push(values.shift());
        }
        
        userArrOut.push(userArrIn);
    }
    
    return userArrOut;
}

let result = userArray(userLengthOut, userLengthIn, valuesArray);
//console.log(result);



//4  Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
let str = "Hello world"
    
    function deleteArguments (str, argArray) {
    
   
        for(let i = 0; i < argArray.length; i++) {
       
        str = str.replaceAll(argArray[i],"");
           
    }
     
    return str;
} 

//console.log(deleteArguments(str, ["l", "d"]));
