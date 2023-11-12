import Image from "next/image";
import { FunctionComponent } from "react";

const Error = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-orange-600 py-10">
        {children || "Something went wrong"}
      </h1>

      <center>
        <Image
          src={"/images/not_found.png"}
          alt={"404 error"}
          width={400}
          height={400}
        ></Image>
      </center>
    </div>
  );
};

export default Error;
