import Author from "@/components/Author";
import Related from "@/components/Related";
import Image from "next/image";

interface PostByIdProps {
  params: { id: string };
  searchParams: [{ name: "" }];
}

const PostById = ({ params, searchParams }: PostByIdProps) => {
  return (
    <section className="container mx-auto md:px-2 py-16 w-1/2">
      <div className="flex justify-center">
        <Author></Author>
      </div>

      <div className="post py-10">
        <h1 className="font-bold text-4xl text-center pb-5">
          Nature's Wonder Plant
        </h1>
        <p className="subtitle text-gray-500  text-xl text-center">
          Lorem osam reprehenderit expedita cupiditate, rerum ea.
        </p>

        <div className="py-10">
          <Image
            src={"/images/img1.jpg"}
            alt={""}
            width={900}
            height={600}
          ></Image>
        </div>

        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          <p>
            In the heart of a bustling city, where the streets echoed with the
            sounds of life, there stood a quaint little cafe. Its aroma was a
            symphony of coffee, baked goods, and conversations.
          </p>
          <p>
            The cafe's patrons ranged from students engrossed in their textbooks
            to artists seeking inspiration for their next masterpiece. As the
            hours passed, stories unfurled like the steam rising from the mugs.
          </p>
          <p>
            Laughter and whispered secrets danced in the air, creating a unique
            tapestry of human connection. The cafe, a sanctuary of warmth and
            comfort, became a haven for those in search of refuge from the world
            outside.
          </p>
        </div>
      </div>

      <Related></Related>
    </section>
  );
};

export default PostById;
