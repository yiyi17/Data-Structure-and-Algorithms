const child_process = require('child_process')

/**
 * @description 转换音频文件
 */
function convertAudio(inputFile, outputFile) {
  // 利用 ffmpeg 来转换，需要安装一下（mac：brew install ffmpeg）
  const ffmpegCommand = `ffmpeg -i ${inputFile} ${outputFile}`

  const cp = child_process.exec(ffmpegCommand, (error, stdout, stderr) => {
    if(error) {
      console.log(error)
    }else {
      console.log('success');
    }
  })
}


// 文件地址
// const inputFile = 'xuehe.ncm'
const inputFile = '萨顶顶-问灵.mp3'
// 转出文件
const outputFile = '萨顶顶-问灵.wav'

convertAudio(inputFile, outputFile)



