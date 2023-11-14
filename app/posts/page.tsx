import Author from "@/components/Author";

interface PostByIdProps {
  params: { id: string };
  searchParams: [{ name: "#" }];
}

const PostById = ({ params, searchParams }: PostByIdProps) => {
  return (
    <section className="container mx-auto md:px-2 py-16 w-1/2">
      <div className="flex justify-center">LIST OF POSTS DESC ORDER</div>
    </section>
  );
};

export default PostById;
