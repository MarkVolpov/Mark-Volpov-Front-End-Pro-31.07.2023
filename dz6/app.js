// 1 Вивести на сторінку в один рядок через кому числа від 10 до 20.

let result = "";
for (let i = 10; i <= 20; i++) {
  result += i + ", ";
}
//console.log(result);

// 2 Вивести квадрати чисел від 10 до 20.
for(let i = 10; i <= 20; i++) {
  //console.log(i*i)
}

// 3 Вивести таблицю множення на 7.
for(let i = 1; i <= 10 ; i++) {
  //console.log(i*7)
}

// 4  Знайти суму всіх цілих чисел від 1 до 15.
let numAdd = 0

  for(let i = 0; i <= 15; i++) {
    numAdd += i
}
//console.log(numAdd)

// 5 Знайти добуток усіх цілих чисел від 15 до 35.
let numMult = 1;

  for(let i = 15; i <= 35; i++) {
    numMult *= i
}
//console.log(numMult)


// 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500. 
let numAddSum = 0
 
  for(let i = 1; i <= 500; i++) {
   numAddSum += i
}
//console.log(numAddSum/500);


// 7 Вивести суму лише парних чисел в діапазоні від 30 до 80.


let numAddPair = 0
 
  for(let i = 30; i <= 80; i += 2) {
   numAddPair += i
}

//console.log(numAddPair)


// 8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.
  for(let i = 102; i <= 200; i += 3) {
    //console.log(i)   
}

// 9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники. 
// 10 Визначити кількість його парних дільників.
// 11 Знайти суму його парних дільників.

let natNumber = 100;
let natNumbersDiv = [];


  for(let i = 1; i <= natNumber; i++) {
     if(natNumber % i === 0) {
      natNumbersDiv.push(i)
      //console.log(i)
  }
}

let natNumberQuantity = 0
let sumOfNatNumberDiv = 0 



for(const natNumberDiv of natNumbersDiv) {
  if(natNumberDiv % 2 === 0) {
    natNumberQuantity++;
    sumOfNatNumberDiv += natNumberDiv;
  }
}

//console.log("Quantity:", natNumberQuantity);
//console.log("Sum of even div. :", sumOfNatNumberDiv);

// 12 Надрукувати повну таблицю множення від 1 до 10.



for(let i = 1; i <= 10; i++) {
  for(let j = 1; j <= 10; j++ ) {

     //console.log(`${i} * ${j} = ${i*j}`)
    
    }
}