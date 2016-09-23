#Angular Text Editable Directive
------

This repo consists of an angularJs directive which is used to edit the text.

## Install
#### Bower


```
bower install text-editable
```
Then add a `<script>` and `<link>` tag to your `index.html` file
```html
<script src="bower_components/text-editable-directive/script.js"></script>
<link rel="stylesheet" href="bower_components/text-editable-directive/css/custom.css">
```
#### Npm


```
npm install text-editable
```
Then add a `<script>` and `<link>` tag to your `index.html` file
```html
<script src="node_modules/text-editable/script.js"></script>
<link rel="stylesheet" href="node_modules/text-editable/css/custom.css">
```
## Inject Module Dependency
Inject `directive.editable` module
```javascript
var app = angular.module("myApp", ["directive.editable"]);
```
## Dependencies
1. [AngularJs library](https://angularjs.org/) 
2. [Twitter Boostrap](http://getbootstrap.com/)

## How to use

1. To use this directive add `editable` attribute to the element.

```html
<span editable text="label" id="name" save="save(editedText)" model="name" >{{name}}</span>
```

2. Add the required label to the text attribute, model attribute reflects the ng-model of angular. 
3. Use the save method in controller to call the back-end API to save text. In the `editedText` you will get the modified text which can be saved using backend API.
```javascript
$scope.save = function(editedText){
	// Backend Save API
    console.log(editedText);
}
```
## Demo
Demo [Plunkr](https://plnkr.co/VVZzAnKWAbTV8D81C89P)