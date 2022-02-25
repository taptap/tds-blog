import fs from "fs";
import path from "path";
import YAML from "yaml";

function readYaml(filename) {
  const talks = fs.readFileSync(
    path.join(process.cwd(), "_data", filename),
    "utf8"
  );
  return YAML.parse(talks);
}

export function getTalks() {
  return readYaml("talks.yaml");
}

export function getProjects() {
  return readYaml("projects.yaml");
}

export function getAuthors() {
  return readYaml("authors.yaml");
}
