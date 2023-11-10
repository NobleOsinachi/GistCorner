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
          <Image src="/images/img1.png" alt={""} width={"600"} height={"600"} />
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
        <div className="category">
          <Link className="text-orange-600 hover:text-orange-800" href={"#"}>
            Business, Travel
          </Link>
          {" — "}
          <Link className="text-gray-800 hover:text-gray-600" href={"#"}>
          April 28, 2023
            {/* ┬ ↗ */}
          </Link>
        </div>
        <div className="title">
          <Link
            href={""}
            className="text-3xl md:text-6xl font-bold text-gray-800  hover:text-gray-600 py-3"
          >
            Preserving Our Natural Heritage
          </Link>
        </div>
        <p className="description text-gray-500 py-3">
          As we marvel at the wonders of nature, it becomes our responsibility
          to protect and preserve it. Conservation efforts, sustainable
          practices, and a collective commitment to environmental stewardship
          are essential. By safeguarding our natural heritage, we ensure that
          future generations can continue to find inspiration and solace in the
          untouched beauty of the world around us. In conclusion, the beauty of
          nature is a timeless source of inspiration and tranquility. It reminds
          us to slow down, appreciate the world we live in, and strive to be
          responsible custodians of the environment. So, the next time you find
          yourself amidst nature's grandeur, take a moment to soak it in—the
          beauty that surrounds us is a gift that keeps on giving.
        </p>

        <Author></Author>
      </div>
    </div>
  );
};

export default Slide;
