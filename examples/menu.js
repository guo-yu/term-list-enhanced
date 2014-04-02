var List = require('../index');
var menu = new List({
  labelKey: 'label'
});

menu.adds([
  'Welcome to Term List Enhanced',
  '==============================',
  'this line is focused by default', 
  {
    label: '+ : click me to add new line',
    add: true
  }, {
    label: '√ : click me to update lebel',
    update: true
  }
]);

menu.on('keypress', function(key, index) {
  if (key.name === 'return') {
    var item = menu.item(index);
    if (item.add) {
      return menu.append({
        label: '+++ a new line, click to remove me',
        remove: true
      });
    }
    if (item.update) {
      return menu.update(index, '| wooha !!')
    }
    if (item.remove) {
      return menu.remove(index);
    }
    menu.update(index, 'you\'ve choose the ' + (index + 1) + 'th');
  } else if (key.name === 'q') {
    return menu.exit();
  }
})

menu.on('empty', function() {
  menu.stop();
});

menu.start(2)