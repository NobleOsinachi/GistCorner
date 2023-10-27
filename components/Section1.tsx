import Slide from "./Slide";

const Section1 = () => {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto md:px-20">
          <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

          <Slide />
        </div>
      </section>
    </>
  );
};

export default Section1;
