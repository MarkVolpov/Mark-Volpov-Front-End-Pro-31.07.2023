// 1.Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumOfPosNums = 0;
let posNumsQuantity = 0;

for(const num of array) {
    if(num > 0) {
        sumOfPosNums += num;
        posNumsQuantity++;
    }
}
console.log("Sum: " + sumOfPosNums, "posNums: " + posNumsQuantity)


// 2.Знайти мінімальний елемент масиву та його порядковий номер.
let arrayMin = Math.min(...array)
console.log(`Min number: ${arrayMin} , Index: ${array.indexOf(arrayMin)}`)

// 3.Знайти максимальний елемент масиву та його порядковий номер.
let arrayMax = Math.max(...array)
console.log(`Max number: ${arrayMax} , Index: ${array.indexOf(arrayMax)}`)

// 4.Визначити кількість негативних елементів.
let negatives = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negatives.push(array[i]);
    }
}
console.log(negatives);



// 5.Знайти кількість непарних позитивних елементів.

    
let nonPair = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 !== 0) {
            nonPair.push(array[i]);
        }
    }
    

console.log(nonPair);


// 6.Знайти кількість парних позитивних елементів.
let pairPos = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 == 0) {
        pairPos.push(array[i]);
    }
}

console.log(pairPos);

// 7.Знайти суму парних позитивних елементів.
let sumPairPos = [];
let result = "";

for(let i = 0; i < array.length; i++) {
    if(array[i] > 0 && array[i] % 2 == 0){
        sumPairPos.push(array[i]);
        result = sumPairPos.reduce((a, b) => a + b);
    }
}
console.log(result)

// 8.Знайти суму непарних позитивних елементів.
let sumNonPairPos = [];

// let result = "";
for(let i = 0; i < array.length; i++) {
    if(array[i] > 0 && array[i] % 2 !== 0){
        sumNonPairPos.push(array[i]);
        result = sumNonPairPos.reduce((a, b) => a + b);
    }
}
console.log(result)



// 9.Знайти добуток позитивних елементів.

let multPosNumbers = [];

for(let i = 0; i <= array.length; i++) {
    if(array[i] > 0) {
        multPosNumbers.push(array[i]);
        
    }
}
console.log(multPosNumbers.reduce((a, b) => a * b))


// 10.Знайти найбільший серед елементів масиву, ост альні обнулити11
let bigNum = Math.max(...array)

for(let i = 0; i < array.length; i++) {
    if(array[i] < bigNum) {
        array[i] = 0
    }
}

console.log(array);
