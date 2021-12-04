import fs from "fs";
import path from "path";
import YAML from "yaml";

export function getTalks() {
  const talks = fs.readFileSync(
    path.join(process.cwd(), "_data", "talks.yaml"),
    "utf8"
  );
  return YAML.parse(talks);
}
