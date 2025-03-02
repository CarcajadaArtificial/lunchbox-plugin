//   _                _    _               ___ _           _
//  | |  _  _ _ _  __| |_ | |__  _____ __ | _ \ |_  _ __ _(_)_ _
//  | |_| || | ' \/ _| ' \| '_ \/ _ \ \ / |  _/ | || / _` | | ' \
//  |____\_,_|_||_\__|_||_|_.__/\___/_\_\ |_| |_|\_,_\__, |_|_||_|
//                                                   |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This is a no-dependency module that contains a plugin for the Deno Fresh framework that preloads
 * the Libre Calson, Figtree, and FiraCode fonts.
 *
 * @module lunchbox-plugin
 */
import plugin from "npm:/tailwindcss@3.4.1/plugin.js";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * The URL of the font source files .
 */
const url =
  "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts";

// =====================================================================================================
/**
 * This function returns a plugin for the Deno compiler that preloads the Libre Calson, Figtree, and
 * FiraCode fonts.
 */
export const fresh_lunchbox = {
  name: "lunchbox-fonts",
  render: (ctx: {
    render: () => {
      htmlText: string;
      requiresHydration: boolean;
    };
  }): {
    links: {
      href: string;
      as?: string;
      type?: string;
      crossorigin?: string;
      rel?: string;
    }[];
  } => {
    ctx.render();
    return {
      links: [
        // Preload Figtree fonts
        {
          href: url + "/Figtree/Figtree-700.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          href: url + "/Figtree/Figtree-Italic.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          href: url + "/Figtree/Figtree-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },

        // Preload FiraCode fonts
        {
          href: url + "/FiraCode/FiraCode-Bold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          href: url + "/FiraCode/FiraCode-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },

        // Preload Libre Caslon Text fonts
        {
          href: url + "/LibreCaslonText/Libre-Caslon-Text-700.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          href: url + "/LibreCaslonText/Libre-Caslon-Text-Italic.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          href: url + "/LibreCaslonText/Libre-Caslon-Text-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },

        // Load the fonts.css for font definitions
        {
          rel: "stylesheet",
          href: url + "/fonts.css",
        },
      ],
    };
  },
};

// =====================================================================================================
/**
 * This plugin extends tailwind creating design tokens, these, seen through the Atomic Design
 * framework, are analouge to sub-atomic particles. The `font-family`, `colors`, and `screens` are the
 * three main categories of design tokens. They replace tailwind's original values to vaoid confusion,
 * conflicts, and to limit the design to a standard, accesible, but opinionated theme.
 *
 * ### `font-family`
 *
 * Requires the `jsr:@lunchbox/plugin` package installed for the intended fonts, but has good
 * system fonts as fallback. Font family names avoided semantic names (e.g. "serif" or "sans-serif")
 * and actual font family names (e.g. "Fira Code" or "Figtree") as much as possible. With the exception
 * of the `mono` font family.
 *
 * - `base`: The base font family is also the default one. Typically it would affect the heavy majority
 *    of the text in the interface.
 * - `heading`: The font family for headings, these should have a different font and color from the base
 *    text to help readers undconciously distinguish between sections of the interface.
 * - `mono`: This is the only absolute font family value, it is used for web components that require
 *    monospaced fonts like code blocks, additionally it could be used for small accentuated text.
 *
 * ```html
 * <p class="font-base">This is the base font family.</p>
 * <h1 class="font-heading">This is the heading font family.</h1>
 * <code class="font-mono">This is the mono font family.</code>
 * ```
 *
 * ---
 *
 * ### `colors`
 *
 * The color selection consideres text-to-background contrast for accessibility. Color names are not absolute color names (e.g. "red" or "blue") nor are they semantic (e.g. "primary" or "secondary"). This allows for colors to have specific roles in the interface. The only "quasi-exception" to this is the `error` color, that due to human psychology should be a redish tone. Also, colors have a dark mode variant by prefixing the color with "-d", (e.g. `dark:bg-d-neutral`), dynamic color settings are already created at the @see clr particle, removing the need for two colors and the "dark:" prefix.
 *
 * - `neutral`: This is the default color for text, border, and outline. Things that use this color
 *    will have high contrast with a `page` and `panel` backgrounds. This is the darkest color in light
 *    mode and the lightest in dark mode.
 * - `page`: This is the page's default background color. It has a lower contrast value compared to the
 *    panel color.
 * - `panel`: This color has the highest contrast value against the neutral color. It is used to create
 *    delimited surfaces inside the page, (e.g. cards, dialogs, etc.).
 * - `brand`: This is a color that represents the site's identity or personality. The way Lunchbox
 *    solves the contrast issue is by having flexibility: There's the "true" brand color (`-brand`),
 *    this color will not change between light and dark mode, but there's also the low contrast (`-lc`)
 *    and high contrast(`-hc`) variants that allow variations of the brand color that adapt
 *    (`dark:bg-d-brand-lc` or `dark:text-d-brand-hc`) to exist.
 * - `error`:
 *
 * ```html
 * <div class="bg-neutral">This is the neutral background color.</div>
 * <div class="text-neutral">This is the neutral text color.</div>
 * <div class="border-neutral">This is the neutral border color.</div>
 * <div class="outline-neutral">This is the neutral outline color.</div>
 * ```
 *
 * ---
 *
 * ### `screens`
 *
 * Why only two breakpoints? That's all you'll ever need, seriously. I think this limitation produces
 * better and more consistent interfaces. It is thought mobile first, so the default screen is a small
 * screen. The screen names are "abstract sizes" for familiarity of developers using this library, but
 * are designed to be analogue of "things" in the real world, particularly things we interact with as
 * content consumption or interaction. Really it's up to the developer's imagination which item to use
 * as abstraction for screen sizes.
 *
 * - `md`: A "medium" screen (`40em-80em`) is analogue to a piece of paper, from a portrait A5 page to
 *    a landscape A4 page. These are common medium of content consumption and interaction because
 *    they're the most common sizes of paper we've read and written on for a long time.
 * - `lg`: A "large" screen (`80em+`) is analogue to a desk. A desk could have many setups depending on
 *    the activity to perform. For example, when reading a blog post (analogue to reading a piece of
 *    paper on a desk) an ergonomical setup would remove clutter from the desk so that one can read
 *    without distractions; this idea persists on the blog post, where large horizontal whitespaces
 *    help readers focus on the post's content.
 *
 * ```html
 * <div class="md:hidden">Small screen content.</div>
 * <div class="max-md:hidden lg:hidden">Medium screen content.</div>
 * <div class="max-lg:hidden">Large screen content.</div>
 * ```
 *
 * ---
 *
 * ### `spacing`
 *
 * When creating an interface one usually starts from a unit of measurement that functions as the base.
 * When doing something equivalent in the physical world, one does the same thing, but not only uses
 * multiplication values for spacing, but also fractionary values. It is generally useful to think
 * about fractions of a large unit instead of using a multiple of another unit (Thinking "half a meter"
 * is generally better than thinking "500 millimeters"). This setting gives shortcuts to these
 * fractions, it is easier to write `p-1/3` than `p-[0.3333333333em]`.
 *
 * ```html
 * <p class="p-1/3">This is a paragraph with a 1/3 padding.</p>
 * ```
 *
 * ---
 *
 * ### `gridTemplateColumns` and `gridColumn`
 *
 * @todo Implement nested grids.
 * @todo Implement 6 and 18 column grids for sm and lg screens.
 * @todo Rename grid column shortcuts.
 * @todo Finish documentation.
 *
 * ---
 *
 * ### `fontSize`
 *
 * These are shortcuts for font-size and line-height. These can be used individually but are already
 * included in the `<Text/>` component in the Lunchbox component library and in the tailwind
 * `typography` plugin.
 *
 * ```html
 * <p class="text-small">This is a small font size.</p>
 * <p class="text-base">This is a base font size.</p>
 * <p class="text-subhead">This is a subhead font size.</p>
 * <p class="text-head">This is a head font size.</p>
 * <p class="text-title">This is a title font size.</p>
 * <p class="text-display">This is a display font size.</p>
 * ```
 *
 * ---
 *
 * ### `typography`
 *
 * This settings are for the tailwind `typography` plugin. These can be used with the `prose` class and
 * the `<Markdown/>` lunchbox component.
 */
export const tailwind_lunchbox: ReturnType<typeof plugin> = plugin(
  function () {},
  {
    theme: {
      fontFamily: {
        mono: ["Fira Code", "ui-monospace", "monospace"],
        base: ["Figtree", "system-ui", "ui-sans-serif", "sans-serif"],
        heading: ["Libre Caslon Text", "ui-serif", "serif"],
      },
      colors: {
        neutral: "#3d3640",
        brand: {
          DEFAULT: "#c8d9db",
          lc: "#089969",
          hc: "#2b584e",
        },
        error: {
          lc: "#dbc4c5",
          hc: "#66050d",
        },
        page: "#eee6f2",
        panel: "#ffffff",
        d: {
          neutral: "#eee6f2",
          brand: {
            lc: "#344747",
            hc: "#7dc0af",
          },
          error: {
            lc: "#573c4d",
            hc: "#fa96c8",
          },
          page: "#3d3640",
          panel: "#241f26",
        },
      },
      screens: {
        md: "40em",
        lg: "80em",
      },
      extend: {
        spacing: {
          "1/8": "0.125em",
          "1/4": "0.25em",
          "3/8": "0.375em",
          "1/3": "0.3333333333em",
          "1/2": "0.5em",
          "5/8": "0.625em",
          "2/3": "0.6666666666em",
          "3/4": "0.75em",
          "7/8": "0.875em",
          "1/1": "1em",
          "3/2": "1.5em",
          "2/1": "2em",
          "3/1": "3em",
          "4/1": "4em",
          "15/1": "15em",
          "banner": "90dvh",
        },
        gridTemplateColumns: {
          md: "repeat(12, minmax(4.5rem, 4.5rem))",
          lg: "repeat(12, 1fr)",
        },
        gridColumn: {
          full: "span 12 / span 12",
          xl: "span 10 / span 10",
          lg: "span 8 / span 8",
          md: "span 6 / span 6",
          sm: "span 4 / span 4",
          xs: "span 2 / span 2",
          "h-full": "span 6 / span 6",
          "h-xl": "span 5 / span 5",
          "h-lg": "span 4 / span 4",
          "h-md": "span 3 / span 3",
          "h-sm": "span 2 / span 2",
          "h-xs": "span 1 / span 1",
        },
        fontSize: {
          small: ["0.64rem", "1.1rem"],
          base: ["1rem", "1.5rem"],
          subhead: ["1.5625rem", "3rem"],
          head: ["2.44140625rem", "3rem"],
          title: ["3.0517578125rem", "4.5rem"],
          display: ["3.8146972656rem", "4.5rem"],
        },
        typography: {
          DEFAULT: {
            css: {
              // neutral
              "--tw-prose-body": "#3d3640",
              "--tw-prose-lead": "#3d3640",
              "--tw-prose-links": "#3d3640",
              "--tw-prose-bold": "#3d3640",
              "--tw-prose-counters": "#3d3640",
              "--tw-prose-bullets": "#3d3640",
              "--tw-prose-quotes": "#3d3640",
              "--tw-prose-pre-code": "#3d3640",
              "--tw-prose-invert-body": "#eee6f2",
              "--tw-prose-invert-lead": "#eee6f2",
              "--tw-prose-invert-links": "#eee6f2",
              "--tw-prose-invert-bold": "#eee6f2",
              "--tw-prose-invert-counters": "#eee6f2",
              "--tw-prose-invert-bullets": "#eee6f2",
              "--tw-prose-invert-quotes": "#eee6f2",
              "--tw-prose-invert-pre-code": "#eee6f2",

              // neutral-25
              "--tw-prose-td-borders": "#3d36401a",
              "--tw-prose-invert-td-borders": "#eee6f21a",

              // brand-hc
              "--tw-prose-headings": "#2b584e",
              "--tw-prose-hr": "#2b584e",
              "--tw-prose-quote-borders": "#2b584e",
              "--tw-prose-captions": "#2b584e",
              "--tw-prose-invert-headings": "#7dc0af",
              "--tw-prose-invert-hr": "#7dc0af",
              "--tw-prose-invert-quote-borders": "#7dc0af",
              "--tw-prose-invert-captions": "#7dc0af",

              // brand-lc
              "--tw-prose-th-borders": "#c8d9db",
              "--tw-prose-invert-th-borders": "#344747",

              // panel-50
              "--tw-prose-pre-bg": "#ffffff80",
              "--tw-prose-invert-pre-bg": "#241f2680",
            },
          },
        },
      },
    },
  },
);
