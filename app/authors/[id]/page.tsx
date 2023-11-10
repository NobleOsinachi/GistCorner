import Author from "@/components/Author";

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
          The Beauty of Nature: A Brief Exploration
        </h1>
        Nature has a way of captivating our senses and inspiring awe. From the
        majestic mountains to the serene beaches, the diversity of the natural
        world never ceases to amaze. Each element, from the rustling leaves to
        the chirping birds, contributes to the symphony of life.
      </div>
    </section>
  );
};

export default PostById;
