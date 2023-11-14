import Link from "next/link";
import Newsletter from "./Newsletter";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-gray-50"
        style={{
          backgroundImage: "url('/images/footer.png')",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Newsletter></Newsletter>
        <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
            <div className="flex gap-6 justify-center">
              <SocialMedia></SocialMedia>
            </div>

            <center>
              <p className="text-center text-gray-400 pt-5">
                <Link href="/privacy-policy">Privacy Policy</Link>
                {" | "}
                <Link href="/terms-of-service"> Terms & Conditions</Link>
                {" | "}
                <Link href="/disclaimer">Disclaimer</Link>
              </p>

              <p className="py-5 text-gray-400">
                Copyright © {new Date().getFullYear()}. All rights reserved.
              </p>
            </center>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
