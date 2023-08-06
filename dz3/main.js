/*--------------------- 1 TASK-------------------*/
const name = window.prompt("Type your name:");
const surname = window.prompt("Type your surname:");
const age = window.prompt("Type your age:");

alert(`Your name is: ${name},\n
Your second name is: ${surname},\n
and your age is: ${age}!`);


/*--------------------- 2 TASK-------------------*/

const number = window.prompt("Enter a five-digit number:");


if (number.length !== 5) {
    alert("Its more then 5. Try again")
}else{
    let numbers = number.split("").join(" ");
    alert("Your five-digit number is: " + numbers)
}
