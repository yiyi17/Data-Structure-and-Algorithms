// prototype
function Person() {
  this.name = 'Jackson'
}
const p = new Person()

Person.prototype.name = "Bob"

console.log(Person.prototype, p.__proto__, p.prototype);

console.log(p.name); // Json
console.log(p.__proto__); 
