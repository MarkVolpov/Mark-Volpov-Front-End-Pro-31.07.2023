// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3 

// sum(5) = 8

// sum(20) = 28




function sum() { 
   
  let number = 0;
  
  return function(a){

      number += a
      return number

  }
}

let sumTotal = sum();


console.log(sumTotal(3))
console.log(sumTotal(5))
console.log(sumTotal(20))