const regex_script_tags =
	/<!--[^]*?-->|<script((?:\s+[^=>'"\/]+=(?:"[^"]*"|'[^']*'|[^>\s])|\s+[^=>'"\/]+)*\s*)(?:\/>|>([\S\s]*?)<\/script>)/g;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <title>Document</title> -->

  <script src="abc" async="false"></script>
</head>
<body>
  
</body>
</html>
`
// [^]*? 表示匹配任意字符（包括换行符）
const str = html.match(/<!--[^]*?-->/)

console.log(str[0]);

// (?:) 是一个非捕获组
const str2 = html.match(/<script([^]+<\/script>)/)

console.log(str2[0]);






