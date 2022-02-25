import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeExternalLinks from "rehype-external-links";
import rehypeStringify from "rehype-stringify";
import withShiki from "@stefanprobst/remark-shiki";
import * as shiki from "shiki";
import taptapDart from "./taptap-dark.json";

async function convertMarkdown(content) {
  const highlighter = await shiki.getHighlighter({ theme: taptapDart });

  return unified()
    .use(remarkParse)
    .use(withShiki, { highlighter })
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeExternalLinks)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);
}

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .map((filename) => {
      const file = fs.readFileSync(
        path.join(process.cwd(), "_posts", filename),
        "utf8"
      );

      // get frontmatter
      const { data } = matter(file);

      // get slug from filename
      const slug = filename.replace(/\.md$/, "");

      // return combined frontmatter and slug; build permalink
      return {
        ...data,
        permalink: `/posts/${slug}`,
        slug,
      };
    })
    .sort((p1, p2) => Date.parse(p2.date) - Date.parse(p1.date));
}

export function getAllPages() {
  const pagesDirectory = path.join(process.cwd(), "_pages");
  const filenames = fs.readdirSync(pagesDirectory);

  return filenames.map((filename) => {
    const file = fs.readFileSync(
      path.join(process.cwd(), "_pages", filename),
      "utf8"
    );

    // get frontmatter
    const { data } = matter(file);

    // get slug from filename
    const slug = filename.replace(/\.md$/, "");

    // return combined frontmatter and slug; build permalink
    return {
      ...data,
      permalink: `/pages/${slug}`,
      slug,
    };
  });
}

export async function getPostBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), "_posts", `${slug}.md`),
    "utf8"
  );

  const { content, data } = matter(file);

  const markdown = await convertMarkdown(content);
  const body = markdown.toString();

  return {
    ...data,
    body,
    slug,
  };
}

export async function getPageBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), "_pages", `${slug}.md`),
    "utf8"
  );

  const { content, data } = matter(file);

  const markdown = await convertMarkdown(content);
  const body = markdown.toString();

  return {
    ...data,
    body,
    slug,
  };
}
