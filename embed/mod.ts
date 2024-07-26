import { Embeds } from "jsr:@smallweb/embed@0.0.14/embed";

const embeds = new Embeds({
  "about.html": () => import("./_about.html.ts"),
  "assets/OpenSans-Bold-7d7a1a8e.woff": () => import("./assets/_OpenSans-Bold-7d7a1a8e.woff.ts"),
  "assets/OpenSans-Bold-c1c24d6a.woff2": () => import("./assets/_OpenSans-Bold-c1c24d6a.woff2.ts"),
  "assets/OpenSans-BoldItalic-0b52996a.woff2": () => import("./assets/_OpenSans-BoldItalic-0b52996a.woff2.ts"),
  "assets/OpenSans-BoldItalic-5dfe822d.woff": () => import("./assets/_OpenSans-BoldItalic-5dfe822d.woff.ts"),
  "assets/OpenSans-ExtraBold-147410cf.woff": () => import("./assets/_OpenSans-ExtraBold-147410cf.woff.ts"),
  "assets/OpenSans-ExtraBold-8f047879.woff2": () => import("./assets/_OpenSans-ExtraBold-8f047879.woff2.ts"),
  "assets/OpenSans-ExtraBoldItalic-9056c854.woff2": () => import("./assets/_OpenSans-ExtraBoldItalic-9056c854.woff2.ts"),
  "assets/OpenSans-ExtraBoldItalic-cf904ee5.woff": () => import("./assets/_OpenSans-ExtraBoldItalic-cf904ee5.woff.ts"),
  "assets/OpenSans-Italic-0163d9a5.woff2": () => import("./assets/_OpenSans-Italic-0163d9a5.woff2.ts"),
  "assets/OpenSans-Italic-175b3625.woff": () => import("./assets/_OpenSans-Italic-175b3625.woff.ts"),
  "assets/OpenSans-Light-1e2ca939.woff2": () => import("./assets/_OpenSans-Light-1e2ca939.woff2.ts"),
  "assets/OpenSans-Light-8560f9bd.woff": () => import("./assets/_OpenSans-Light-8560f9bd.woff.ts"),
  "assets/OpenSans-LightItalic-889a4041.woff": () => import("./assets/_OpenSans-LightItalic-889a4041.woff.ts"),
  "assets/OpenSans-LightItalic-99cb6525.woff2": () => import("./assets/_OpenSans-LightItalic-99cb6525.woff2.ts"),
  "assets/OpenSans-Regular-2e158738.woff": () => import("./assets/_OpenSans-Regular-2e158738.woff.ts"),
  "assets/OpenSans-Regular-4c1c2e95.woff2": () => import("./assets/_OpenSans-Regular-4c1c2e95.woff2.ts"),
  "assets/OpenSans-Semibold-b0390aa3.woff": () => import("./assets/_OpenSans-Semibold-b0390aa3.woff.ts"),
  "assets/OpenSans-Semibold-df0231af.woff2": () => import("./assets/_OpenSans-Semibold-df0231af.woff2.ts"),
  "assets/OpenSans-SemiboldItalic-0c084b2e.woff2": () => import("./assets/_OpenSans-SemiboldItalic-0c084b2e.woff2.ts"),
  "assets/OpenSans-SemiboldItalic-4d838c5a.woff": () => import("./assets/_OpenSans-SemiboldItalic-4d838c5a.woff.ts"),
  "assets/download-b61c4849.svg": () => import("./assets/_download-b61c4849.svg.ts"),
  "assets/format-7074aa2f.svg": () => import("./assets/_format-7074aa2f.svg.ts"),
  "assets/hack-bold-ab630a4e.woff": () => import("./assets/_hack-bold-ab630a4e.woff.ts"),
  "assets/hack-bold-d5a65190.woff2": () => import("./assets/_hack-bold-d5a65190.woff2.ts"),
  "assets/hack-bolditalic-d2ebacee.woff": () => import("./assets/_hack-bolditalic-d2ebacee.woff.ts"),
  "assets/hack-bolditalic-d6e798ca.woff2": () => import("./assets/_hack-bolditalic-d6e798ca.woff2.ts"),
  "assets/hack-italic-7783d8ec.woff": () => import("./assets/_hack-italic-7783d8ec.woff.ts"),
  "assets/hack-italic-97f12dc5.woff2": () => import("./assets/_hack-italic-97f12dc5.woff2.ts"),
  "assets/hack-regular-0b0ef254.woff2": () => import("./assets/_hack-regular-0b0ef254.woff2.ts"),
  "assets/hack-regular-89c2afca.woff": () => import("./assets/_hack-regular-89c2afca.woff.ts"),
  "assets/index-72e1b5bc.js": () => import("./assets/_index-72e1b5bc.js.ts"),
  "assets/index-b9243596.css": () => import("./assets/_index-b9243596.css.ts"),
  "assets/settings-8b0b175a.svg": () => import("./assets/_settings-8b0b175a.svg.ts"),
  "assets/update-98491067.svg": () => import("./assets/_update-98491067.svg.ts"),
  "favicon-linux.png": () => import("./_favicon-linux.png.ts"),
  "favicon.ico": () => import("./_favicon.ico.ts"),
  "guesslang.min.js": () => import("./_guesslang.min.js.ts"),
  "icon.ico": () => import("./_icon.ico.ts"),
  "icon.png": () => import("./_icon.png.ts"),
  "iconTemplate.png": () => import("./_iconTemplate.png.ts"),
  "iconTemplate@2x.png": () => import("./_iconTemplate@2x.png.ts"),
  "index.html": () => import("./_index.html.ts"),
  "langdetect-worker.js": () => import("./_langdetect-worker.js.ts"),
  "math.js": () => import("./_math.js.ts"),
  "site.webmanifest": () => import("./_site.webmanifest.ts"),
});

export default embeds;