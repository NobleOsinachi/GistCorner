import RelatedPost from "./RelatedPost";

const Related = () => {
  return (
    <section className="pt-20">
      <h1 className="text-3xl font-bold py-10">Related </h1>

      <div className="flex flex-col gap-10">
        <RelatedPost></RelatedPost>
        <RelatedPost></RelatedPost>
        <RelatedPost></RelatedPost>
        <RelatedPost></RelatedPost>
      </div>
    </section>
  );
};

export default Related;
