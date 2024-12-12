import classNames from "classnames";

export const cn = classNames;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @todo [!] Complete documentation
 */
export function getDocumentation(relativeUrl: string, fileNames: string[]) {
  const doc: { [key: string]: string } = {};
  const decoder = new TextDecoder("utf-8");
  fileNames.forEach((name) => {
    doc[name] = decoder.decode(Deno.readFileSync(relativeUrl + name + ".md"));
  });
  return doc;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function uses an object that stores the default values for an interface `T`. It uses an input
 * object of type Partial<T> with new values to replace matching properties.
 *
 * @param {T} d
 *  Default values for non-optional values in interface `T`.
 *
 * @param {Partial<T>} i
 *  New values recieved with type `Partial<T>`
 *
 * @returns {T}
 *  An object of type `T` that contains the default `d` values and the new input `i` values.
 */
export function apDef<T extends object>(d: T, i: Partial<T>): T {
  if (Object.keys(d).length === 0) {
    throw new Error(
      "Error in applyDefaults(): If there are no default values, this function must be avoided.",
    );
  } else if (Object.keys(i).length === 0) {
    return d;
  }
  return { ...d, ...i };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export interface PluginRenderFunctionResult {
  htmlText: string;
  requiresHydration: boolean;
}

export type PluginRenderFunction = () => PluginRenderFunctionResult;

export interface PluginRenderContext {
  render: PluginRenderFunction;
}

export function lunchbox() {
  return {
    name: "lunchbox",
    render: (ctx: PluginRenderContext) => {
      ctx.render();
      return {
        links: [
          // Preload Figtree fonts
          {
            rel: "preload",
            href:
              "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts/Figtree/Figtree-700.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "anonymous",
          },
          {
            rel: "preload",
            href:
              "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts/Figtree/Figtree-Italic.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "anonymous",
          },
          {
            rel: "preload",
            href:
              "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts/Figtree/Figtree-Regular.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "anonymous",
          },
          // Preload FiraCode fonts
          {
            rel: "preload",
            href:
              "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts/FiraCode/FiraCode-Bold.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "anonymous",
          },
          {
            rel: "preload",
            href:
              "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts/FiraCode/FiraCode-Regular.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "anonymous",
          },
          // Preload Libre Caslon Text fonts
          {
            rel: "preload",
            href:
              "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts/LibreCaslonText/Libre-Caslon-Text-700.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "anonymous",
          },
          {
            rel: "preload",
            href:
              "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts/LibreCaslonText/Libre-Caslon-Text-Italic.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "anonymous",
          },
          {
            rel: "preload",
            href:
              "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts/LibreCaslonText/Libre-Caslon-Text-Regular.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "anonymous",
          },
          // Load the fonts.css for font definitions
          {
            rel: "stylesheet",
            href:
              "https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-core/fonts/fonts.css",
          },
        ],
      };
    },
  };
}
