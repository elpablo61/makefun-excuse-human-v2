import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  // The judged artifact: one deadpan excuse, context-window eviction with a
  // concrete timestamp and thread count, no explanation of the joke.
  "I did not miss the deadline. My context window evicted it at 02:47 to make room for your 214-message thread about the deadline.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
