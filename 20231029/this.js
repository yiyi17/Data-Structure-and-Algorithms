var o = {
  a: 10,
  b: {
    a: 12,
    fn: function () {
      console.log(this.a);
      console.log(this);
    },
  },
};

var j = o.b.fn;
j(); // undefined window

o.b.fn.prototype.a = 20;
o.b.fn(); // 12, o.b

console.log(o.b.fn.prototype.a);
