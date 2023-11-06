import Link from "next/link";
import { ImFacebook, ImYoutube, ImTwitter, ImInstagram } from "react-icons/im";

const SocialMedia = () => {
  return (
    <>
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
    </>
  );
};

export default SocialMedia;
