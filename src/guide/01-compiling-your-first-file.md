---
title: Compiling your first file
---

*Before we begin, you'll need to have [Node.js](https://nodejs.org) installed so that you can use [npm](https://npmjs.com). You'll also need to know how to access the [command line](https://www.codecademy.com/learn/learn-the-command-line) on your machine.*

The easiest way to use Bublé is via the Command Line Interface (or CLI). For now, we'll install it globally (later on we'll learn how to install it locally to your project so that your build process is portable, but don't worry about that yet). Type this into the command line:

```bash
npm install buble --global # or `npm i buble -g` for short
```

You can now run the `buble` command. Try it!

```bash
buble
```

Because no arguments were passed, Bublé prints usage instructions. This is the same as running `buble --help`, or `buble -h`.

Let's create a simple project:

```bash
mkdir my-buble-project
cd my-buble-project
```

Create a file containing some ES2015 code:

```bash
echo "const answer = () => 42;" > input.js
```

Run Bublé on it:

```bash
buble input.js
```

This will print the bundle straight to `stdout`:

```js
var answer = function () { return 42; };
```

You can save the output to a file like so:

```bash
buble input.js --output output.js # or buble input.js -o output.js
```

(You could also do `buble input.js > output.js`, but as we'll see later, this is less flexible if you're generating sourcemaps.)

Congratulations! You've compiled your first ES2015 file with Bublé.
