/*--------------------- 1 TASK-------------------*/
let line1 = window.prompt("Type your name:");
let line2 = window.prompt("Type your surname:");
let line3 = window.prompt("Type your age:");

document.write("Your name is " + line1, ", Your second name is " + line2, ", and your age is " + line3,"! ");


/*--------------------- 2 TASK-------------------*/

let number = window.prompt("Enter a five-digit number:");


if (number.length !== 5) {
    alert("Its more then 5. Try again")
}else{
    let numbers = number.split("").join(" ");
    document.write("Your five-digit number is: " + numbers)
}
