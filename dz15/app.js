class FirstArray {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  // getArrNames() {
  //   return this.name + " " + this.lastname;
  // }
}

const newArray = new FirstArray("Bob", "Jane");
console.log(newArray);

class SuperArray extends Array {
  constructor(...elements) {
    super(...elements);
  }

  sum() {
    let sumNum = 0;

    for (const el of this) {
      if (typeof el == 'number') {
        sumNum += el;
        
      } else {
        throw new TypeError(`${el} is not a number`);
      }
    }
    return sumNum;
  }
}

const names = new SuperArray("Jane", "Bob");
console.log(names);

const nums = new SuperArray(23, 51, 5);
const total = nums.sum();
console.log(total);