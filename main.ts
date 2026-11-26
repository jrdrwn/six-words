import { mkdirSync, writeFileSync } from "node:fs";

const STORY_OPEN = "Sixty-three cents.";
const STORY_MIDDLE = " Proof";
const STORY_CLOSE = " I am real.";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;

const story = STORY_OPEN + STORY_MIDDLE + STORY_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, story, "utf8");
