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
/**
 * 根据id查找父级信息
 * @params list:列表结构数据
 * @params targetId:目标节点id
 * @return parentInfo:目标节点的父级信息
 */
export function findParentInfo(list, targetId, parentInfo = []) {
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
 * 深层数组遍历函数
 * @param {*} arr 遍历的数组
 * @param {*} logic 每层处理的逻辑
 * @param {*} childrenName 节点字段
 */
export function deepArrErgodic(
  arr,
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
 * 用于判断是否需要跳转到最后一级菜单
 * @param {*} item
 * @returns
 */
export function lastMeun(item) {
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