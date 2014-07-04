## term-list-enhanced ![npm](https://badge.fury.io/js/term-list-enhanced.png)

a enhancement module for term-list, supporting setting or clear labels

### Installation
```
$ [sudo] npm install term-list-enhanced
```

### Example

just pull this repo and run example:

```
$ git clone https://github.com/turingou/term-list-enhanced.git
$ cd term-list-enhanced
$ node examples/menu.js
```

````javascript
var term-list-enhanced = require('term-list-enhanced');

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
````

### API
check this file: `index.js`

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@Gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.3