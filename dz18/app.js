let chart = document.getElementById("table");


let row, cell;
let counter = 1;

for (var i = 0; i < 10; i++) {
    row = chart.insertRow(i);
    
    for (var j = 0; j < 10; j++) {
        cell = row.insertCell(j);
        cell.innerHTML = counter;
        counter++;
    }
}