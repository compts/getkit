# GETKit
[![NPM version][npm-image]][npm-url] 

[Site](https://getkit.codehyouka.xyz/) |
[Docs](https://getkit.codehyouka.xyz/docs) |
## Use Cases

In a browser:
```html
<script src="structkit-full.iife.js"></script>
<script src="getkit-full.js"></script>
```
## Download

 * [Core build](https://raw.githubusercontent.com/compts/getkit/main/dist/web/getkit-full.js) ([~65KB](https://raw.githubusercontent.com/compts/getkit/main/dist/web/getkit-full.js))
 * [Dependency build](https://raw.githubusercontent.com/compts/structkit/main/dist/web/structkit-full.iife.js) 

Using npm:
```shell
$ npm i getkit
```
## Requirement
You need to install this in your machine to compile in your machine
```bash
npm install grasseum -g
```


## Example

In a browser
```html
gtk.Get('https://example.com/example.js')
```
keep in mind `gtk` is used as global library at html


CJS, ESM and TS use this code below
```bash
Get('https://example.com/example.js')

```
[npm-url]: https://www.npmjs.com/package/getkit
[npm-image]: https://img.shields.io/badge/getkit-0.5.0-brightgreen

