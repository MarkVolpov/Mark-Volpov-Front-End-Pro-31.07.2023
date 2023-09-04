// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3 

// sum(5) = 8

// sum(20) = 28




// function sum() { 
   
//   let number = 0;
  
//   return function(a) {

//       number += a;
//       return number;

//   }
// }

const sum = (() => {
  let number = 0;
  return (n) => {
      number += n;
      return number;
  }
})();




console.log(sum(3))
console.log(sum(5))
console.log(sum(20))
