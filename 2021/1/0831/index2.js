// 判断多边形是否相交
function judgeMapIsSame(map1, map2) {
  let isSame = false;
  const { x1, y1, w1, h1 } = map1;
  const { x2, y2, w2, h2 } = map2;

  const map1Len = (h1 * h1) / 4 + (w1 * w1) / 4;
  const map2Len = (h2 * h2) / 4 + (w2 * w2) / 4;

  const lenX = x2 - x1;
  const lenY = y2 - y1;

  const len = lenX * lenX + lenY * lenY;

  if (len <= map1Len + map2Len) {
    isSame = false;
  } else {
    isSame = true;
  }
  return isSame;
}
