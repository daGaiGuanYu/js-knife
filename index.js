// 一些函数的参数
const haha = {
  date: {
    link: ['-', ' ', ':']
  }
}

// 对上面那个参数对象的设置
function setHaha(whichOne, value){
  if(whichOne == 'dateLink')
    haha.date.link = value;
}

// 日期对象转化为 2019-7-30 19:18:00 的格式（needTime 为 false 或 undefined 时，只有年月日，没有时分秒）
// 连接符修改可以修改 haha.date.link 的值
Date.prototype.tostring = function(needTime){
  let [link1, link2, link3] = haha.date.link;
  let result = this.getFullYear() + link1 + (this.getMonth() + 1) + link1 + this.getDate();
  if(needTime)
    result += link2 + this.getHours() + link3 + this.getMinutes() + link3 + this.getSeconds();
  return result;
}

// 获取某月的天数
function getDaysByYearAndMonth(year, month){
  return new Date(year, month, 0).getDate();
}

// 可提前结束的 Array.forEach
Array.prototype.foreach = function(cb){
  let len = this.length;
  for(let i=0; i<len; i++)
    if(cb(this[i])) break;
}

// 忽略大小写的 String.indexOf
String.prototype.indexof = function(target){
  return this.toLowerCase().indexOf(target.toLowerCase());
}

// 是否包含子字符串
String.prototype.containQ = function(target){
  return this.indexOf(target) > -1;
}

// 是否包含子字符串（忽略大小写）
String.prototype.containq = function(target){
  return this.indexof(target) > -1;
}

module.exports = {
  setHaha,
  getDaysByYearAndMonth
}
