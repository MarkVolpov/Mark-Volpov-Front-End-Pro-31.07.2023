class myArray {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  getArrNames() {
    return this.name + ' ' + this.lastname;
  }
}

class SuperArray extends myArray {
  constructor(...elements) {
    super(...elements);
  }

 
  sum() {
    let sumNum = 0;
    for (const el of Object.values(this)) {
      if (typeof el !== 'number') {
        throw new TypeError(`${el} is not a number`);
      } else {
        sumNum += el;
      }
    }
    return sumNum;
  }
}

const names = new SuperArray("Jane", "Bob");
console.log(names.getArrNames()); // "Jane Bob"

const nums = new SuperArray(23, 51, 5);
const total = nums.sum();
console.log(total);