import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import Tag from "./Tag";

const CategoryPost = () => {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"#"}>
          <Image
            src="/images/img1.png"
            alt={""}
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
            href={"#"}
          >
            Business, Travel
            {/* <Tag>Business</Tag>            <Tag>Travel</Tag> */}
          </Link>
          {" — "}
          <Link className="text-gray-800 hover:text-gray-600" href={"#"}>
            July 30, 2023
            {/* ┬ ↗ */}
          </Link>
        </div>
        <div className="title">
          <Link
            href={""}
            className="text-xl font-bold text-gray-800  hover:text-gray-600 py-3"
          >
            Navigating Global Markets: Business Insights and Travel Adventures
          </Link>
        </div>

        {/* <Author></Author> */}
      </div>
    </div>
  );
};

export default CategoryPost;
