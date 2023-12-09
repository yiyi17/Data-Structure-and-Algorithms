let hasNew = false
const init = Symbol('init')
export class Person {
  constructor(props) {
    this[init]()
  }

  #a() {
    console.log('1');
  }
  [init]() {
        if(hasNew) {
            return
        }
        console.log(1111,hasNew);
        hasNew = true
    }
}

window.Person = Person
