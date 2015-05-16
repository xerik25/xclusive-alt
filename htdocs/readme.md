#ScriptPro Client-side Development Guide

After checking out the repository, run `npm install && bower install` from the htdocs folder.

Running `grunt` will start up a development server on port 9000.  If you need to copy scripts, css, and images to the scriptpro.com/src directory run `grunt ektron`.

##Code Styleguide
Javascript component logic is written using the loose-augmentation module pattern, and is in the `htdocs/src/javascript/features` directory and uses the `App.Features` namespace.  Shared helper functions are in `App.Helpers` and do not follow a particular design pattern.  `App.Services` contains any http service classes.  These are written using the constructor pattern and prototypal inheritance to allow extension of these classes.  The `App.Helpers.extend` function can be assigned as a static method to any class/constructor, takes two `Object`s as arguments, and returns a sub-class constructor.

Usage:

```
App.Helpers.extend(prototypeProperties::Object [,staticProperties::Object]);
```


```
function MyClass () {...}
MyClass.extend = App.Helpers.extend;

var MySubClass = MyClass.extend({
  prototypeProperty: '...'
},{
  staticProperty: '...'
});

var options = {one: 'one', two: 'two'};

mySubClass = new MySubClass(options);

console.log(mySubClass);

// > ChildClass {one: 'one', two: 'two', ...}

```

