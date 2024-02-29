/**
 * 深层数组遍历函数
 * @param {*} arr 遍历的数组
 * @param {*} logic 每层处理的逻辑
 * @param {*} childrenName 节点字段
 */
export function deepArrErgodic(
  arr:Array<any>,
  logic = () => {},
  childrenName = "children"
) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el[childrenName]) {
      if (el[childrenName]?.length == 0) {
        logic(el);
      }
      if (el[childrenName]?.length > 0) {
        logic(el);
        deepArrErgodic(el[childrenName], logic, childrenName);
      }
    } else {
      logic(el);
    }
  }
}
/**
 * 根据id查找父级信息
 * @params list:列表结构数据
 * @params targetId:目标节点id
 * @return parentInfo:目标节点的父级信息
 */
export function findParentInfo(list: any, targetId: string, parentInfo = []) {
  for (let item of list) {
    if (item.id === targetId) {
      return parentInfo;
    }
    if (item.children && item.children.length > 0) {
      const foundParentInfo = findParentInfo(item.children, targetId, [
        ...parentInfo,
        item,
      ]);
      if (foundParentInfo) {
        return foundParentInfo;
      }
    }
  }
  return null;
}
/**
 * 对象循环赋值的方法  前置条件是你要赋值的字段是一致的
 * @params frontObj:要赋值的对象
 * @params afterObj:赋值后的对象
 */
export function objCopy(frontObj: any, afterObj: any) {
  for (let key in frontObj) {
    for (let el in afterObj) {
      if (key == el) {
        afterObj[el] = frontObj[key];
      }
    }
  }
  return afterObj;
}
/**
 * 用于判断是否需要跳转到最后一级菜单
 * @param {*} item
 * @returns
 */
export function lastMeun(item: any) {
  if (!item.children) return item;
  if (item.children.length == 0) return item;
  for (let i = 0; i < item.children.length; i++) {
    const el = item.children[i];
    if (!el.children) return el;
    if (el.children.length > 0) {
      lastMeun(el.children);
    } else {
      return el;
    }
  }
}
/**
 * 存储cookie
 * @param {string} name 字段名
 * @param {string} value 值
 * @param {number} days 日期
 */
export function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
/**
 * 获取cookie
 * @param {string} name 名称
 * @returns
 */
export function getCookie(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");

  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }

  return null;
}
/**
 * 查询多维数组中是否存在某个属性并且值相等
 * @param {array} array 数组
 * @param {string} property 查询的属性
 * @param {*} value 查询的值
 * @returns
 */
export function findPropertyInArray(array, property, value) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "object") {
      for (let key in array[i]) {
        if (key === property && array[i][key] === value) {
          return true;
        }
        if (Array.isArray(array[i][key])) {
          if (findPropertyInArray(array[i][key], property, value)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}
