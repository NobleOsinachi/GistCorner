import Link from "next/link";
import { ImFacebook, ImYoutube, ImTwitter, ImInstagram } from "react-icons/im";

const Header = () => {
  return (
    <>
      <header className="bg-gray-50">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between text-center py-3 xl:container xl:mx-auto">
          <div className="flex md:flex-none w-96  order-2 sm:order-1 justify-center py-4 sm:py-0">
            <input
              type="text"
              placeholder="Search..."
              className="mt-1 block w-60 px-3 py-2 bg-white border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
            />
          </div>
          <div className="shrink w-80 sm:order-2">
            <Link className="font-bold uppercase text-3xl" href={"/"}>
              Design
            </Link>
          </div>
          <div className="w-96 order-3 flex justify-center">
            <div className="flex gap-6">
              <Link href={"https://fb.me/noblechukwukere5"}>
                <ImFacebook color="#888888" />
              </Link>
              <Link href={"https://instagram.com/NobleOsinachi"}>
                <ImInstagram color="#888888" />
              </Link>
              <Link href={"https://twitter.com/NobleOsinachi"}>
                <ImTwitter color="#888888" />
              </Link>
              <Link href={"https://youtube.com/@NobleOsinachi"}>
                <ImYoutube color="#888888" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
