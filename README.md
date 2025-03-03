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
// fresh.config.ts
import { lunchbox } from "lunchbox/core";

export default defineConfig({
  plugins: [lunchbox()],
});
```

```ts
// tailwind.config.ts
import { type Config } from "tailwindcss";
import { tailwind_lunchbox } from "lunchbox/plugin";
import typographyPlugin from "npm:/@tailwindcss/typography@0.5.15";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [
    tailwind_lunchbox,
    typographyPlugin,
  ],
} satisfies Config;
```
