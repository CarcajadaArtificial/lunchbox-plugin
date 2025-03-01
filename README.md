# Lunchbox Plugin

Core functions and utilities for the Lunchbox component library.

``Hello ( ´ ω ` )ノﾞ`` This package contains the plugin that runs the necessary
setup for using the [Lunchbox](https://github.com/CarcajadaArtificial/lunchbox)
component library in a Deno Fresh project.

## Installation

```bash
deno add jsr:@lunchbox/plugin
```

## Usage

```ts
import { lunchbox } from "lunchbox/core";

export default defineConfig({
  plugins: [lunchbox()],
});
```
