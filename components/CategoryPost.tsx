import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import Tag from "./Tag";
import { Post } from "@/models/Post";
interface CategoryPostProps {
  data: Post;
}
const CategoryPost = ({ data }: CategoryPostProps) => {
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
            height={"250"}
          />
        </Link>
      </div>

      <div className="info flex flex-col justify-center">
        <div className="category flex">
          <Link
            className="text-orange-600 hover:text-orange-800 flex"
            href={`/posts/${id}`}
          >
            {category || "Unknown"}
          </Link>
          {" — "}
          <Link
            className="text-gray-800 hover:text-gray-600"
            href={`/posts/${id}`}
          >
            {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="md:text-xl font-bold text-gray-800 hover:text-gray-600 py-3"
          >
            {title || "Unknown"}
          </Link>
        </div>

        {author ? <Author data={author}></Author> : <></>}
      </div>
    </div>
  );
};

export default CategoryPost;
