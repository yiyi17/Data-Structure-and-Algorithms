function load(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(url.toUpperCase()), Math.random() * 1000);
  });
}
async function batchLoad(urls, concurrent) {
  let startIndex = 0;
  let result = [];
  let count = 0;
  const len = urls.length;
  async function batchFetch(num) {
    const endIndex = startIndex + (num || concurrent);
    for (let i = startIndex; i < endIndex; i++) {
      startIndex++;
      if (!urls[i]) continue;
      const res = await load(urls[i]);
      count++;
      result[i] = res;
      if (i < len) {
        await batchFetch(1);
      }

      if (count === len) {
        return result;
      }
    }
  }
  const res = await batchFetch();

  return new Promise((resolve) => {
    resolve(res);
  });
}
batchLoad(["a", "b", "c", "d", "e"], 2).then((data) => {
  console.log(data);
});
