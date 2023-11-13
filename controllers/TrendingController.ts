import { Post } from "@/models/Post";

export async function getTrending() {
  try {
    const data = await fetch("/api/trending");
    const posts: Array<Post> = await data.json();
    return posts;
  } catch (error) {
    console.error("Error fetching trending posts:", error);
    return [];
  }
}
