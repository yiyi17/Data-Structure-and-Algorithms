// 大文件的行数读取
const fs = require('fs')
const path = require('path')

async function countFileLines(filePath) {

  return new Promise((resolve) => {
    let lineCount = 0
    fs.createReadStream(path.join(__dirname, './index.js'))
    .on('data', buff => {
      let idx = -1
      lineCount--
      do{
e        idx = buff.indexOf(10, idx+1)
        lineCount++
      } while(idx !== -1)
    }).on('end', () => {
      resolve(lineCount)
    })
  })
 
}

(async () => {
  const res = await countFileLines()
  console.log(res);
})()