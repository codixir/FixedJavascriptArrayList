class ArrayList {
  constructor(size) {
    this.array = new Array(size);
    this.size = size;
    this.counter = 0;
  }

  add(val) {    
    if (this.counter < this.size) {
      this.array[this.counter] = val;
      this.counter++;  
    }       
  }

  get(index) {
    let value;

    try {
      value = this.array[index];
      if (!value) throw 'error';

    } catch(e) {      
      value = 'Index out of bounds'; 
    } 

    return value;
  }

  resize(size) {
    this.size = size;
    this.array = new Array(this.size);  
    this.counter = 0;
    return this.array;
  }

  pop() {
    this.counter = 0;
    this.size = this.size - 1;
    let newArray = new Array(this.size);

    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }

    this.array = newArray;
    return this.array;
  }
}

let list = new ArrayList(3);

for (let i = 0; i < 3; i++) {
  list.add(i);
}

list.pop();
list.pop();
list.pop();

console.log('test ', list)