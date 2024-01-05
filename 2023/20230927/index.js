// 输入：restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 1, maxPrice = 50, maxDistance = 10
// 输出：[3,1,5]
// 解释：
// 这些餐馆为：
// 餐馆 1 [id=1, rating=4, veganFriendly=1, price=40, distance=10]
// 餐馆 2 [id=2, rating=8, veganFriendly=0, price=50, distance=5]
// 餐馆 3 [id=3, rating=8, veganFriendly=1, price=30, distance=4]
// 餐馆 4 [id=4, rating=10, veganFriendly=0, price=10, distance=3]
// 餐馆 5 [id=5, rating=1, veganFriendly=1, price=15, distance=1]
// 在按照 veganFriendly = 1, maxPrice = 50 和 maxDistance = 10 进行过滤后，我们得到了餐馆 3, 餐馆 1 和 餐馆 5（按评分从高到低排序）。

const filterRestaurant = (restaurants, veganFriendly, maxPrice, maxDistance) =>
  restaurants
    .filter(
      ([_, _rating, isVeganFriendly, price, distance]) =>
        isVeganFriendly === veganFriendly && price <= maxPrice && distance <= maxDistance,
    )
    .sort((a, b) => (b[1] === a[1] ? b[0] - a[0] : b[1] - a[1]))
    .map(([name]) => name);

const restaurants = [
    [1, 4, 1, 40, 10],
    [2, 8, 0, 50, 5],
    [3, 8, 1, 30, 4],
    [4, 10, 0, 10, 3],
    [5, 1, 1, 15, 1],
  ],
  veganFriendly = 0,
  maxPrice = 50,
  maxDistance = 10;

console.log(filterRestaurant(restaurants, veganFriendly, maxPrice, maxDistance));
