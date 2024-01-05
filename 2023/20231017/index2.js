// 数组位置替换

// 不改变顺序、空间复杂度不增加
function handleArr(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr[i] = undefined;
      arr.push(0);
    }
  }
  return arr.filter((item) => item !== undefined);
}

// 冒泡
function handleArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] === 0 && arr[j] !== 0) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        break;
      }
    }
  }
  return arr;
}

// 步长
function handleArr(arr) {
  let index = 0;
  let moveStep = 0;

  while (index + moveStep < arr.length - 1) {
    if (arr[index] === 0) {
      arr.splice(index, 1);
      arr.push(0);
      moveStep++;
    } else {
      index++;
    }
  }
  return arr;
}

// 计数法
function handleArr(arr) {
  let count = 0;
  for (let i = 0; i + count < arr.length; ) {
    count;
    arr;
    i;
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
      count++;
    } else {
      i++;
    }
  }
  return arr;
}

console.log(handleArr([3, 0, 0, 0, 12, 0, 1, 0]));

function sortZero(nums) {
  let index = 0;
  let moveStep = 0;

  while (index + moveStep < nums.length - 1) {
    const n = nums[index];
    if (n === 0) {
      nums.splice(index, 1);
      nums.push(0);
      moveStep++;
    } else {
      index++;
    }
  }

  return nums;
}

console.log(sortZero([1, 2, 3, 0, 5, 70, 0, 0, 123, 2, 0, 44, 0, 0]));
