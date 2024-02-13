// var jsonpack = require('jsonpack/main'),
//     fs       = require('fs');

//     const jsonContent = fs.readFileSync(__dirname+'/unpacked.json','utf-8')
//     var packed = jsonpack.pack(jsonContent)
//     fs.writeFileSync('./src/1.text',packed,'utf-8')

//     const textContent = fs.readFileSync(__dirname+'/1.text','utf-8')
//     var json = jsonpack.unpack(textContent)
//     fs.writeFileSync('./src/1.json',JSON.stringify(json),'utf-8')

    // fs.readFile(__dirname+'/unpacked.json',function(err,jsonContent) {
    //     if(err) console.log(err);
    //     // console.log(jsonContent.toString());
        
    //     var packed = jsonpack.pack(jsonContent.toString())
    //     console.log(packed);
    //     fs.writeFile('./src/1.text',packed,err=>console.log(err))
        
    // })
    
    // fs.readFile(__dirname+'/1.text',(err, jsonContent) => {
    //     if(err) console.log(err);
    //     console.log(jsonContent.toString());
    //     var json = jsonpack.unpack(jsonContent.toString())
    //     console.log(json);
        
    //     fs.writeFile('./src/1.json',JSON.stringify(json),er=>console.log(err))
    // })

import './loadtest'
    var gzip = require('gzip-js'),
	options = {
		level: 1,
		name: 'hello-world.txt',
		timestamp: parseInt(Date.now() / 1000, 10)
	};

// out will be a JavaScript Array of bytes
var out = gzip.zip('Hello world', options);

console.log(out);
