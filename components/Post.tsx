import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
const Post = () => {
  return (
    <div className="item">
      <div className="images">
        <Link href={"#"}>
          <Image
            src="/images/img1.png"
            alt={""}
            className="rounded"
            width={"500"}
            height={"350"}
          />
        </Link>
      </div>
      <div className="info flex flex-col justify-center py-4">
        <div className="category">
          <Link className="text-orange-600 hover:text-orange-800" href={"#"}>
            Business, Travel
          </Link>
          {" — "}
          <Link className="text-gray-800 hover:text-gray-600" href={"#"}>
            July 27, 2023
            {/* ┬ ↗ */}
          </Link>
        </div>

        <div className="title">
          <Link
            href={""}
            className="text-xl font-bold text-gray-800 hover:text-gray-600 py-3"
          >
            The Dance of Seasons
          </Link>
        </div>
        <p className="description text-gray-500 py-3">
          One of nature&apos;s most enchanting displays is the changing of
          seasons. The blossoming of flowers in spring, the warmth of summer,
          the vibrant hues of autumn, and the quiet beauty of winter
          snowfall—all contribute to the ever-turning wheel of time. Each season
          brings its own unique charm, teaching us about the cyclical nature of
          life and the inevitability of change.
        </p>

        <Author></Author>
      </div>
    </div>
  );
};

export default Post;
