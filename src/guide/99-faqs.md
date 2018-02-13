---
title: Frequently asked questions
---

### Why is it called Bublé?

Blame [Keith Cirkel](https://twitter.com/Keithamus/status/715557928074416130).


### Will you support feature x?

It depends. If support for a feature can be added in a way that doesn't bloat out the code that Bublé compiles, then yes, possibly. [Raise an issue](https://github.com/Rich-Harris/buble/issues) and we'll discuss it.


### Can we have plugins?

No. The whole point of Bublé is that it's quick to install and takes no mental effort to set up. Plugins would ruin that.


### How is Bublé so fast?

The traditional approach to code transformation is to generate an [abstract syntax tree](astexplorer.net) (or AST), analyse it, manipulate it, and then generate code from it. Bublé only does the first two parts. Rather than manipulating the AST, Bublé manipulates the source code directly, using the AST as a guide – so there's no costly code generation step at the end. As a bonus, your formatting and code style are left untouched.

This is made possible by [magic-string](https://github.com/Rich-Harris/magic-string).

Forgoing the flexibility of a plugin system also makes it easy for Bublé to be fast.


### What does Babel do better than Bublé?

Lots of things. It's mature, battle-tested and has a huge and enthusiastic community around it. It's extremely flexible, allowing you to create your own transformation plugins, and has a large ecosystem of existing plugins.

If you need the additional power and flexibility, or don't share Bublé's [opinions](#what-is-buble) about spec compliance, you should continue to use Babel.
