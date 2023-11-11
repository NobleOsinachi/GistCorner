import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import { getBaseUrl } from "./getBaseUrl";
const PopularPost = () => {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"#"}>
          <Image src="/images/img1.png" alt={""} width={600} height={400} />
        </Link>
      </div>
      <div className="info flex flex-col justify-center py-4">
        <div className="category">
          <Link className="text-orange-600 hover:text-orange-800" href={"#"}>
            Business, Travel
          </Link>
          {" — "}
          <Link className="text-gray-800 hover:text-gray-600" href={"#"}>
            June 18, 2023
            {/* ┬ ↗ */}
          </Link>
        </div>

        <div className="title">
          <Link
            href=""
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600 py-3"
          >
            Finding Solace in Green Spaces
          </Link>
        </div>
        <p className="description text-gray-500 py-3">
          Green spaces, whether vast forests or urban parks, provide a refuge
          from the hustle and bustle of daily life. They offer a sanctuary for
          reflection, exercise, or a simple escape from the demands of the
          modern world. The vibrant colors of flowers, the gentle sway of trees,
          and the calming presence of water create an oasis that rejuvenates
          both body and mind.
        </p>

        <Author></Author>
      </div>
    </div>
  );
};

export default PopularPost;
