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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * The URL of the font source files .
 */
const url =
  "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function returns a plugin for the Deno compiler that preloads the Libre Calson, Figtree, and
 * FiraCode fonts.
 *
 * @returns {Plugin}
 *  A plugin for the Deno compiler that preloads the Figtree and FiraCode fonts.
 */
export function lunchbox() {
  return {
    name: "lunchbox-fonts",
    render: (ctx: {
      render: () => {
        htmlText: string;
        requiresHydration: boolean;
      };
    }) => {
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
}
