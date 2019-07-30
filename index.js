const haha = {
  date: {
    link: ['-', ' ', ':']
  }
}

function setHaha(whichOne, value){
  if(whichOne == 'dateLink')
    haha.date.link = value;  
}

Date.prototype.tostring = function(needTime){
  let [link1, link2, link3] = haha.date.link;
  let result = this.getFullYear() + link1 + (this.getMonth() + 1) + link1 + this.getDate();
  if(needTime)
    result += link2 + this.getHours() + link3 + this.getMinutes() + link3 + this.getSeconds();
  return result;
}

Array.prototype.foreach = function(cb){
  let len = this.length;
  for(let i=0; i<len; i++)
    if(cb(this[i])) break;
}

String.prototype.indexof = function(target){
  return this.toLowerCase().indexOf(target.toLowerCase());
}

String.prototype.containQ = function(target){
  return this.indexOf(target) > -1;
}

String.prototype.containq = function(target){
  return this.indexof(target) > -1;
}

module.exports = {
  setHaha
}
