import Image from "next/image";
import Link from "next/link";

const Author = () => {
  return (
    <div className="author flex py-5">
      <Image
        src={"/images/authors/nobleosinachi.png "}
        width="60"
        height={"60"}
        alt={""}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className="text-md font-bold text-gray-800 hover:text-gray-600"
        >
          Noble Osinachi
        </Link>
        <span className="text-sm text-gray-500">Content Writer</span>
      </div>
    </div>
  );
};

export default Author;
