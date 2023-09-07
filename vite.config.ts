import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/index.ts",
      userscript: {
        name: "GitHub Feed Back",
        icon: "https://github.githubassets.com/favicons/favicon.svg",
        namespace: "https://github.com/Sec-ant",
        match: ["https://github.com/", "https://github.com/dashboard"],
        "run-at": "document-start",
      },
    }),
  ],
});
