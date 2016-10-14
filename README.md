# node-typhoon

 > **node-typhoon** is a javascript for nodejs library to help you get the typhoon information,including real-time or historical information.

 [![npm](https://img.shields.io/npm/v/node-typhoon.svg?style=flat-square)](https://www.npmjs.com/package/node-typhoon) [![npm](https://img.shields.io/npm/dt/node-typhoon.svg?style=flat-square)](https://www.npmjs.com/package/node-typhoon) [![npm](https://img.shields.io/npm/l/node-typhoon.svg?style=flat-square)](https://www.npmjs.com/package/node-typhoon)

## Installation

> **npm install node-typhoon**


## Import It

```js
var Typhoon = require('node-typhoon');

//or

import Typhoon from 'node-typhoon';
```


## Usage & API

- **typhoonActivity()**  : get typhoon real-time information
- **typhoonList(year)**  : get typhoon informations during the period of specify **year**

*see sample/sample.js*

```js

var Typhoon=require('node-typhoon');

// get real-time information
Typhoon.typhoonActivity().then(data=>{
	console.log(data);
	/**
	 [
          {
            "enname": "SARIKA",
            "lat": "13.90",
            "lng": "126.70",
            "movedirection": "西北西",
            "movespeed": "10",
            "name": "莎莉嘉",
            "power": "10",
            "pressure": "985",
            "radius10": null,
            "radius7": "200",
            "speed": "25",
            "strong": "强热带风暴",
            "tfid": "201621",
            "time": "2016-10-14 11:00:00",
            "timeformate": "10月14日11时"
          }
        ]
	 */
}).catch(err=>{
	console.error(err)
});

// get historical information
Typhoon.typhoonList(2016).then(data=>{
	console.log(data);
	//list of 2016 typhoon information
}).catch(err=>{
	console.error(err)
});

```


## Test

> npm install
> 
> npm test


## License

MIT


