import rss from "@astrojs/rss";
import { SITE } from "@/site.config";
import { getPostSlug, getSortedPosts } from "@/utils/posts";

export async function GET(context: { site?: URL }) {
  const posts = await getSortedPosts();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${getPostSlug(post)}`
    }))
  });
}
