import CategoryPost from "./CategoryPost";

const Section4 = () => {
  return (
    <section className="container mx-auto md:px-20 py-10    ">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className=" text-4xl font-bold py-12">Business </h1>
          <div className="flex flex-col gap-6">
            {/* Posts */}
            <CategoryPost></CategoryPost>
            <CategoryPost></CategoryPost>
            <CategoryPost></CategoryPost>
            <CategoryPost></CategoryPost>
          </div>
        </div>
        <div className="item">
          <h1 className=" text-4xl font-bold py-12">Travel </h1>
          <div className="flex flex-col gap-6">
            {/* Posts */}
            <CategoryPost></CategoryPost>
            <CategoryPost></CategoryPost>
            <CategoryPost></CategoryPost>
            <CategoryPost></CategoryPost>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
