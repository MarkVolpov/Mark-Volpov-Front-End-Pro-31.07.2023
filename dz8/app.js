// 1.Створити масив, довжину та елементи якого задає користувач.
let userArrayLength = parseInt(prompt("Type your array length: "));
let userArray = [];

// 2.Відсортувати масив за зростанням.
for (let i = 0; i < userArrayLength; i++) {
    var element = parseInt(prompt("Type your element of array's index " + (i + 1) + ":"));
    userArray.push(element);
}
userArray.sort(function(a, b) {
    return a - b;
});

// 4.У міру змін виводити вміст масиву на сторінку.
console.log("Sorted array:", userArray);

// 3.Видалити елементи з масиву з 2 по 4 (включно!).
userArray.splice(1, 3);
console.log("Array after deleted elements from 2 to 4:", userArray);