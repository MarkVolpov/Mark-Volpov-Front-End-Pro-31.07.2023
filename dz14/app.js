// ------ ДЗ 14. Студент
class Student {
  constructor(name, surname, birthyear, grades) {
    this.name = name;
    this.surname = surname;
    this.birthyear = birthyear;
    this.visit = new Array(25).fill(undefined);
    this.grades = grades;
  }

  studentYear() {
    return new Date().getFullYear() - this.birthyear;
  }
  present() {
    this.visit.pop(undefined);
    this.visit.unshift(true);
  }
  absent() {
    this.visit.pop(undefined);
    this.visit.unshift(false);
  }
  summary() {
    let sum = 0;
    let visitCounter = 0;

    for (let j = 0; j < this.grades.length; j++) {
      sum += this.grades[j];
    }
    for (const vis of this.visit) {
      if (vis) {
        visitCounter++;
      }
      console.log(vis);
    }

    let visitRatio = visitCounter / this.visit.length;
    let midValue = sum / this.grades.length;

    if (sum > 90 && visitRatio > 0.9) {
      alert("Молодець!");
    } else if (sum < 90 || visitRatio < 0.9) {
      alert("Добре, але можна краще");
    } else {
      alert("Редиска!");
    }
    return [midValue, visitRatio];
  }
}

let person = new Student(
  "John",
  "Doe",
  1988,
  [100, 100, 60, 60, 100, 70, 80, 90, 90, 90]
);
let person2 = new Student("Alex", "Blue", 1999, [90, 95, 100, 75, 87, 90, 100]);
let person3 = new Student(
  "Andrew",
  "White",
  1999,
  [100, 100, 100, 55, 89, 89, 100]
);

console.log(
  person.absent(),
  person.absent(),
  person.absent(),
  person.absent(),
  person.visit,
  person.summary()
);
console.log(
  person2.present(),
  person2.absent(),
  person2.absent(),
  person2.present(),
  person2.visit,
  person2.summary()
);
console.log(
  person3.absent(),
  person3.present(),
  person3.present(),
  person3.absent(),
  person3.visit,
  person3.summary()
);
