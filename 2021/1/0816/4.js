function fn(array) {
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }

  //   map.forEach((value, key) => {
  //     console.log(value, key);
  //   });
  for (let [key, value] of map) {
    // console.log(key, value);
    if (value > array.length / 2) {
      return key;
    }
  }
}

console.log(fn([3, 2, 3]));
