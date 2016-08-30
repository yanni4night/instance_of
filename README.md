# instance_of
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Build with Panto][build-image]][build-url]

ECMAScript instanceof operator.

## usage

```js
import instance_of from 'instance_of'

instance_of({}, Object)// true
instance_of(Object, Function)// true
instance_of(1, Number)// true
```

## build

```sh
panto
```

[npm-url]: https://npmjs.org/package/instance_of
[downloads-image]: http://img.shields.io/npm/dm/instance_of.svg
[npm-image]: http://img.shields.io/npm/v/instance_of.svg
[travis-url]: https://travis-ci.org/yanni4night/instance_of
[travis-image]: http://img.shields.io/travis/yanni4night/instance_of.svg
[david-dm-dev-url]:https://david-dm.org/yanni4night/instance_of#type=dev
[david-dm-dev-image]:https://david-dm.org/yanni4night/instance_of/dev-status.svg
[build-image]:https://img.shields.io/badge/build%20with-panto-yellowgreen.svg
[build-url]:http://pantojs.xyz/