var List = require('term-list');

var defaults = {};
defaults.marker = '\033[36m› \033[0m', // ♪
defaults.markerLength = 2;
defaults.labelMaxLength = 13;

module.exports = TermList;

function TermList(params) {
  this.configs = params || defaults;
  this.menu = new List(this.configs);
  this.items = [];
}

TermList.prototype.adds = function(items, max, labelKey) {
  
  if (!items) return false;
  if (items.length === 0) return false;
  
  var self = this;
  var menu = this.menu;
  var limit = max || 16;
  var label = labelKey || 'name';
  
  items.forEach(function(item, index) {
    if (index > limit) return false;
    if (typeof(item) === 'object') item.index = index;
    self.items.push(item);
    menu.add(index, typeof(item) === 'string' ? item : item[label]);
  });

  return this;
}

TermList.prototype.on = function(event, callback) {
  this.menu.on(event, callback);
  return this;
}

TermList.prototype.start = function(by) {
  this.menu.start();
  if (by) this.menu.select(by);
  return this;
}

TermList.prototype.stop = function() {
  if (this.menu) this.menu.stop();
  return false;
}

TermList.prototype.update = function(index, text, align) {
  
  var menu = this.menu;
  var item = this.items[index];
  
  if (!item) return false;
  
  var original = (typeof(item) === 'string') ? item : item.name;
  var str = text ? ' ' + text : '';
  
  menu.at(index).label = 
    align ?
    this.align(original, this.configs.labelMaxLength || 13) + str :
    original + str;
  menu.draw();

  return false;

}

TermList.prototype.clear = function(index) {
  return this.update(index);
}

TermList.prototype.align = function(str, maxlength) {

  if (!str) return false;
  if (str.length >= maxlength) return str;

  str += fill(maxlength - str.length, ' ');
  return s;

  function fill(length, blank) {
    var aligned = blank;
    for (var i = length - 1; i >= 0; i--) {
      aligned += blank;
    };
    return aligned;
  }

}