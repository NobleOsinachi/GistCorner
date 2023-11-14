import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import { Post } from "@/models/Post";

interface RelatedPostProps {
  data: Post;
}

const RelatedPost = ({ data }: RelatedPostProps) => {
  const { id, title, subtitle, category, img, description, published, author } =
    data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || "/images/img1.png"}
            alt={id.toString()}
            className="rounded"
            width={"300"}
            height={"200"}
          />
        </Link>
      </div>

      <div className="info flex flex-col justify-center">
        <div className="category">
          <Link
            className="text-orange-600 hover:text-orange-800"
            href={`/posts/${id}`}
          >
            {category || "Uncategorized"}
          </Link>
          {" — "}
          <Link
            className="text-gray-800 hover:text-gray-600"
            href={`/posts/${id}`}
          >
            {published || "Unknown"}
            {/* ┬ ↗ */}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800  hover:text-gray-600 py-3"
          >
            {title || "Unknown Title"}
          </Link>
        </div>

        {/* <Author></Author> */}

        {author ? <Author data={author}></Author> : <></>}
      </div>
    </div>
  );
};

export default RelatedPost;
