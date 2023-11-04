import Image from "next/image";
import Link from "next/link";
import Author from "./Author";

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
      <div className="info flex flex-col justify-center">
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
        <div className="title">
          <Link
            href={""}
            className="text-3xl md:text-6xl font-bold text-gray-800  hover:text-gray-600 py-3"
          >
            Just In: World Population Crosses 8 Billion Mark
          </Link>
        </div>
        <p className="description text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          voluptatum voluptatibus provident recusandae nostrum omnis! Optio ex
          iusto aspernatur illo culpa.
        </p>

        <Author></Author>
      </div>
    </div>
  );
};

export default Slide;
