
# array-filter

  Filter array or filterify function.

## Installation

  Install with [component](http://component.io):

    $ component install leafs/array-filter

## Usage

filter array:

```js
var filter = require('filter');
filter([1,2,3], function(val){
	return val % 2 === 0;
});
//[2]
```

filterify function:
```js
var filter = require('filter');
var pair = filter(function(val){
	return val % 2 === 0;
});

pair([1,2,3]);
//[2]
```

## License

  MIT
