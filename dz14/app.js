// ------ ДЗ 14. Студент
class Student {
  constructor(name, surname, birthyear, grades) {
    this.name = name;
    this.surname = surname;
    this.birthyear = birthyear;
    this.presence = new Array(25).fill(undefined);
    this.grades = grades;
  }

  getStudentAge() {
    return new Date().getFullYear() - this.birthyear;
  }
  present() {
    this.presence.pop();
    this.presence.unshift(true);
  }
  absent() {
    this.presence.pop();
    this.presence.unshift(false);
  }
  summary() {
    // let sum = 0;
    // let presenceCounter = 0;

    // for (let j = 0; j < this.grades.length; j++) {
    //   sum += this.grades[j];
    // }
    // for (const vis of this.presence) {
    //   if (vis) {
    //     presenceCounter++;
    //   }
    // }

    // let presenceRatio = presenceCounter / this.presence.length;
    // let midValue = sum / this.grades.length;

    const sum = this.grades.reduce((sum, grade) => sum + grade);
    const averageGrade = sum / this.grades.length;
    const presenceRatio = this.presence.filter(el => el === true).length / 25;
    
    if (sum > 90 && presenceRatio > 0.9) {
      alert(`Середня оцінка: ${averageGrade}, Відвідування: ${presenceRatio} Молодець!`);
    } else if (sum < 90 || presenceRatio < 0.9) {
      alert(`Середня оцінка: ${averageGrade}, Відвідування: ${presenceRatio}. Добре, але можна краще.`);
    } else {
      alert("Редиска!");
    }
    // return [`Середня оцінка: ${averageGrade}, Відвідування: ${presenceRatio}`];
  }
}

let person = new Student(
  "John",
  "Doe",
  1988,
  [100, 100, 60, 60, 100, 70, 80, 90, 90, 90]
);
let person2 = new Student(
  "Alex",
  "Blue", 
  1999, 
  [90, 95, 100, 75, 87, 90, 100]);
let person3 = new Student(
  "Andrew",
  "White",
  1999,
  [100, 100, 100, 55, 89, 89, 100]
);
  person.absent()
  person.absent()
  person.absent()
  person.absent()
  person.absent()
  person.absent()
  person.present()
  person.present()
  
  
  console.log(person.getStudentAge(), person.presence, person.summary());

  person2.absent()
  person2.absent()
  person2.present()
  console.log(person.getStudentAge(), person2.presence, person2.summary());

  person3.absent()
  person3.present()
  person3.present()
  person3.absent()
  console.log(person3.getStudentAge(), person3.presence, person3.summary());
