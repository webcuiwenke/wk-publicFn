/**
* 对象循环赋值的方法  前置条件是你要赋值的字段是一致的
* @params frontObj:要赋值的对象
* @params afterObj:赋值后的对象
*/
export function objCopy(frontObj, afterObj) {
 for (let key in frontObj) {
   for (let el in afterObj) {
     if (key == el) {
       afterObj[el] = frontObj[key];
     }
   }
 }
 return afterObj;
}