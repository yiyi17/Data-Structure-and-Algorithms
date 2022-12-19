const obj = {
  a: 1,
  b: new Date(),
  c: new RegExp(/a/),
  d: function () {},
  e: [1, 2, 3],
  f: {
    a:2
  }
};
obj.obj = obj;
// 方案1

// const obj1 = JSON.parse(JSON.stringify(obj))
// console.log(obj1);

// 方案2
function isObject (target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

function getType(target) {
  return Object.prototype.toString.call(target)
}

function getInit(target) {
  const Ctor = target.constructor
  return new Ctor()
}
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]'

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const funcTag = '[object Function]'

function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
      iteratee(array[index], index);
  }
  return array;
}

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag]

//TODO: Reg 的拷贝方法
function cloneReg(targe) {
  const reFlags = /\w*$/;
  const result = new targe.constructor(targe.source, reFlags.exec(targe));
  result.lastIndex = targe.lastIndex;
  return result;
}

//TODO:  Symbol 的拷贝方法
function cloneSymbol(targe) {
  return Object(Symbol.prototype.valueOf.call(targe));
}

//TODO: cloneFunction
function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
      console.log('普通函数');
      const param = paramReg.exec(funcString);
      const body = bodyReg.exec(funcString);
      if (body) {
          console.log('匹配到函数体：', body[0]);
          if (param) {
              const paramArr = param[0].split(',');
              console.log('匹配到参数：', paramArr);
              return new Function(...paramArr, body[0]);
          } else {
              return new Function(body[0]);
          }
      } else {
          return null;
      }
  } else {
      return eval(funcString);
  }
}

function cloneOtherType(targe, type) {
  //TODO: constructor
  const Ctor = targe.constructor;
  switch (type) {
      case boolTag:
      case numberTag:
      case stringTag:
      case errorTag:
      case dateTag:
          return new Ctor(targe);
      case regexpTag:
          return cloneReg(targe);
      case symbolTag:
          return cloneSymbol(targe);
      case funcTag:
        return cloneFunction(targe)
      default:
          return null;
  }
}

function clone(target, map = new WeakMap()) {
  if(!isObject(target)) return target

  const type = getType(target)
  let cloneTarget
  if(deepTag.includes(type)) {
    cloneTarget = getInit(target, type)
  }else {
    return cloneOtherType(target, type)
  }

  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);

  if(type === setTag) {
    target.forEach(val => {
      cloneTarget.add(clone(val, map))
    })
    return cloneTarget
  }

  // 克隆map
  if (type === mapTag) {
    target.forEach((value, key) => {
        cloneTarget.set(key, clone(value,map));
    });
    return cloneTarget;
  }

   // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;

}
const obj2 = clone(obj)

console.log(obj2);


// 方案3
function clone2(target, map = new WeakMap()) {

  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    
    if(map.get(target)) return map.get(target)
    map.set(target, cloneTarget)

    for (const key in target) {
          cloneTarget[key] = clone2(target[key], map);
      }
      return cloneTarget;
  } else {
      return target;
  }
};

const obj3 = clone2(obj)
console.log(obj3);
