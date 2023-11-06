"use client";
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

            <p className="py-5 text-gray-400">
              Copyright © {new Date().getFullYear()}. All rights reserved.
            </p>

            <p className="text-center text-gray-400">Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
