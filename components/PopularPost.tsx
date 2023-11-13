import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import { Post } from "@/models/Post";

interface PopularPostProps {
  data: Post;
}
const PopularPost = ({ data }: PopularPostProps) => {
  const { id, title, subtitle, category, img, description, published, author } =
    data;
  return (
    <div className="grid">
      <div className="images">
        <Link href={"#"}>
          <Image
            src={img || "/images/img1.png"}
            alt={id.toString()}
            width={600}
            height={400}
          />
        </Link>
      </div>
      <div className="info flex flex-col justify-center py-4">
        <div className="category">
          <Link className="text-orange-600 hover:text-orange-800" href={"#"}>
            {category || "Uncategorized"}
          </Link>
          {" — "}
          <Link className="text-gray-800 hover:text-gray-600" href={"#"}>
            {published || "Unknown"}
            {/* ┬ ↗ */}
          </Link>
        </div>

        <div className="title">
          <Link
            href=""
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600 py-3"
          >
            {title || "Unknown"}
          </Link>
        </div>
        <p className="description text-gray-500 py-3">
          {description || "Unknown"}
        </p>

        {author ? <Author data={author}></Author> : <></>}
      </div>
    </div>
  );
};

export default PopularPost;
