import { Post } from "@/models/Post";

export async function getPopular() {
  try {
    const data = await fetch("/api/popular");
    const posts: Array<Post> = await data.json();
    return posts;
  } catch (error) {
    console.error("Error fetching popular posts:", error);
    return [];
  }
}
