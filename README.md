# pick-pairs

> Given an object, pick some random key-values and return it in a new object.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/pick-pairs/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/pick-pairs/master.svg?style=flat-square)](https://travis-ci.org/mock-end/pick-pairs)
[![coverage:?](https://img.shields.io/coveralls/mock-end/pick-pairs/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/pick-pairs)

## Install

```
$ npm install --save pick-pairs 
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/pick-pairs/blob/master/test/spec/index.js)

```js
var pickPairs = require('pick-pairs');

// API
// - pickPairs(object);
// - pickPairs(object, count);


pickPairs({ a: 1, b: 2, c: 3 });
// => {b: 2, c: 3}

pickPairs({ a: 1, b: 2, c: 3 }, 1);
// => {a: 1}

pickPairs({ a: 1, b: 2, c: 3 }, 0);
// => {}

pickPairs([1, 2, 3, 4, 5]);
// => {'0': 1, '3': 4}


// empty object or array
pickProps({});    // => {}
pickProps([]);    // => {}


// others
pickProps();      // => {}
pickProps(null);  // => {}
pickProps(1);     // => {}
pickProps('abc'); // => {}
```


## Related

- [pick-pair](https://github.com/mock-end/pick-pair) - Given an object, pick a random key-value and return it in a new object.
- [pick-prop](https://github.com/mock-end/pick-prop) - Given an object, pick a random property and return it.
- [pick-props](https://github.com/mock-end/pick-props) - Given an object, pick some random properties and return them in an array.
- [pick-key](https://github.com/mock-end/pick-key) - Given an object, pick a random key and return it.
- [pick-keys](https://github.com/mock-end/pick-keys) - Given an object, pick some random keys and return them in an array.
- [pick-item](https://github.com/mock-end/pick-item) - Given an array, pick a random element and return it.
- [pick-items](https://github.com/mock-end/pick-items) - Given an array, pick some random elements and return them in a new array. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/pick-pairs/issues/new).
