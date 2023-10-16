
// 将两个数组对象合并，如果key相同，后面的覆盖前面的, 
// id 是唯一值（如果数组中，没有就自己定义一个）

/**
 * Joins two arrays and removes duplicate items based on the "id" property.
 *
 * @param {Array} arr1 - The first array to be joined.
 * @param {Array} arr2 - The second array to be joined.
 * @return {Array} An array with the joined items, removing duplicates based on the "id" property.
 */
/**
 * Joins two arrays and removes duplicate items based on their "id" property.
 * If there are duplicate items, their properties are merged.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} - The merged array without duplicate items.
 */
function join(arr1, arr2) {
  // Concatenate the two arrays into a new array
  let arr = arr1.concat(arr2)
  
  // Create a map to store the items with their "id" as the key
  const map = new Map()

  // Iterate over each item in the array
  arr.forEach(item => {
    // If the map doesn't have the item's "id" as a key, add it to the map
    if (!map.has(item.id)) {
      map.set(item.id, item)
    } else {
      // If the map already has the item's "id" as a key, merge the properties of the existing item with the new item
      map.set(item.id, {
        ...map.get(item.id),
        ...item
      })
    }
  });

  // Return an array of the values in the map
  return [...map.values()]
}

const arr1 = [{
  id: 1,
  a: 2,
  b: 3,
  d:3
}]

const arr2 = [
  {
    id: 1,
    a: {b:1},
    d: 4
  }
]
console.log(join(arr1, arr2));


