// 1~N的整数按照字典序打印。

// eg:N=12,打印

// 1,10,11,12,2,3,4... ...8,9

function sortByItem(arr) {
	// let len = arr.length
	// for(let i = 0; i < len; i++) {
	// 	for(let j = i; j < len; j++) {
	// 		const maxLength = Math.max(arr[i].length,arr[j].length)
	// 		const first = arr[i].padEnd(maxLength,0)
	// 		const second = arr[j].padEnd(maxLength, 0)
	// 		if(first > second) {
	// 			[arr[i], arr[j]] = [arr[j], arr[i]]
	// 		}
	// 	}
	// }
  arr.sort((a, b) => {
    const maxLength = Math.max(a.length, b.length)
    const first = a.padEnd(maxLength, 0)
    const second = b.padEnd(maxLength, 0)
    return first - second
  })
	return arr.join(',')
}

const str = sortByItem(['12', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '1'])

console.log(str);
