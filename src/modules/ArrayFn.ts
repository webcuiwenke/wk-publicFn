/**
 * 深层数组遍历函数
 * @param {Array} arr 遍历的数组
 * @param {Function} logic 每层处理的逻辑
 * @param {string} childrenName 节点字段
 */
type Element = {
    [key: string]: any;
    children?: Element[];
};

export function deepArrErgodic(
    arr: Element[],
    logic: (element: Element) => void = () => { },
    childrenName: string = "children"
): void {
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (el[childrenName]) {
            if (el[childrenName]?.length === 0) {
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
 * 深层数组遍历函数
 * @param {Array} list 列表结构数据
 * @param {Function} targetId 目标节点id
 * @param {any} parentInfo 目标节点的父级信息
 */
type Item = {
    id: string | number;
    children?: Item[];
    // 其他属性的类型声明...
};

export function findParentInfo(
    list: Item[],
    targetId: string,
    parentInfo: Item[] = []
): Item[] | null {
    for (const item of list) {
        if (item.id === targetId) {
            return parentInfo;
        }
        if (item.children && item.children.length > 0) {
            const foundParentInfo = findParentInfo(
                item.children,
                targetId,
                [...parentInfo, item]
            );
            if (foundParentInfo) {
                return foundParentInfo;
            }
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
type NestedObject = {
    [key: string]: any;
};

export function findPropertyInArray(
    array: any[],
    property: string,
    value: any
): boolean {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "object" && array[i] !== null) {
            for (let key in array[i]) {
                if (key === property && array[i][key] === value) {
                    return true;
                }
                if (Array.isArray(array[i][key])) {
                    if (findPropertyInArray(array[i][key], property, value)) {
                        return true;
                    }
                } else if (typeof array[i][key] === "object" && array[i][key] !== null) {
                    if (findPropertyInArray([array[i][key]], property, value)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

