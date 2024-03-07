



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

import {objCopy} from './mudules/objectFn'
import {deepArrErgodic, findParentInfo, lastMeun, findPropertyInArray} from './mudules/arrayFn'
export default{
  objCopy,
  deepArrErgodic,
  findParentInfo,
  lastMeun,
  setCookie,
  getCookie,
  findPropertyInArray
}