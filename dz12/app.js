// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// 1. Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// 2. Ступінь передається як другий аргумент у функцію pow(num, degree).



function powRec(num, degree) {

     if(degree == 1) {
          return num;
     }else{
          
          return num * powRec(num,degree - 1)
     }
     
}

console.log(powRec(3,3))


module.exports = powRec