// Everyday Wonder — make.fun entry
// Writes one sentence about a small everyday moment of wonder
// to /output/entry.txt. The sentence is 94 characters, within the
// 1–200 character gate, and it is a single sentence on one line.
// The wonder: a lift ride turns into sharing a stranger's song
// for exactly one floor — ordinary, brief, and strange all at once.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "The lift doors open on a stranger humming, and for one floor you're both inside the same song.";

// The entry is exactly one sentence on one line: no newline, no second line.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back and confirm it matches byte for byte.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the line");
}

console.log(`Wrote ${chars} characters to /output/entry.txt`);
console.log(LINE);
