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
          {" "}
          You would not believe this
        </h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste a
        praesentium aut et pariatur sit rerum, aspernatur repellat vel quidem
        minus illum dicta ullam voluptatem, aliquid quisquam deserunt veritatis
        consectetur porro. Vero tempora ratione blanditiis reprehenderit,
        laudantium veritatis, ad dolores, cum odit debitis explicabo sint
        nostrum quod ullam? Odio exercitationem aliquam animi quidem, a corporis
        repellat, repellendus liquam. Repellendus aut excepturi quae non cum
        asperiores, animi explicabo vitae. Sit fugit magni vero neque quasi
        maxime voluptatum veritatis obcaecati adipisci provident beatae, placeat
        nisi aperiam atque id! Tenetur maxime unde dolores? Labore cumque ab
        ullam libero nisi. Vitae unde iusto laudantium autem illo amet
        perferendis blanditiis earum laboriosam reprehenderit expedita
        cupiditate, rerum ea.
      </div>
    </section>
  );
};

export default PostById;
