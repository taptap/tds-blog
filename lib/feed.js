import fs from "fs";
import { Feed } from "feed";

export function generateFeed(posts) {
  const baseUrl = "https://blog.taptap.dev";
  const author = {
    name: "TapTap Developer Services",
    email: "tds-team@xd.com",
    link: "https://twitter.com/taptap",
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: "TapTap 开发者服务博客",
    description: "TapTap 开发者服务的产品更新和团队动态。",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
  });

  // Add each article to the feed
  posts.forEach((post) => {
    // TODO add `content`
    const { date, title } = post;
    const url = `${baseUrl}/${post.permalink}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description: post.excerpt,
      author: [author],
      date: new Date(date),
    });
  });

  // Write the RSS output to a public file, making it
  // accessible at ashleemboyer.com/rss.xml
  fs.writeFileSync("public/rss.xml", feed.rss2());
}
