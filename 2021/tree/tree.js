class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7)

console.log(JSON.stringify(root, null, 2));

module.exports = root;


//         1
//     2       3
// 4       5 6       7

// const bt = {
//   val: 1,
//   left: {
//       val: 2,
//       left: {
//           val: 4,
//           left: null,
//           right: null
//       },
//       right: {
//           val: 5,
//           left: null,
//           right: null
//       }
//   },
//   right: {
//       val: 3,
//       left: {
//           val: 6,
//           left: null,
//           right: null
//       },
//       right: {
//           val: 7,
//           left: null,
//           right: null
//       }
//   }

// }
