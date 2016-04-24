---
title: Command line options
---

If you're targeting more modern environments, you may not need to transform everything – for example, current versions of Node.js and most modern browsers already support shorthand object properties and methods.

You can tell Bublé to skip unnecessary transformations by telling it which environments you're targeting:

```bash
echo "let obj = { x, y };" > input.js
buble input.js --target chrome:48,node:5,safari:9,edge:12 -o output.js
cat output.js
# -> "var obj = { x, y };"
```

In this example, all the target environments support shorthand object properties, but Safari doesn't support `let`.

You can get more granular with the `--yes` and `--no` options:

```bash
buble input.js --target chrome:50 --yes arrow,destructuring
```

Here, we're telling Bublé that we *do* want to transforms arrow functions and destructuring, even though they're supported in our target environment (Chrome 50).


### Preventing errors

By adding `--no modules` we're also ensuring that Bublé won't throw an error if it encounters `import` and `export` statements, which Chrome 50 doesn't support. This is useful if you're going to pass the resulting code to a module bundler, for example.


### List of transforms

The following can be used with `--yes` and `--no` (or with the `transforms` option, if you're using the [JavaScript API](#using-the-javascript-api)):

* `arrow`
* `classes`
* `collections`
* `computedProperty`
* `conciseMethodProperty`
* `constLoop`
* `dangerousForOf`
* `dangerousTaggedTemplateString`
* `defaultParameter`
* `destructuring`
* `forOf`
* `generator`
* `letConst`
* `modules`
* `numericLiteral`
* `parameterDestructuring`
* `reservedProperties`
* `spreadRest`
* `stickyRegExp`
* `templateString`
* `unicodeRegExp`
