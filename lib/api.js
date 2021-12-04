import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeExternalLinks from "rehype-external-links";
import rehypeStringify from "rehype-stringify";

function convertMarkdown(content) {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeExternalLinks)
    .use(rehypeStringify)
    .processSync(content);
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

export function getPostBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), "_posts", `${slug}.md`),
    "utf8"
  );

  const { content, data } = matter(file);

  const body = convertMarkdown(content).toString();

  return {
    ...data,
    body,
    slug,
  };
}

export function getPageBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), "_pages", `${slug}.md`),
    "utf8"
  );

  const { content, data } = matter(file);

  const body = convertMarkdown(content).toString();

  return {
    ...data,
    body,
    slug,
  };
}
