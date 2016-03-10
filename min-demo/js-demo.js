
/**
 * [arr description]
 * Object.keys() 返回一个由给定对象的所有可枚举自身属性的属性名组成的数组
 * 
 * for..in 还会去遍历对象原型链上的可枚举的属性
 *
 * 输出的结果数组都是排序的
 * 
 * @type {Array}
 */
var arr = [1,2,3];

// console.log(Object.keys(arr));


var obj = { "b1" : "a", "b2" : "b2", 7: "c", 4: 'dd'};
console.log(Object.keys(obj)); // 弹出"0,1,2"



/**
 * 同理实现
 *
 * 区别： 不会顺序输出
 */

var obj = {
    a:1,
    b:2,
    c:3
}
function keys(obj){
    var a = [], i = 0;
    for(a[i++] in obj);
    return a ;
}
console.log(keys(obj));

/**
 * 正确实现
 */

 var DONT_ENUM =  "propertyIsEnumerable,isPrototypeOf,hasOwnProperty,toLocaleString,toString,valueOf,constructor".split(","),
    hasOwn = ({}).hasOwnProperty;
    for (var i in {
        toString: 1
    }){
        DONT_ENUM = false;
    }
 
    Object.keys = Object.keys || function(obj){//ecma262v5 15.2.3.14
        var result = [];
        for(var key in obj ) if(hasOwn.call(obj,key)){
            result.push(key)
        }
        if(DONT_ENUM && obj){
            for(var i = 0 ;key = DONT_ENUM[i++]; ){
                if(hasOwn.call(obj,key)){
                    result.push(key);
                }
            }
        }
        return result;
    };