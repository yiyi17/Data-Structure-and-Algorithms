var foo = {};
var F = function() {};

Object.prototype.a = "value a";
Function.prototype.b = "value b";

console.log(F.a);
console.log(F.b);
