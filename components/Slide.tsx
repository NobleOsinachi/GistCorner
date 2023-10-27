import Image from "next/image";
import Link from "next/link";

const Slide = () => {
  // const res = await fetch("/api/category");
  // const category: Array<string> = await res.json();

  return (
    <div className="grid md:grid-cols-2 gap-2">
      <div className="image px-5">
        <Link href={"#"}>
          <Image
            src="/images/image.png"
            alt={""}
            width={"600"}
            height={"600"}
          />
        </Link>
      </div>
      <div className="info">
        <div className="category">
          <Link className="text-orange-600 hover:text-orange-800" href={"#"}>
            Business, Travel
          </Link>
          {" — "}
          <Link className="text-gray-800 hover:text-gray-600" href={"#"}>
            July 30, 2023
            {/* ┬ ↗ */}
          </Link>
        </div>
        <div className="title"></div>
        <div className="description"></div>
      </div>
    </div>
  );
};

export default Slide;
