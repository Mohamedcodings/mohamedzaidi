import { getSortedPosts, getPostSlug, getReadingTime } from "@/utils/posts";

export async function GET() {
  const posts = await getSortedPosts();

  return new Response(
    JSON.stringify(
      posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        date: post.data.pubDate.toISOString(),
        readingTime: post.data.readingTime ?? getReadingTime(post.body),
        tags: post.data.tags,
        url: `/posts/${getPostSlug(post)}`
      }))
    ),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }
  );
}
