import { getTrending } from "@/controllers/TrendingController";
import Error from "./Error";
import { useState, useEffect } from "react";
import RelatedPost from "./RelatedPost";
import Spinner from "./Spinner";
import { Post } from "@/models/Post";
import { getPosts } from "@/controllers/PostController";

const Related = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null | boolean>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsError("Error fetching posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error>{isError}</Error>;
  return (
    <section className="pt-20">
      {" "}
      <h1 className="text-3xl font-bold py-10">Related </h1>{" "}
      <div className="flex flex-col gap-10">
        {" "}
        {posts.map((post, index) => (
          <RelatedPost data={post} key={index}></RelatedPost>
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default Related;
