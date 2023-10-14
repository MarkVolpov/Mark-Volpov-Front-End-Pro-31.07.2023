const tableForm = document.querySelector("#myTable");
const form = document.querySelector("#myForm");

function addToTable(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastname").value;
  const genderMale = document.getElementById("male").checked ? "Male" : "";
  const genderFemale = document.getElementById("female").checked
    ? "Female"
    : "";
  const city = document.getElementById("city").value;
  const languageEnglish = document.getElementById("english").checked
    ? "English"
    : "";
  const languageGermany = document.getElementById("germany").checked
    ? "Germany"
    : "";
  const languageUkrainian = document.getElementById("ukrainian").checked
    ? "Ukrainian"
    : "";
  const address = document.getElementById("address").value;

  const newRow = tableForm.insertRow();

  const nameCell = newRow.insertCell(0);
  const lastNameCell = newRow.insertCell(1);
  const genderCell = newRow.insertCell(2);
  const languagesCell = newRow.insertCell(3);
  const cityCell = newRow.insertCell(4);
  const addressCell = newRow.insertCell(5);

  nameCell.textContent = name;
  lastNameCell.textContent = lastName;
  genderCell.textContent = genderMale || genderFemale;
  languagesCell.textContent = [
    languageEnglish,
    languageGermany,
    languageUkrainian,
  ]
    .filter((lang) => lang)
    .join(", ");
  cityCell.textContent = city;
  addressCell.textContent = address;

  form.style.display = "none";
}

function showTable() {
  tableForm.style.visibility = "visible";
}

form.addEventListener("submit", addToTable);
form.addEventListener("submit", showTable);
