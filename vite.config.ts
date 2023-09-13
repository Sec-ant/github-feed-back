import { defineConfig } from "vite";
import monkey, { cdn } from "vite-plugin-monkey";
import { name } from "./package.json";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/index.ts",
      build: {
        metaFileName: true,
      },
      userscript: {
        name: "GitHub Feed Back",
        icon: "https://github.githubassets.com/favicons/favicon.svg",
        namespace: "https://github.com/Sec-ant",
        match: [
          "https://github.com/",
          "https://github.com/?*",
          "https://github.com/dashboard*",
        ],
        downloadURL: cdn.npmmirror(undefined, `dist/${name}.user.js`)[1](
          "latest",
          name,
        ),
        updateURL: cdn.npmmirror(undefined, `dist/${name}.meta.js`)[1](
          "latest",
          name,
        ),
        "run-at": "document-start",
      },
    }),
  ],
});
