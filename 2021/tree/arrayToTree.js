function convert(data,parentId){
    let convertData =[];
    data.forEach((item,index)=>{
        if(item.parent_id===parentId){
            convertData.push(item);
            convertChild(data,item,item.id);
        }
    });
    return convertData;
}

function convertChild(arr,parentItem,parentId){
    parentItem.children = parentItem.children?parentItem.children:[];
    arr.forEach(item=>{
        if(item.parent_id===parentId){
            parentItem.children.push(item);
            convertChild(arr,item,item.id);
        }
    });
    return parentItem.children;
}

var data =  [
  {id:1,label:"中国",parent_id:0},
  {id:2,label:"北京",parent_id:1},
  {id:3,label:"上海",parent_id:1},
  {id:4,label:"广东",parent_id:1},
  {id:5,label:"广东",parent_id:4},
  {id:6,label:"深圳",parent_id:4},
];

let a=convert(data,0)
console.log(a);