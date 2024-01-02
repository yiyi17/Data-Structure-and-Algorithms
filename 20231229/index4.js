// 大文件的行数读取
const fs = require('fs')
const path = require('path')

async function countFileLines(filePath) {

  return new Promise((resolve) => {
    let lineCount = 0
    const  stream= fs.createReadStream(path.join(__dirname, './index.js'),{
      highWaterMark: 1024
    })
    
    stream.on('data',async (buff) => {
      console.log('data');
    let idx = -1
      lineCount--
      do{
        idx = buff.indexOf(10, idx+1)
        lineCount++
        if(lineCount > 2) {
          // stream.pause()
        //   await new Promise((resolveS) => setTimeout(resolveS, 200))
          // stream.resume()

        }
      } while(idx !== -1)
    }).on('end', () => {
      resolve(lineCount)
    }).on('pause', buf => {
      console.log('pause',lineCount);
    }).on('close', buf => {
      console.log('close');
    })
 

  })


 
}

(async () => {
  const res = await countFileLines()
  console.log('resolve',res);
})()