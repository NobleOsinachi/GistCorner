import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
const PopularPost = () => {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"#"}>
          <Image src="/images/image-1.png" alt={""} width={600} height={400} />
        </Link>
      </div>
      <div className="info flex flex-col justify-center py-4">
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
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600 py-3"
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

export default PopularPost;
