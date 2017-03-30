closure-compiler-cli
====

CLI wrapper for [google-closure-compiler](https://www.npmjs.com/package/google-closure-compiler)

[![npm version][npm-image]][npm-url]
![Node.js Version Support][node-version]
[![dependency status][deps-image]][deps-url]
![License][license]

## How to install

```console
$ npm i -g closure-compiler-cli
```

## Usage

```console
$ closure-compiler --some --options foo bar
```
equals to
```console
$ java -jar path/to/compiler.jar --some --options foo bar
```

## License

MIT License: Teppei Sato &lt;teppeis@gmail.com&gt;

[npm-image]: https://img.shields.io/npm/v/closure-compiler-cli.svg
[npm-url]: https://npmjs.org/package/closure-compiler-cli
[npm-downloads-image]: https://img.shields.io/npm/dm/closure-compiler-cli.svg
[travis-image]: https://img.shields.io/travis/teppeis/closure-compiler-cli/master.svg
[travis-url]: https://travis-ci.org/teppeis/closure-compiler-cli
[deps-image]: https://img.shields.io/david/teppeis/closure-compiler-cli.svg
[deps-url]: https://david-dm.org/teppeis/closure-compiler-cli
[node-version]: https://img.shields.io/badge/Node.js%20support-v4,v6,v7-brightgreen.svg
[coverage-image]: https://img.shields.io/coveralls/teppeis/closure-compiler-cli/master.svg
[coverage-url]: https://coveralls.io/github/teppeis/closure-compiler-cli?branch=master
[license]: https://img.shields.io/npm/l/closure-compiler-cli.svg
[appveyor-image]: https://ci.appveyor.com/api/projects/status/22nwyfaf5p0yw54j/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/teppeis/closure-compiler-cli/branch/master
