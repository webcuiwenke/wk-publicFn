/**
 * 查询多维数组中是否存在某个属性并且值相等
 * @param {Object} frontObj 要赋值的对象
 * @param {Object} afterObj 赋值后的对象
 */
export function objCopy<T>(frontObj: Record<string, T>, afterObj: Record<string, T>): Record<string, T> {
    for (let key in frontObj) {
        for (let el in afterObj) {
            if (key === el) {
                afterObj[el] = frontObj[key];
            }
        }
    }
    return afterObj;
}