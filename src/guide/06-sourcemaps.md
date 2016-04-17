---
title: Sourcemaps
---

To generate separate sourcemap files – i.e. an `output.js.map` file to go along with `output.js` – use the `--sourcemap` or `-m` flag:

```bash
buble -i input.js -m -o output.js
```

To append the sourcemap as an inline data URI, use `-m inline`:

```bash
buble -i input.js -m inline -o output.js
```
