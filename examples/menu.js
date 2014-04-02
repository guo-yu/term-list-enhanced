var List = require('../index');
var menu = new List();

menu.adds()

menu.on('empty', function() {
  menu.stop();
});

menu.start()